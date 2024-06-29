<script setup>
import { User, Lock, Iphone, Phone } from '@element-plus/icons-vue'

import { ref, watch, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { onUnmounted } from 'vue'
import { useUserStore } from '@/stores'
import {
  userLoginService,
  userRegisterService,
  userSendCodeService
} from '@/apis/user'
// import { ElMessage } from 'element-plus'

const router = useRouter()

const isRegister = ref(false) // true注册
// 登录
const formRef = ref({})

// 注册
// 整个用于提交的form数据对象
let formModel = reactive({
  username: '',
  password: '',
  repassword: '',
  phoneNumber: '',
  code: '',
  totalSecond: 60,
  second: 60, // 当前秒数
  timer: null // 定时器id
})
// 整个表单的校验规则
// 每一条规则都是一个对象
// 非空校验required、触发：trigger
// 长度校验min、max
// 正则校验patern：正则规则 \S非空字符
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 10, message: '用户名必须是2-10位字符', trigger: 'blur' }
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
        if (value !== formModel.password) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          // 校验成功，需要callback
          callback()
        }
      }
    }
  ],
  phoneNumber: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { pattern: /^\d{6}$/, message: '验证码必须是6位数字', trigger: 'blur' }
  ]
}

// 切换时重置
watch(isRegister, () => {
  formModel = reactive({
    username: '',
    password: '',
    repassword: '',
    phoneNumber: '',
    code: '',
    totalSecond: 60,
    second: formModel.second, // 当前秒数
    timer: null // 定时器id
  })
})

// 发送验证码
const getCode = async () => {
  // console.log(formModel)
  if (formModel.second === formModel.totalSecond) {
    // 开始倒计时
    const res = await userSendCodeService(formModel.phoneNumber)
    console.log('验证码为' + res)
    // ElMessage.success('验证码发送成功！')
    showSuccessToast('验证码发送成功！')
    // 倒计时
    formModel.second = formModel.totalSecond
    formModel.timer = setInterval(() => {
      if (formModel.second > 0) {
        formModel.second--
      } else {
        clearInterval(formModel.timer)
        formModel.second = 60
        formModel.timer = null
      }
    }, 1000)
  }
}
// 在组件卸载时清除定时器
const clearTimer = () => {
  if (formModel.timer) {
    clearInterval(formModel.timer)
    formModel.timer = null
  }
}
onUnmounted(clearTimer)
// 注册按钮
const register = async () => {
  await formRef.value.validate()
  // 发送注册接口请求
  const { username, password, phoneNumber, code } = formModel
  const res = await userRegisterService({
    username,
    password,
    phoneNumber,
    code
  })
  console.log(res)

  showSuccessToast({
    message: '注册成功！',
    style: {
      backgroundColor: 'rgba(255, 254, 215, 0.897)',
      color: '#666'
    }
  })

  isRegister.value = false
}

const userStore = useUserStore()
const login = async () => {
  // 对表单进行校验
  await formRef.value.validate()
  // 发送登录接口请求
  console.log(formModel)
  const LoginParams = {
    username: formModel.username,
    password: formModel.password
  }
  console.log(LoginParams)
  const res = await userLoginService(LoginParams)
  console.log(res.data.message)
  //设置pinia用户token
  userStore.setToken(res.data.message)
  // ElMessage.success('登录成功！')
  showSuccessToast({
    message: '登录成功！',
    style: {
      backgroundColor: 'rgba(255, 254, 215, 0.897)',
      color: '#666'
    }
  })
  // 登录成功后跳转到首页
  router.push('/')
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
        ref="formRef"
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
            placeholder="请再次输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="phoneNumber">
          <el-input
            v-model="formModel.phoneNumber"
            :prefix-icon="Iphone"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="formModel.code"
            :prefix-icon="Phone"
            placeholder="请输入验证码"
            ><template #append
              ><el-button
                @click="getCode"
                :disabled="formModel.second !== formModel.totalSecond"
                type="primary"
              >
                {{
                  formModel.second === formModel.totalSecond
                    ? '获取验证码'
                    : formModel.second + '秒后重新发送'
                }}
              </el-button></template
            ></el-input
          >
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
          <el-link
            type="info"
            :underline="false"
            @click="isRegister = false"
            style="color: #fff"
          >
            ← 返回
          </el-link>
        </el-form-item>
      </el-form>
      <!-- 登录相关 -->
      <el-form
        :model="formModel"
        :rules="rules"
        ref="formRef"
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
            <!-- <el-checkbox style="color: #fff">记住我</el-checkbox> -->
            <!-- <el-link type="primary" :underline="false">忘记密码？</el-link> -->
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
          <el-link
            type="info"
            :underline="false"
            @click="isRegister = true"
            style="color: #fff"
          >
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
  background: linear-gradient(
    to bottom,

    rgb(21, 3, 34),
    #122a3c
  );

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
    height: 600px;

    margin-top: 100px;
    border-radius: 10px;
    padding: 30px;
    background-color: transparent;
    color: $xtxColor;
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
    transition: 0.5s;

    &:hover {
      box-shadow: 1px 6px 10px rgba(248, 247, 167, 0.897);
    }
    .title {
      margin: 0 auto;
    }
    .button {
      width: 100%;
      background-color: $xtxColor;
      color: #122a3c;
    }
    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
