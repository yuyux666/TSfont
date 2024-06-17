<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import ScenePanel from '@/views/Common/ScenePanel.vue'
import { ref } from 'vue'
const defaulrForm = {
  title: '',
  cate_id: '',
  cover_img: '',
  content: '',
  state: ''
}
const formModel = ref({
  ...defaulrForm
})
</script>
<template>
  <div class="container">
    <ScenePanel title="我要投诉">
      <el-form
        :model="formModel"
        ref="formRef"
        label-width="100px"
        style="width: 70%"
      >
        <el-form-item label="投诉人" prop="title">
          <el-input
            v-model="formModel.title"
            placeholder="周杰伦"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="投诉标题" prop="cate_id">
          <el-input
            v-model="formModel.title"
            placeholder="请输入标题"
          ></el-input>
        </el-form-item>
        <el-form-item label="投诉内容" prop="content">
          <div class="editor">
            <QuillEditor
              ref="editorRef"
              v-model:content="formModel.content"
              content-type="html"
              theme="snow"
            ></QuillEditor>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button @click="onPublish('已发布')" type="primary"
            >提交投诉</el-button
          >
        </el-form-item>
      </el-form>
    </ScenePanel>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #fff;
  .editor {
    width: 800px;
    :deep(.ql-editor) {
      min-height: 200px;
    }
  }
}
</style>
