<template>
    <div class="setting-container">
        <div style="height:20px;"></div>
        <h2 style="text-align:center;">个人中心</h2>
        <a-tabs type="card">
            <a-tab-pane key="1" tab="修改个人资料">
                <a-row type="flex" justify="center">
                    <a-col :span="12">
                        <a-form layout="vertical">
                            <a-form-item label="头像">
                                <a-upload
                                    name="avatar"
                                    list-type="picture-card"
                                    class="avatar-uploader"
                                    :show-upload-list="false"
                                >
                                    <div class="ant-upload-text">
                                        上传
                                    </div>
                                </a-upload>
                            </a-form-item>
                            <a-form-item label="昵称">
                                    <a-input placeholder="填写你的昵称" v-model:value="userName">
                                        <template #prefix>
                                            <user-outlined type="user" />
                                        </template>
                                    </a-input>
                            </a-form-item>
                            <a-form-item label="性别">
                                <a-radio-group>
                                    <a-radio-button value="a">男</a-radio-button>
                                    <a-radio-button value="b">女</a-radio-button>
                                </a-radio-group>
                            </a-form-item>
                            <a-form-item>
                                <a-button shape="round" type="primary">更新个人资料</a-button>
                            </a-form-item>
                        </a-form>
                    </a-col>
                </a-row>
            </a-tab-pane>
            <a-tab-pane key="2" tab="恢复删除的作品">
                <a-table :columns="columns" :data-source="data" rowKey="id">
                    <template #action="{record}">
                        <a-button type="primary" shape="round" @click="recover(record.id)">恢复该作品</a-button>
                    </template>
                </a-table>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
