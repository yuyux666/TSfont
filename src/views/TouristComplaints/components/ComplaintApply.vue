<script setup>
// import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import ScenePanel from '@/views/Common/ScenePanel.vue'
import { Plus } from '@element-plus/icons-vue'
import { genFileId } from 'element-plus'

import { ref } from 'vue'
import { complaintSubmitService } from '@/apis/complaint'
const formRef = ref()
const defaultForm = {
  name: '',
  title: '',
  content: '',
  fileList: []
}
const formModel = ref({
  ...defaultForm
})
const rules = ref({
  title: [{ required: true, message: '请输入投诉标题', trigger: 'blur' }],
  content: [{ required: true, message: '请输入投诉内容', trigger: 'blur' }]
})
// 图片上传相关逻辑
// const imageUrl = ref('')
const onSelectFile = () => {}
// let fileList = reactive([])
const upload = (e) => {
  console.log(e.target.files[0])
  formModel.value.fileList.push(e.target.files[0])
  console.log(formModel.value.fileList)

  readFile(e.target.files[0])
}
function readFile(file) {
  var reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function () {
    // 图片内容
    console.log(reader.result)
  }
}
const removeFile = (index) => {
  formModel.value.fileList.splice(index, 1)
}

const load = ref(null)

const handleExceed = (files) => {
  load.value.clearFiles()
  const file = files[0]
  file.uid = genFileId()
  load.value.handleStart(file)
}

// 上传表单
const submitUpload = async () => {
  load.value.submit()
  const res = await complaintSubmitService({ title: '标题', content: '内容' })
  console.log(res)
}
</script>
<template>
  <div class="container">
    <ScenePanel title="我要投诉">
      <el-form
        :model="formModel"
        ref="formRef"
        :rules="rules"
        label-width="100px"
        style="width: 70%"
      >
        <el-form-item label="投诉人" prop="name">
          <el-input
            v-model="formModel.name"
            placeholder="周杰伦"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="投诉标题" prop="title">
          <el-input
            v-model="formModel.title"
            placeholder="请输入标题"
          ></el-input>
        </el-form-item>
        <el-form-item label="投诉内容" prop="content">
          <el-input v-model="formModel.content" type="textarea" />
        </el-form-item>
        <el-form-item label="上传附件">
          <input type="file" multiple @change="upload" />
          <ul>
            <li v-for="(file, index) in fileList" :key="index">
              {{ file.name }}
              <button @click="removeFile(index)">删除</button>
            </li>
          </ul>
        </el-form-item>
        <el-form-item label="上传附件2">
          <!-- 文件上传：需要关闭el的自动上传功能(:auto-upload)，不需要配置action等参数
        只需要前端的本地预览工作，无需在提交前上传图标
        语法：URL.createObjectURL(...) -->
          <el-upload
            ref="load"
            class="avatar-uploader"
            :auto-upload="false"
            :on-change="onSelectFile"
            :limit="1"
            :on-exceed="handleExceed"
          >
            <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
            <template #tip>
              <div class="el-upload__tip text-red" style="color: #fff">
                只能上传一个视频或图片文件
              </div>
            </template>
          </el-upload>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitUpload">提交投诉</el-button>
          <el-button type="primary" plain>重置</el-button>
        </el-form-item>
      </el-form>
    </ScenePanel>
  </div>
</template>

<style lang="scss" scoped>
.el-form-item {
  margin-bottom: 40px;
  width: 600px;
}
:deep(.el-form-item__label) {
  color: #fff;
  margin-right: 10px;
}
:deep(.el-upload-list__item-name) {
  color: #ccc;
}
.container {
  width: 100%;
  background-color: #e3b3b3;
  border: 1px solid $xtxColor;
  border-radius: 10px;
  margin-top: 10px;
  // 透明背景色
  background-color: rgba(200, 196, 223, 0.4);
  color: #fff;
  font-weight: 500;
  .avatar-uploader {
    :deep() {
      .el-upload {
        background-color: #fff;
        border: 1px dashed var(--el-border-color);
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: var(--el-transition-duration-fast);
      }
      .el-upload:hover {
        border-color: var(--el-color-primary);
      }
      .el-icon.avatar-uploader-icon {
        font-size: 10px;
        color: #8c939d;
        width: 178px;
        height: 30px;
        text-align: center;
      }
    }
  }
  .editor {
    width: 800px;
    :deep(.ql-editor) {
      min-height: 200px;
    }
  }
}
</style>
