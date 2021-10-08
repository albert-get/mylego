<template>
    <div class="homepage-container">
        <a-layout :style="{background:'#fff'}">
            <a-layout-header class="header" :class="{'transparent-header' : isHome }">
                <div class="page-title">
                    <router-link to="/"><img class="logo-img" src="../assets/logo2.png"/></router-link>
                </div>
                <user-profile ></user-profile>
            </a-layout-header>
            <a-layout-content :class="{ 'home-layout': isHome }">
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
        <a-layout-footer class="index-footer">
            <div class="friend-link">
                <div class="item">
                    <span class="title">慕课乐高</span>
                    <a class="a">购买课程</a>
                    <a class="a">作业和打卡</a>
                    <a class="a">开源仓库</a>
                    <a class="a">帮助</a>
                </div>
                <div class="item">
                    <span class="title">设计制作帮助</span>
                    <a class="a">购买课程</a>
                    <a class="a">作业和打卡</a>
                    <a class="a">开源仓库</a>
                    <a class="a">帮助</a>
                </div>
                <div class="item">
                    <span class="title">审核问题</span>
                    <a class="a">购买课程</a>
                    <a class="a">作业和打卡</a>
                    <a class="a">开源仓库</a>
                    <a class="a">帮助</a>
                </div>
                <div class="item">
                    <span class="title">联系我们</span>
                    <a class="a">购买课程</a>
                    <a class="a">作业和打卡</a>
                    <a class="a">开源仓库</a>
                    <a class="a">帮助</a>
                </div>
            </div>
            <div class="footer-line"></div>
            <div class="footer-word">
                <span>
                    <span class="a-left">© 慕课网（imooc.com）版权所有 | </span><a class="a-right">津ICP备20000929号-2</a>
                </span>
            </div>
        </a-layout-footer>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import UserProfile from '../components/UserProfile.vue'

export default defineComponent({
    name: 'Index',
    components: {
        UserProfile
    },
    setup() {
        const route = useRoute()
        const isHome = computed( ()=>route.name === 'home' )
        return {
            isHome
        }
    },
})
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.page-title {
  color: #fff;
}
.logo-img{
    height: 35px;
}
.transparent-header{
    background-color: rgba(0, 0, 0, .5);
    z-index: 100;
}
.home-layout{
    position: relative;
    top: -70px;
}
.index-footer{
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
}
.index-footer .friend-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.friend-link .item {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.item .title {
    color: #fff;
    font-size: 19px;
    padding-bottom: 10px;
}
.item .a {
    color: #666;
    font-size: 16px;
    padding-bottom: 10px;
}
.footer-word .a-left {
    color: #fff;
    font-size: 16px;
}
.footer-word .a-right {
    font-size: 16px;
}
.footer-line {
    width: 80%;
    height: 1px;
    background: #666;
    margin-bottom: 20px;
}
</style>

    