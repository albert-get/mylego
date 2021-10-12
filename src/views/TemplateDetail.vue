<template>
    <div class="work-detail-container">
        <div style="height:80px;"></div>
        <a-row type="flex" :gutter="30" justify="center" v-if="template">
            <a-col :span="8" class="cover-img">
                <a :href="template.coverImg"><img :src="template.coverImg" alt="" id="cover-img"></a>
            </a-col>
            <a-col :span="8">
                <h2>{{template.title}}</h2>
                <p>{{template.desc}}</p>
                <div class="author">
                    <a-avatar :src="template.user.picture"></a-avatar>
                    该模版由 <b>{{template.user.nickName}}</b> 创作
                </div>
                <div class="bar-code-area">
                    <div class="barcode-title">扫一扫，手机预览</div>
                    <canvas id="barcode-container"></canvas>
                </div>
                <div class="use-button">
                    <a-space size="large">
                        <router-link to="/editor/99">
                            <a-button type="primary" size="large" shape="round">使用模版</a-button>
                        </router-link>
                        <a-button size="large" shape="round">下载图片海报</a-button>
                    </a-space>
                </div>
            </a-col>
        </a-row>
        <div style="height:30px;"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// import { TemplateProps } from '../store/templates'

export default defineComponent({
    name: 'TemplateDetail',
    setup() {
        const template = {
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
    "copiedCount": 631,
    "latestPublishAt": "2020-11-26T09:38:06.000Z",
    "isHot": true,
    "isNew": true,
    "orderIndex": 0,
    "isPublic": true,
    "createdAt": "2020-11-26T09:27:19.000Z",
    "updatedAt": "2021-10-12T01:12:09.000Z",
    "user": {
      "userName": "185****2625",
      "nickName": "Miss.Lu",
      "gender": 1,
      "picture": "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f79389d4737571e2e1dc7cb.png"
    },
    "content": {
      "components": [
        {
          "name": "l-image",
          "props": {
            "imageSrc": "http://static.imooc-lego.com/upload-files/logo-white-735536.png",
            "actionType": "",
            "url": "",
            "height": "31px",
            "width": "114px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "borderStyle": "none",
            "borderColor": "#000",
            "borderWidth": "0",
            "borderRadius": "0",
            "boxShadow": "0 0 0 #000000",
            "opacity": 1,
            "position": "absolute",
            "left": "23px",
            "top": "43px",
            "right": "0"
          },
          "id": "0bb852e0-01d3-4138-bed3-2fc58327ce38",
          "layerName": "图层1"
        },
        {
          "name": "l-image",
          "props": {
            "imageSrc": "https://static.imooc-lego.com/upload-files/%E4%BA%8C%E7%BB%B4%E7%A0%81-044129.png",
            "actionType": "",
            "url": "",
            "height": "58px",
            "width": "61px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "borderStyle": "none",
            "borderColor": "#000",
            "borderWidth": "0",
            "borderRadius": "0",
            "boxShadow": "0 0 0 #000000",
            "opacity": 1,
            "position": "absolute",
            "left": "302px",
            "top": "520px",
            "right": "0"
          },
          "id": "85548600-5d5d-4cc2-9cb8-0da033c66ffd",
          "layerName": "图层2"
        },
        {
          "name": "l-text",
          "props": {
            "text": "你们创造着互联网科技的未来～",
            "fontSize": "13px",
            "fontFamily": "",
            "fontWeight": "normal",
            "fontStyle": "normal",
            "textDecoration": "none",
            "lineHeight": "1",
            "textAlign": "center",
            "color": "#000000",
            "backgroundColor": "",
            "actionType": "",
            "url": "",
            "height": "10px",
            "width": "233.5px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "borderStyle": "none",
            "borderColor": "#000",
            "borderWidth": "0",
            "borderRadius": "0",
            "boxShadow": "0 0 0 #000000",
            "opacity": 1,
            "position": "absolute",
            "left": "-14px",
            "top": "571px",
            "right": "0",
            "tag": "p"
          },
          "id": "55c43928-f96f-4690-9d3b-1e237958fc88",
          "layerName": "图层3"
        }
      ],
      "_id": "5fbf74f7d10f7e2f4b0bf4dd",
      "props": {
        "backgroundColor": "#ffffff",
        "backgroundImage": "url('https://static.imooc-lego.com/upload-files/WechatIMG3767-892714-567308.png')",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "height": "589px"
      },
      "createdAt": "2020-11-26T09:27:19.351Z",
      "updatedAt": "2020-11-26T09:38:00.512Z",
      "__v": 0
    }
        }
        return {
            template
        }
    },
})
</script>
<style scoped lang="less">
.work-detail-container{
    width: 80%;
    .cover-img img {
        width: 100%;
    }
    h2{
        line-height: 30px;
    }
    p{
        line-height: 50px;
    }
    .bar-code-area{
        padding-top: 30px;
        padding-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .barcode-title{
            text-align: center;
        }
    }
}
</style>