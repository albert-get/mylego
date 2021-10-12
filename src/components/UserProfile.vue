<template>
    <router-link to="/login" v-if="!isLogin">
        <a-button 
            type="primary"
            shape="round"  
        >
            登录
        </a-button>
    </router-link>
    <div v-else>
        <a-space size="large">
            <router-link to="/editor/99">
                <a-button 
                    type="primary"
                    shape="round"  
                >
                    创建设计
                </a-button>
            </router-link>
            <router-link to="/works">
                <a-button 
                    type="primary"
                    shape="round"  
                >
                    我的作品
                </a-button>
            </router-link>
            <a-dropdown-button class="user-profile-component">
                <router-link to="/setting">{{'章恒'}}</router-link>
                <template v-slot:overlay>
                    <a-menu class="user-profile-dropdown">
                        <!-- <a-menu-item key="1"><router-link to="/setting" class="inherit-color"><span>个人设置</span></router-link></a-menu-item> -->
                        <a-menu-item key="2" ><a class="inherit-color"><span>登出</span></a></a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown-button>
        </a-space>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'user-profile',
    setup () {
        const isLogin = true;
        return {
            isLogin
        }
    }
})
</script>

<style>

.inherit-color{
    color: inherit;
}
</style>
<style>
.user-profile-component .ant-btn:first-child{
    border-radius: 16px 0 0 16px!important;
}
.user-profile-component .ant-dropdown-trigger{
    border-radius:  0 16px 16px 0 !important;
}
</style>