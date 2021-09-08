<template>
    <div class="homepage-container">
        <a-layout :style="{background:'#fff'}">
            <a-layout-header class="header" :class="{'transparent-header' : isHome }">
                <div class="page-title">
                    <router-link to="/"><img class="logo-img" src="../assets/logo2.png"/></router-link>
                </div>
            </a-layout-header>
            <a-layout-content :class="{ 'home-layout': isHome }">
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
        <a-layout-footer>
            © 慕课网（imooc.com）版权所有 | 津ICP备20000929号-2
        </a-layout-footer>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'Index',
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
</style>

    