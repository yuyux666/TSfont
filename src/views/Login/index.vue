<script setup>
import { User, Lock } from '@element-plus/icons-vue'

import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isRegister = ref(false) // true注册
// 登录
const form = ref({})

// 注册
// 整个用于提交的form数据对象
const formModel = ref({
  username: '',
  password: '',
  repassword: ''
})
// 整个表单的校验规则
// 每一条规则都是一个对象
// 非空校验required、触发：trigger
// 长度校验min、max
// 正则校验patern：正则规则 \S非空字符
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, max: 10, message: '用户名必须是5-10位字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15位非空字符',
      trigger: 'blur'
    }
  ],
  repassword: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15位非空字符',
      trigger: 'blur'
    },
    {
      validator: (rules, value, callback) => {
        if (value !== formModel.value.password) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          // 校验成功，需要callback
          callback()
        }
      }
    }
  ]
}

// 切换时重置
watch(isRegister, () => {
  formModel.value = {
    username: '',
    password: '',
    repassword: ''
  }
})
const login = () => {
  // 跳转到首页
  router.push('/home')
}
</script>

<template slot-scope="scope">
  <el-row class="login-page">
    <el-col :span="15" class="bg">
      <h1>四姑娘山<br />游客服务系统</h1>
      <p>CopyRight © huadi第7组</p>
    </el-col>
    <el-col :span="6" :offset="1" class="form">
      <!-- 注册相关 -->
      <el-form
        :model="formModel"
        :rules="rules"
        ref="form"
        size="large"
        autocomplete="off"
        v-if="isRegister"
      >
        <el-form-item>
          <h1>游客注册</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="formModel.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formModel.password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input
            v-model="formModel.repassword"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入再次密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="register"
            class="button"
            type="primary"
            auto-insert-space
          >
            注册
          </el-button>
        </el-form-item>

        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = false">
            ← 返回
          </el-link>
        </el-form-item>
      </el-form>
      <!-- 登录相关 -->
      <el-form
        :model="formModel"
        :rules="rules"
        ref="form"
        size="large"
        autocomplete="off"
        v-else
      >
        <el-form-item>
          <h1>游客登录</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="formModel.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formModel.password"
            name="password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>

        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox>记住我</el-checkbox>
            <el-link type="primary" :underline="false">忘记密码？</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="login"
            class="button"
            type="primary"
            auto-insert-space
            >登录</el-button
          >
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = true">
            注册 →
          </el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background-color: #fff;

  /* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
  @font-face {
    font-family: '阿里妈妈刀隶体 Regular';
    font-weight: 400;
    src:
      url('//at.alicdn.com/wf/webfont/OR0tH8DJnmu4/RzSNuisZZLtG.woff2')
        format('woff2'),
      url('//at.alicdn.com/wf/webfont/OR0tH8DJnmu4/euxiJ4P4jVd4.woff')
        format('woff');
    font-display: swap;
  }
  .bg {
    font-family: '阿里妈妈刀隶体 Regular';

    position: relative;
    background: url('@/assets/images/background3.jpg') no-repeat center / cover;
    border-radius: 0 20px 20px 0;

    h1 {
      position: absolute;
      display: block;
      font-size: 50px;
      color: #fff;
      top: 15%;
      left: 20%;
      transform: translate(-50%, -50%);
    }
    p {
      position: absolute;
      display: block;
      font-size: 20px;
      color: #fff;
      bottom: 5%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
    .title {
      margin: 0 auto;
    }
    .button {
      width: 100%;
    }
    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
