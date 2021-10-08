<template>
    <div class="homepage-container">
        <div class="banner">
            <img class="banner-img" src="../assets/banner.png" />
            <div class="banner-text">
                <h2 class="text-headline">海量精彩设计 一键生成</h2>
                <a-input-search placeholder="搜索一下快速找模版" enter-button size="large" class="input-search" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Home',
    setup() {
        return {}
    },
})
</script>
<style lang="less">
.homepage-container{
    .banner{
        overflow: hidden;
        width: 100%;
        height: 450px;
        position: relative;
        .banner-img{
            height: 100%;
            width: 100%;
            object-fit: cover;// 一个新的样式
        }
        .banner-text{
            position: absolute;
            left: 0;
            right: 0;
            top: 50%;
            bottom: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .text-headline{
                font-size: 2rem;
                color: #fff;
                text-shadow: 0 0 1px rgb(68 92 116 / 2%), 0 2px 8px rgb(57 76 96 / 15%);
            }
            .input-search{
                width: 550px;
                border-radius: 20px;
                
                .anticon-search{
                    svg{
                        font-size: 25px;
                    }
                }
                .ant-input{
                    border-radius: 20px 0 0 20px;
                    border: 2px solid #3e7fff;
                    border-right: 0;
                }
                .ant-input-group-addon{
                    border-radius: 0 20px 20px 0;
                    background: #3e7fff;
                    overflow: hidden;
                }
            }
        }
    }
}
</style>
