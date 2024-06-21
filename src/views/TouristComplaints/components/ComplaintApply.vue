<script setup>
// import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import ScenePanel from '@/views/Common/ScenePanel.vue'
import { Plus } from '@element-plus/icons-vue'

import { ref } from 'vue'
const formRef = ref()
const defaultForm = {
  name: '',
  title: '',
  picture: '',
  content: '',
  video: ''
}
const formModel = ref({
  ...defaultForm
})
const rules = ref({
  title: [{ required: true, message: '请输入投诉标题', trigger: 'blur' }],
  content: [{ required: true, message: '请输入投诉内容', trigger: 'blur' }]
})
// 图片上传相关逻辑
const imageUrl = ref('')
const onSelectFile = (uploadFile) => {
  // 拿到上传的文件
  imageUrl.value = URL.createObjectURL(uploadFile.raw) // 配置地址
  //将图片对象存入数据里便于将来提交
  formModel.value.picture = uploadFile.raw
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
        <el-form-item label="上传图片" prop="picture">
          <!-- 文件上传：需要关闭el的自动上传功能(:auto-upload)，不需要配置action等参数
        只需要前端的本地预览工作，无需在提交前上传图标
        语法：URL.createObjectURL(...) -->
          <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            :auto-upload="false"
            :on-change="onSelectFile"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="上传视频" prop="video">
          <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            :auto-upload="false"
            :on-change="onSelectVideo"
          >
            <el-button size="small" type="primary">点击上传视频</el-button>
            <template v-slot:tip>
              <span class="el-upload__tip">支持mp4格式的视频</span>
            </template>
          </el-upload>
          <el-progress
            v-if="videoProgress !== null"
            :percentage="videoProgress"
            status="uploading"
            style="margin-top: 10px"
          ></el-progress>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交投诉</el-button>
        </el-form-item>
      </el-form>
    </ScenePanel>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #fff;
  .avatar-uploader {
    :deep() {
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
      .el-upload {
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
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
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
