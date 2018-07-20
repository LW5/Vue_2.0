<template>

    <el-card class="box">
        <el-form>
            <el-form-item>
                <h1 >登录</h1>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" auto-complete="off"></el-input>
            </el-form-item>
            
            <el-button type="primary"  @click="Info">提交</el-button>
            <el-button @click="reg">注册</el-button>
            <!-- </el-form-item> -->
        </el-form>
    </el-card>
</template>

<script>
    export default {
        methods:{
            Info(){
                this.$router.push("/Info")
            },
            reg(){
                this.$router.push("reg")
            }
        }
    }
</script>
<style>
    .box {
        width: 500px;
        margin: 50px auto;
    }
</style>