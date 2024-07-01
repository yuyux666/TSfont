<script setup>
// import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import ScenePanel from '@/views/Common/ScenePanel.vue'
import { useUserStore } from '@/stores'
import { ref } from 'vue'
import { complaintSubmitService } from '@/apis/complaint'
import { showSuccessToast } from 'vant'
const useStore = useUserStore()
console.log(useStore)
const formRef = ref(null)
const defaultForm = {
  name: '',
  title: '',
  content: '',
  file: null
}
const formModel = ref({
  ...defaultForm
})
const rules = ref({
  title: [{ required: true, message: '请输入投诉标题', trigger: 'blur' }],
  content: [{ required: true, message: '请输入投诉内容', trigger: 'blur' }]
})
//文件列表
// const fileList = ref([])
// 图片上传相关逻辑
// const imageUrl = ref('')
// const onSelectFile = () => {
//   console.log('change')
//   console.log(fileList.value)
// }
// let fileList = reactive([])
// const upload = (e) => {
//   console.log(e.target.files[0])
//   formModel.value.fileList.push(e.target.files[0])
//   console.log(formModel.value.fileList)

//   readFile(e.target.files[0])
// }
// function readFile(file) {
//   var reader = new FileReader()
//   reader.readAsDataURL(file)
//   reader.onload = function () {
//     // 图片内容
//     console.log(reader.result)
//   }
// }
// const removeFile = (index) => {
//   formModel.value.fileList.splice(index, 1)
// }

// const load = ref(null)

// const handleExceed = (files) => {
//   load.value.clearFiles()
//   const file = files[0]
//   file.uid = genFileId()
//   load.value.handleStart(file)
// }
// 上传表单
const submitUpload = async () => {
  // load.value.submit()
  await formRef.value.validate()
  const res = await complaintSubmitService({
    title: formModel.value.title,
    content: formModel.value.content
  })
  console.log(res)
  showSuccessToast({
    message: '提交成功',
    style: {
      backgroundColor: 'rgba(255, 254, 215, 0.897)',
      color: '#666'
    }
  })
}

const fileChange = (e) => {
  console.log(e.target.files)
  if (e.target.files.length > 0) {
    formModel.value.file = e.target.files[0]
  } else {
    formModel.value.file = null
  }
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
          <!-- 文件上传：需要关闭el的自动上传功能(:auto-upload)，不需要配置action等参数
        只需要前端的本地预览工作，无需在提交前上传图标
        语法：URL.createObjectURL(...) -->
          <a href="javascript:;" class="file"
            >选择一个附件
            <input type="file" @change="fileChange" />
          </a>
          <span class="fileName">{{
            formModel.file ? formModel.file.name : '未选择文件'
          }}</span>

          <!-- <el-upload
            v-model:file-list="fileList"
            ref="load"
            class="avatar-uploader"
            :auto-upload="false"
            :on-change="onSelectFile"
            :limit="1"
            :on-exceed="handleExceed"
            action="http://192.168.42.53:8080/complaint/upload?state=0"
            :headers="header"
          >s
            <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
            <template #tip>
              <div class="el-upload__tip text-red" style="color: #fff">
                只能上传一个视频或图片文件
              </div>
            </template>
</el-upload> -->
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
.file {
  position: relative;
  display: inline-block;
  background: #d0eeff;
  border: 1px solid #99d3f5;
  border-radius: 4px;
  padding: 4px 12px;
  overflow: hidden;
  color: #1e88c7;
  text-decoration: none;
  text-indent: 0;
  line-height: 20px;
}
.file input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
}
.file:hover {
  background: #aadffd;
  border-color: #78c3f3;
  color: #004974;
  text-decoration: none;
}
.fileName {
  text-indent: 1em;
}
</style>
