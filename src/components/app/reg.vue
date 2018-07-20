<template> 
    <el-card class="box-card">
        <h1>注册界面</h1>
        <el-form   label-width="80px">
        <el-form-item  label="帐号：">
            <el-input ref="name"></el-input>
        </el-form-item>
       <el-form-item label="密码：">
            <el-input ></el-input>
        </el-form-item>
        <el-form-item>
           <el-button type="primary" @click="login">注册</el-button>
        </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default {
   
    methods:{
        login(){
           
             this.$router.push(`/login/${this.$refs.name.$data.currentValue}`)
        }
    }
}
</script>