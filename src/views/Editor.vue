<template>
    <div class="editor-container">
        <a-layout class="editor-container-layout">
            <a-layout-header class="header">
                <div class="page-title">
                    <span>作品名称：</span>
                    <InlineEditor :value="'未命名作品'"/>
                </div>
                <a-space size="large">
                    <a-button type="primary" shape="round">预览和设置</a-button>
                    <a-button type="primary" shape="round">保存</a-button>
                    <a-button type="primary" shape="round">发布</a-button>
                    <a-dropdown-button class="user-profile-component">
                        <router-link to="/setting">{{'章恒'}}</router-link>
                        <template v-slot:overlay>
                            <a-menu class="user-profile-dropdown">
                                <a-menu-item key="1"><router-link to="/" class="inherit-color"><span>首页</span></router-link></a-menu-item>
                                <a-menu-item key="3"><router-link to="/works" class="inherit-color"><span>我的作品</span></router-link></a-menu-item>
                                <a-menu-item key="2" ><a class="inherit-color"><span>登出</span></a></a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown-button>
                </a-space>
            </a-layout-header>
            <a-layout>
                <a-layout-sider width="300" style="background: #fff">
                    <div class="sidebar-container">
                        <!-- <div style="height:20px;"></div> -->
                        <a-tabs>
                            <a-tab-pane key="1">
                                <template #tab>
                                    <FontSizeOutlined/>
                                    文本
                                </template>
                                <ComponentsList type="text" :list="defaultTextTemplates" @onItemClick="addItem"/>
                            </a-tab-pane>
                            <a-tab-pane key="2">
                                <template #tab>
                                    <FileImageOutlined/>
                                    图片
                                </template>
                                <a-upload
                                    name="file"
                                    :multiple="false"
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    :headers="headers"
                                    @change="handleChange"
                                >
                                    <a-button class="upload"><UploadOutlined/>图片上传</a-button>
                                </a-upload>
                                <ComponentsList type="image" :list="defaultImageTemplates" @onItemClick="addItem" />
                            </a-tab-pane>
                            <a-tab-pane key="3">
                                <template #tab>
                                    <BlockOutlined/>
                                    形状
                                </template>
                                <ComponentsList type="shape" :list="defaultShapeTemplate" @onItemClick="addItem" />
                            </a-tab-pane>
                        </a-tabs>
                    </div>
                </a-layout-sider>
                <a-layout-content class="preview-container"></a-layout-content>
                <a-layout-sider width="300" style="background: #fff">
                    <div class="settings-panel">
                        <a-tabs type="card">
                            <a-tab-pane key="1" tab="属性设置">
                                
                            </a-tab-pane>
                            <a-tab-pane key="2" tab="图层设置">
                                
                            </a-tab-pane>
                            <a-tab-pane key="3" tab="页面设置">
                                
                            </a-tab-pane>
                        </a-tabs>
                    </div>
                </a-layout-sider>
            </a-layout>
        </a-layout>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { FontSizeOutlined, FileImageOutlined, BlockOutlined, UploadOutlined } from '@ant-design/icons-vue'
import InlineEditor from '../components/InlineEditor.vue'
import { defaultTextTemplates, defaultImageTemplates, defaultShapeTemplate }  from '../defaultTemplates'
import ComponentsList from '../components/ComponentsList.vue'

export default defineComponent({
    name: 'Editor',
    components: {
        FontSizeOutlined,
        FileImageOutlined,
        BlockOutlined,
        UploadOutlined,
        InlineEditor,
        ComponentsList,
    },
    setup() {
        function addItem () {
            return 0
        }
        return {
            addItem,
            defaultTextTemplates,
            defaultImageTemplates,
            defaultShapeTemplate,
        }
    },
})
</script>
<style lang="less">
.editor-container{
    width: 100vw;
    height: 100vh;
    .editor-container-layout{
        width: 100vw;
        height: 100vh;
        .page-title{
            display: flex;
            align-items: center;
        }
        .sidebar-container{
            height: 100%;
            .ant-tabs-tab{
                margin: 0;
            }
            .ant-tabs-nav-scroll{
                display: flex;
                justify-content: center;
            }
            .upload{
                width: 300px;
                background: #1890ff;
                color: #fff;
                margin-bottom: 10px;
            }
        }
        .settings-panel{
            height: 100%;
            .ant-tabs-nav-scroll{
                display: flex;
                justify-content: center;
            }
        }
    }
}
.ant-tabs{
    height: 100%;
    display: flex;
    flex-direction: column;
    .ant-tabs-content{
        flex: 1;
        height: 0;
        .ant-tabs-tabpane{
            overflow-y: auto;
        }
    }
}
</style>
