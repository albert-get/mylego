<template>
    <div class="mywork-container content-container">
        <div style="height:50px;"></div>
        <a-row type="flex" justify="space-between" align="middle" class="poster-title">
            <h2>我的作品</h2>
            <a-input-search placeholder="搜索我的作品" class="work-search"/>
        </a-row>
        <div style="height:50px;"></div>
        <a-row v-if="testData.length === 0">
            <a-empty >
                <template v-slot:description>
                    <span> 还没有任何作品 </span>
                </template>
                <a-button type="primary" size="large" shape="round">
                    创建你的第一个设计 🎉
                </a-button>
            </a-empty>
        </a-row>
        <a-row v-else>
            <WorksList :list="testData"/> 
        </a-row>
        <a-row>
            <a-pagination :total="50"></a-pagination>
        </a-row>
        <div style="height:30px;"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import WorksList from '../components/WorksList.vue'

export default defineComponent({
    name: 'Works',
    components: {
        WorksList
    },
    setup() {
        const testData = [
      {
        "id": 7,
        "uuid": "339e",
        "title": "前端架构师直播海报",
        "desc": "未命名作品",
        "contentId": "5fb4b558d8f34d29e6baa6e9",
        "publishContentId": "5fb510903c20ad3def6263db",
        "author": "136****5632",
        "coverImg": "https://static.imooc-lego.com/upload-files/screenshot-889755.png",
        "isTemplate": true,
        "status": 2,
        "copiedCount": 862,
        "latestPublishAt": "2020-11-24T10:18:59.000Z",
        "isHot": true,
        "isNew": true,
        "orderIndex": 1,
        "isPublic": true,
        "createdAt": "2020-11-18T05:47:04.000Z",
        "updatedAt": "2021-10-08T09:31:27.000Z",
        "user": {
          "userName": "136****5632",
          "nickName": "Viking张轩",
          "gender": 0,
          "picture": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f79389d4737571e2e1dc7cb.png"
        }
      },
      {
        "id": 290,
        "uuid": "576a",
        "title": "1024 程序员日",
        "desc": "1024 程序员日",
        "contentId": "5fbf74f7d10f7e2f4b0bf4dd",
        "publishContentId": "5fbf752fd10f7e2f4b0bf4de",
        "author": "185****2625",
        "coverImg": "https://static.imooc-lego.com/upload-files/screenshot-977815.png",
        "isTemplate": true,
        "status": 2,
        "copiedCount": 628,
        "latestPublishAt": "2020-11-26T09:38:06.000Z",
        "isHot": true,
        "isNew": true,
        "orderIndex": 0,
        "isPublic": true,
        "createdAt": "2020-11-26T09:27:19.000Z",
        "updatedAt": "2021-10-09T05:38:37.000Z",
        "user": {
          "userName": "185****2625",
          "nickName": "Miss.Lu",
          "gender": 1,
          "picture": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f79389d4737571e2e1dc7cb.png"
        }
      },
      {
        "id": 165,
        "uuid": "7476",
        "title": "招聘-慕课乐高",
        "desc": "招聘广告页",
        "contentId": "5fbe09b3d10f7e2f4b0bf44e",
        "publishContentId": "5fbe0a36d10f7e2f4b0bf44f",
        "author": "185****2625",
        "coverImg": "https://static.imooc-lego.com/upload-files/screenshot-323204.png",
        "isTemplate": true,
        "status": 2,
        "copiedCount": 314,
        "latestPublishAt": "2020-11-25T07:53:00.000Z",
        "isHot": false,
        "isNew": false,
        "orderIndex": 0,
        "isPublic": true,
        "createdAt": "2020-11-25T07:37:23.000Z",
        "updatedAt": "2021-10-09T08:54:07.000Z",
        "user": {
          "userName": "185****2625",
          "nickName": "Miss.Lu",
          "gender": 1,
          "picture": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f79389d4737571e2e1dc7cb.png"
        }
      },
      {
        "id": 27,
        "uuid": "1852",
        "title": "未命名作品",
        "desc": "未命名作品",
        "contentId": "5fbb55913c20ad3def6263e5",
        "publishContentId": "5fbb5ff0d7cde83dfdbd6be1",
        "author": "136****5632",
        "coverImg": "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
        "isTemplate": true,
        "status": 2,
        "copiedCount": 175,
        "latestPublishAt": "2020-12-01T02:30:51.000Z",
        "isHot": false,
        "isNew": false,
        "orderIndex": 0,
        "isPublic": true,
        "createdAt": "2020-11-23T06:24:17.000Z",
        "updatedAt": "2021-10-05T02:29:29.000Z",
        "user": {
          "userName": "136****5632",
          "nickName": "Viking张轩",
          "gender": 0,
          "picture": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f79389d4737571e2e1dc7cb.png"
        }
      },
      {
        "id": 24,
        "uuid": "e4e2",
        "title": "慕课 Live Java 入门编程课",
        "desc": "慕课 Live 只需3天 每天1.5 小时 0 基础新人 Java 入门编程课",
        "contentId": "5fb8ddb83c20ad3def6263e3",
        "publishContentId": "5fb8e1893c20ad3def6263e4",
        "author": "136****5632",
        "coverImg": "https://static.imooc-lego.com/upload-files/screenshot-133701.png",
        "isTemplate": true,
        "status": 2,
        "copiedCount": 99,
        "latestPublishAt": "2020-11-24T10:20:45.000Z",
        "isHot": false,
        "isNew": true,
        "orderIndex": 0,
        "isPublic": true,
        "createdAt": "2020-11-21T09:28:24.000Z",
        "updatedAt": "2021-10-04T13:54:33.000Z",
        "user": {
          "userName": "136****5632",
          "nickName": "Viking张轩",
          "gender": 0,
          "picture": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f79389d4737571e2e1dc7cb.png"
        }
      },
      {
        "id": 19,
        "uuid": "91fd",
        "title": "慕课资讯",
        "desc": "程序员的早读时间",
        "contentId": "5fb534443c20ad3def6263df",
        "publishContentId": "5fb534473c20ad3def6263e0",
        "author": "136****5632",
        "coverImg": "https://static.imooc-lego.com/upload-files/screenshot-726751.png",
        "isTemplate": true,
        "status": 2,
        "copiedCount": 178,
        "latestPublishAt": "2020-11-24T10:21:05.000Z",
        "isHot": false,
        "isNew": false,
        "orderIndex": 0,
        "isPublic": true,
        "createdAt": "2020-11-18T14:48:36.000Z",
        "updatedAt": "2021-09-26T13:01:19.000Z",
        "user": {
          "userName": "136****5632",
          "nickName": "Viking张轩",
          "gender": 0,
          "picture": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f79389d4737571e2e1dc7cb.png"
        }
      },
      {
        "id": 17,
        "uuid": "c701",
        "title": "每日分享",
        "desc": "每日分享卡片",
        "contentId": "5fb5328d3c20ad3def6263dd",
        "publishContentId": "5fb532953c20ad3def6263de",
        "author": "136****5632",
        "coverImg": "https://static.imooc-lego.com/upload-files/screenshot-682056.png",
        "isTemplate": true,
        "status": 2,
        "copiedCount": 105,
        "latestPublishAt": "2020-11-24T10:21:21.000Z",
        "isHot": false,
        "isNew": false,
        "orderIndex": 0,
        "isPublic": true,
        "createdAt": "2020-11-18T14:41:17.000Z",
        "updatedAt": "2021-09-23T03:35:19.000Z",
        "user": {
          "userName": "136****5632",
          "nickName": "Viking张轩",
          "gender": 0,
          "picture": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f79389d4737571e2e1dc7cb.png"
        }
      },
      {
        "id": 16,
        "uuid": "c9a9",
        "title": "慕课 Live",
        "desc": "这是慕课 live 如何搭建一套混合移动应用架构的海报",
        "contentId": "5fb51561d7cde83dfdbd6bd7",
        "publishContentId": "5fb5193ad7cde83dfdbd6bd8",
        "author": "136****5632",
        "coverImg": "https://static.imooc-lego.com/upload-files/screenshot-649919.png",
        "isTemplate": true,
        "status": 2,
        "copiedCount": 55,
        "latestPublishAt": "2020-11-24T10:21:44.000Z",
        "isHot": false,
        "isNew": true,
        "orderIndex": 0,
        "isPublic": true,
        "createdAt": "2020-11-18T12:36:49.000Z",
        "updatedAt": "2021-09-13T01:03:12.000Z",
        "user": {
          "userName": "136****5632",
          "nickName": "Viking张轩",
          "gender": 0,
          "picture": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f79389d4737571e2e1dc7cb.png"
        }
      }
    ]
        // testData = []
        return {
            testData
        }
    },
})
</script>
<style lang="less">
.mywork-container{
    width: 80%;
    .poster-title{
        width: 100%;
        .work-search{
            width: 450px;
            border-radius: 15px;
        }
    }
    .ant-pagination-item-link{
        border-radius: 50%;
    }
    .ant-pagination-item{
        border-radius: 50%;
    }
}
</style>
