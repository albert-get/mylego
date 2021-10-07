<template>
    <div class="login-page">
        <a-row>
            <a-col :span="12" class="aside">
                <div class="aside-inner">
                    <router-link to="/">
                        <img alt="慕课乐高" src="../assets/logo2.png" class="logo-img" />
                    </router-link>
                    <h2>这是我用过的最好的建站工具</h2>
                    <span class="text-white-70">章焱槟，google</span>
                </div>
            </a-col>
            <a-col :span="12" class="login-area">
                <a-form layout="vertical" ref="loginForm">
                    <h2>欢迎回来</h2>
                    <p class="subTitle">使用手机号码和验证码登录到慕课乐高</p>
                    <a-form-item label="手机号码" required >
                        <a-input placeholder="手机号码">
                            <template v-slot:prefix><UserOutlined style="color:rgba(0,0,0,.25)"/></template>
                        </a-input>
                    </a-form-item>
                    <a-form-item label="验证码" required >
                        <a-input placeholder="四位验证码">
                            <template v-slot:prefix><LockOutlined style="color:rgba(0,0,0,.25)"/></template>
                        </a-input>
                    </a-form-item>
                    <a-form-item>
                        <a-space>
                            <a-button type="primary" size="large" shape="round">
                                登录
                            </a-button>
                            <a-button size="large" shape="round">
                                获取验证码
                            </a-button>
                        </a-space>
                    </a-form-item>
                </a-form>
            </a-col>
        </a-row>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

export default defineComponent({
    name: 'Login',
    components: {
        UserOutlined,
        LockOutlined
    },
    setup() {
        return {}
    },
})
</script>
<style >
.aside {
  height: 100vh;
  background-color: #1a1919;
  background-size: cover;
  background-repeat: no-repeat;
}
.aside .aside-inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:  no-repeat url(../assets/login.png) ;
    background-size: cover;
}
.aside-inner .logo-img {
    transform: scale(1.5);
    margin-bottom: 20px;
}
.aside-inner h2 {
    font-size: 30px;
    color: white;
}
.aside-inner .text-white-70 {
    font-size: 24px;
    color: #999;
}
.login-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.login-area .ant-form-item-label {
    display: none;
}
.login-area .ant-input-prefix {
    position: absolute;
    top: 50%;
    bottom: 50%;
    left: auto;
    right: 30px;
    font-size: 19px;
    z-index: 1;
}
.login-area .ant-input-affix-wrapper {
    border-radius: 20px;
    border: 0;
    padding: 0;
}
.login-area .ant-input {
    font-size: 17px;
    background-color: #ebf2ff;
    border-color: #ebf2ff;
    border-radius: 20px;
    padding-left: 30px !important;
    width: 350px;
    height: 45px;
}
.login-area h2 {
    font-size: 29px;
    color: #333;
}
.login-area p {
    font-size: 19px;
    color: #666;
}
</style>