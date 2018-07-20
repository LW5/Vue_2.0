<template>
    <el-card class="box-card">
        <h1>登录界面</h1>
        <el-form   label-width="80px">
        <el-form-item label="帐号：">
            <el-input :value="$route.params.name"></el-input>
        </el-form-item>
       <el-form-item label="密码：">
            <el-input ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="info">登录</el-button>
           <el-button type="primary" @click="reg">注册</el-button>
        </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default {
    
    methods:{
        info(){
            this.$router.push("/info")
        },
         reg(){
            this.$router.push("/reg")
        },
        
    }
}
</script>

<style>
.box-card {
    width: 480px;
    margin:30px auto;
  }
</style>
