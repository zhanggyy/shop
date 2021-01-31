<template>
<div class="login-box">
  <el-form ref="form" :model="form" label-width="80px">
    <h3 class="loginTitle">欢迎登录</h3>
    <el-form-item label="用户名">
      <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
    </el-form-item>
<el-form-item label="密码" >
  <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
</el-form-item>
    <el-form-item align="right">
      <el-button type="primary" @click="onSubmit">登录</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
name: "Login",
  data () {
  return {
    form: {
      name: '',
      password: ''
    }
  }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>
.login-box {
  width: 500px;
  height: 300px;
  border: 1px solid #DCDFE6;
  margin: 150px auto;
  padding: 20px 50px 20px 30px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px #DCDFE6;
}
.loginTitle {
  text-align: center;
  margin-bottom: 40px
}
</style>
