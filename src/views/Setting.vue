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
            Content of Tab Pane 2
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
        return {}
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
    }
</style>