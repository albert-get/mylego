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
                                <ComponentsListText :list="defaultTextTemplates" @onItemClick="addItem"/>
                            </a-tab-pane>
                            <a-tab-pane key="2">
                                <template #tab>
                                    <FileImageOutlined/>
                                    图片
                                </template>
                                <ComponentsListImage :list="defaultImageTemplates" @onItemClick="addItem" />
                            </a-tab-pane>
                            <a-tab-pane key="3">
                                <template #tab>
                                    <BlockOutlined/>
                                    形状
                                </template>
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
import { FontSizeOutlined, FileImageOutlined, BlockOutlined } from '@ant-design/icons-vue'
import InlineEditor from '../components/InlineEditor.vue'
import { defaultTextTemplates, defaultImageTemplates }  from '../defaultTemplates'
import ComponentsListText from '../components/ComponentsListText.vue'
import ComponentsListImage from '../components/ComponentsListImage.vue'

export default defineComponent({
    name: 'Editor',
    components: {
        FontSizeOutlined,
        FileImageOutlined,
        BlockOutlined,
        InlineEditor,
        ComponentsListText,
        ComponentsListImage
    },
    setup() {
        function addItem () {
            return 0
        }
        return {
            addItem,
            defaultTextTemplates,
            defaultImageTemplates
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
            .ant-tabs-tab{
                margin: 0;
            }
            .ant-tabs-nav-scroll{
                display: flex;
                justify-content: center;
            }
        }
        .settings-panel{
            .ant-tabs-nav-scroll{
                display: flex;
                justify-content: center;
            }
        }
    }
}
</style>
