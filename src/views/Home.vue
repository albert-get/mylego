<template>
    <div class="homepage-container">
        <div class="banner">
            <img class="banner-img" src="../assets/banner.png" />
            <div class="banner-text">
                <h2 class="text-headline">海量精彩设计 一键生成</h2>
                <a-input-search placeholder="搜索一下快速找模版" enter-button size="large" class="input-search" />
            </div>
        </div>
        <div class="welcome-container">
            <div class="welcome-container-inner">
                <a-row>
                    <a-col :span="8" class="col">
                        <html5-two-tone class="icon" />
                        <h3>专注H5 始终如一</h3>
                        <p>三年保持行业领先</p>
                    </a-col>
                    <a-col :span="8" class="col">
                        <build-two-tone class="icon" />
                        <h3>海量 H5 模版</h3>
                        <p>一键生成，一分钟轻松制作</p>
                    </a-col>
                    <a-col :span="8" class="col">
                        <bulb-two-tone class="icon" />
                        <h3>极致体验</h3>
                        <p>用户的一致选择</p>
                    </a-col>
                </a-row>
            </div>
        </div>
        <div class="content-container">
            <a-row></a-row>
            <a-row></a-row>
            <a-row></a-row>
            <div class="my-works">
                <a-row></a-row>
                <a-row></a-row>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Html5TwoTone, BuildTwoTone, BulbTwoTone } from '@ant-design/icons-vue'

export default defineComponent({
    name: 'Home',
    components:{
        Html5TwoTone,
        BuildTwoTone,
        BulbTwoTone
    },
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
    .welcome-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #f2f2f2;
        padding-top: 20px;
        padding-bottom: 10px;
        .welcome-container-inner{
            width: 80%;
            .col{
                display: flex;
                flex-direction: column;
                align-items: center;
                h3{
                    color: #333;
                }
                p{
                    color: #666;
                }
            }
        }
        .icon{
            font-size: 60px;
        }
    }
}
</style>