export default defineComponent({
    name: 'setting',
    components: {
        UserOutlined
    },
    setup() {
        const columns = [
                {
                    title: '作品',
                    key: 'title',
                    dataIndex: 'title',
                },
                {
                    title: 'ID',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: '最后更新',
                    dataIndex: 'updatedAt',
                    key: 'updatedAt',
                },
                {
                    title: '操作',
                    key: 'action',
                    slots: { customRender: 'action' },
                }
            ]
        const data = [
      {
        "id": 5153,
        "uuid": "50ca",
        "title": "未命名作品",
        "desc": "未命名作品",
        "contentId": "615fa8cecbba0f4e909eef0a",
        "publishContentId": null,
        "author": "13056771167",
        "coverImg": "https://static.imooc-lego.com/upload-files/screenshot-786113.png",
        "isTemplate": false,
        "status": 0,
        "copiedCount": 0,
        "latestPublishAt": null,
        "isHot": false,
        "isNew": false,
        "orderIndex": 0,
        "isPublic": false,
        "createdAt": "2021-10-08T02:11:26.000Z",
        "updatedAt": "2021-10-08T06:45:26.000Z",
        "user": {
          "userName": "13056771167",
          "nickName": "乐高1167",
          "gender": 0,
          "picture": null
        }
      },
      {
        "id": 5150,
        "uuid": "0263",
        "title": "未命名作品",
        "desc": "未命名作品",
        "contentId": "615f9b8ecbba0f4e909eef07",
        "publishContentId": null,
        "author": "13056771167",
        "coverImg": null,
        "isTemplate": false,
        "status": 0,
        "copiedCount": 0,
        "latestPublishAt": null,
        "isHot": false,
        "isNew": false,
        "orderIndex": 0,
        "isPublic": false,
        "createdAt": "2021-10-08T01:14:54.000Z",
        "updatedAt": "2021-10-08T02:02:17.000Z",
        "user": {
          "userName": "13056771167",
          "nickName": "乐高1167",
          "gender": 0,
          "picture": null
        }
      },
      {
        "id": 5147,
        "uuid": "d51a",
        "title": "未命名作品",
        "desc": "未命名作品",
        "contentId": "615f9b73cbba0f4e909eef04",
        "publishContentId": null,
        "author": "13056771167",
        "coverImg": null,
        "isTemplate": false,
        "status": 0,
        "copiedCount": 0,
        "latestPublishAt": null,
        "isHot": false,
        "isNew": false,
        "orderIndex": 0,
        "isPublic": false,
        "createdAt": "2021-10-08T01:14:27.000Z",
        "updatedAt": "2021-10-08T02:02:13.000Z",
        "user": {
          "userName": "13056771167",
          "nickName": "乐高1167",
          "gender": 0,
          "picture": null
        }
      },
      {
        "id": 5136,
        "uuid": "32d4",
        "title": "未命名作品",
        "desc": "未命名作品",
        "contentId": "615ec330cbba0f4e909eeef8",
        "publishContentId": null,
        "author": "13056771167",
        "coverImg": null,
        "isTemplate": false,
        "status": 0,
        "copiedCount": 0,
        "latestPublishAt": null,
        "isHot": false,
        "isNew": false,
        "orderIndex": 0,
        "isPublic": false,
        "createdAt": "2021-10-07T09:51:44.000Z",
        "updatedAt": "2021-10-08T02:02:10.000Z",
        "user": {
          "userName": "13056771167",
          "nickName": "乐高1167",
          "gender": 0,
          "picture": null
        }
      },
      {
        "id": 5135,
        "uuid": "602b",
        "title": "未命名作品",
        "desc": "未命名作品",
        "contentId": "615ec1f8cbba0f4e909eeef7",
        "publishContentId": null,
        "author": "13056771167",
        "coverImg": null,
        "isTemplate": false,
        "status": 0,
        "copiedCount": 0,
        "latestPublishAt": null,
        "isHot": false,
        "isNew": false,
        "orderIndex": 0,
        "isPublic": false,
        "createdAt": "2021-10-07T09:46:32.000Z",
        "updatedAt": "2021-10-08T02:02:06.000Z",
        "user": {
          "userName": "13056771167",
          "nickName": "乐高1167",
          "gender": 0,
          "picture": null
        }
      },
      {
        "id": 5134,
        "uuid": "8967",
        "title": "未命名作品",
        "desc": "未命名作品",
        "contentId": "615ec1eecbba0f4e909eeef6",
        "publishContentId": null,
        "author": "13056771167",
        "coverImg": null,
        "isTemplate": false,
        "status": 0,
        "copiedCount": 0,
        "latestPublishAt": null,
        "isHot": false,
        "isNew": false,
        "orderIndex": 0,
        "isPublic": false,
        "createdAt": "2021-10-07T09:46:22.000Z",
        "updatedAt": "2021-10-08T02:02:00.000Z",
        "user": {
          "userName": "13056771167",
          "nickName": "乐高1167",
          "gender": 0,
          "picture": null
        }
      },
      {
        "id": 5133,
        "uuid": "d81a",
        "title": "未命名作品",
        "desc": "未命名作品",
        "contentId": "615ec1e6cbba0f4e909eeef5",
        "publishContentId": null,
        "author": "13056771167",
        "coverImg": null,
        "isTemplate": false,
        "status": 0,
        "copiedCount": 0,
        "latestPublishAt": null,
        "isHot": false,
        "isNew": false,
        "orderIndex": 0,
        "isPublic": false,
        "createdAt": "2021-10-07T09:46:14.000Z",
        "updatedAt": "2021-10-08T02:01:56.000Z",
        "user": {
          "userName": "13056771167",
          "nickName": "乐高1167",
          "gender": 0,
          "picture": null
        }
      },
      {
        "id": 5132,
        "uuid": "cf9d",
        "title": "未命名作品",
        "desc": "未命名作品",
        "contentId": "615ec1e0cbba0f4e909eeef4",
        "publishContentId": null,
        "author": "13056771167",
        "coverImg": null,
        "isTemplate": false,
        "status": 0,
        "copiedCount": 0,
        "latestPublishAt": null,
        "isHot": false,
        "isNew": false,
        "orderIndex": 0,
        "isPublic": false,
        "createdAt": "2021-10-07T09:46:09.000Z",
        "updatedAt": "2021-10-08T02:01:52.000Z",
        "user": {
          "userName": "13056771167",
          "nickName": "乐高1167",
          "gender": 0,
          "picture": null
        }
      }
    ]
        function recover (id: number) {
            console.log(id)
        }
        const userName='harry'
        return {
            columns,
            data,
            recover,
            userName
        }
    }
})
</script>

<style lang="less">
    .setting-container{
        width: 60%;
        .ant-tabs-tab{
            border-radius: 20px 20px 0 0 !important;
        }
        .ant-form-item-control-input-content{
            display: flex;
            flex-direction: column;
            align-items: center;
            .avatar-uploader{
                display: flex;
                flex-direction: column;
                align-items: center;
                .ant-upload{
                    margin: 0;
                }
            }
        }
        .ant-table-thead{
            th:first-child{
                border-top-left-radius: 20px !important;
            }
            th:last-child{
                border-top-right-radius: 20px !important;
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