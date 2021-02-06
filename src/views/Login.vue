<template>
<div class="login-box">
  <el-form ref="form" :model="form" :rules="rules" label-width="80px">
    <h3 class="loginTitle">欢迎登录</h3>
    <el-form-item label="用户名" prop="name">
      <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
    </el-form-item>
<el-form-item label="密码" prop="password">
  <el-input
      type="password" v-model="form.password" placeholder="请输入密码"></el-input>
</el-form-item>
    <el-form-item align="right">
      <el-button type="primary" @click="onSubmit('form')">登录</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import index from './index.vue';
export default {
  name: 'Login',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    index,
  },
  data() {
    return {
      form: {
        name: '',
        password: '',
      },
      rules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'},
        ],
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        // eslint-disable-next-line max-len
        if (valid && this.form.name === 'admin' && this.form.password === '111111') {
          this.$message.success('登录成功!');
          this.$router.push({name: 'index'}); // 跳转到首页
        } else {
          this.$message.error('用户名或密码格式不正确！');
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.login-box {
  width: 500px;
  height: 300px;
  border: 1px solid #DCDFE6;
  margin: 150px auto;
  padding: 20px 50px 20px 30px;
  border-radius: 20px;
  box-shadow: 0 0 20px #DCDFE6;
}
.loginTitle {
  text-align: center;
  margin-bottom: 40px
}
</style>
