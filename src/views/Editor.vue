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
                                    action=""
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
                <a-layout-content class="preview-container"  @click.capture="documentClick">
                    <div></div>
                    <div class="canvas-container" :class="{'picked':pageActive}" @click.capture="pageClick">
                        <div class="preview-list" id="canvas-area" >
                            <div class="body-container" :style="page.props">
                                <edit-wrapper 
                                    @setActive="eidtorActive"
                                    @update-position="updatePosition"
                                    v-for="component in components"
                                    :key="component.id"
                                    :id="component.id"
                                    :hidden="component.isHidden"
                                    :props="component.props"
                                    :active="component.id === (currentElement && currentElement.id)"
                                >
                                    <component 
                                        :is="component.name"
                                        v-bind="component.props"
                                    />
                                </edit-wrapper>
                            </div>
                        </div>
                    </div>
                </a-layout-content>
                <a-layout-sider width="300" style="background: #fff">
                    <div class="settings-panel">
                        <a-tabs :activeKey="activeSetting" @change="settingPannelChange">
                            <a-tab-pane key="1" tab="属性设置">
                                <div v-if="currentElement">
                                    <edit-group
                                        v-if="!currentElement.isLocked"
                                        :props="currentElement.props"
                                        @change="handleChange"
                                    ></edit-group>
                                    <div v-else>
                                        <a-empty>
                                            <template #description>
                                                <p>该元素被锁定，无法编辑</p>
                                            </template>
                                        </a-empty>
                                    </div>
                                </div>
                                <div v-else>
                                    <a-empty>
                                        <template #description>
                                            <p>在画布中选择元素并开始编辑</p>
                                        </template>
                                    </a-empty>
                                </div>
                            </a-tab-pane>
                            <a-tab-pane key="2" tab="图层设置">
                                <layer-list
                                    :list="components"
                                    :selectedId="currentElement && currentElement.id"
                                    @change="handleChange"
                                    @select="setActive"
                                >
                                </layer-list>
                            </a-tab-pane>
                            <a-tab-pane key="3" tab="页面设置">
                                <div class="page-settings">
                                    <props-table :props="page.props" @change="pageChange"></props-table>
                                </div>
                            </a-tab-pane>
                        </a-tabs>
                    </div>
                </a-layout-sider>
            </a-layout>
        </a-layout>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { FontSizeOutlined, FileImageOutlined, BlockOutlined, UploadOutlined } from '@ant-design/icons-vue'
import InlineEditor from '../components/InlineEditor.vue'
import { defaultTextTemplates, defaultImageTemplates, defaultShapeTemplate }  from '../defaultTemplates'
import ComponentsList from '../components/ComponentsList.vue'
import EditWrapper from '../components/EditWrapper.vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store/index'
import LText from '../components/LText.vue'
import LImage from '../components/LImage.vue'
import LShape from '../components/LShape.vue'
import { ComponentData } from '../store/editor'
import { pickBy, cloneDeep } from 'lodash-es'
import EditGroup from '../components/EditGroup.vue'
import LayerList from '../components/LayerList.vue'
// import LayerList from '../components/LayerListBack.vue'
import PropsTable from '../components/PropsTable.vue'


export default defineComponent({
    name: 'Editor',
    components: {
        FontSizeOutlined,
        FileImageOutlined,
        BlockOutlined,
        UploadOutlined,
        InlineEditor,
        ComponentsList,
        EditWrapper,
        LText,
        LImage,
        LShape,
        EditGroup,
        LayerList,
        PropsTable,
    },
    setup() {
        const store = useStore<GlobalDataProps>()
        const page = computed(() => store.state.editor.page)
        const components = computed(() => store.state.editor.components)
        const addItem = (component: any) => {
            store.commit('addComponent', cloneDeep(component))
        }
        const setActive = (id: string) => {
            store.commit('setActive', id)
        }
        const currentElement = computed<ComponentData | null>(() => store.getters.getCurrentElement || '')
        const updatePosition = (data: { left: number; top: number; id: string }) => {
            const { id } = data
            const updatedData = pickBy<number>(data, (v, k) => k !== 'id')
            const keysArr = Object.keys(updatedData)
            const valuesArr = Object.values(updatedData).map(v => v + 'px')
            store.commit('updateComponent', { key: keysArr, value: valuesArr, id })
        }
        const handleChange = (e: any) => {
            console.log('kkkkk',e)
            store.commit('updateComponent', e)
        }
        const pageChange = (e: any) => {
            store.commit('updatePage', e)
        }
        const activeSetting = ref('1')
        const pageActive = ref(false)
        const settingPannelChange = (key: any) => {
            activeSetting.value = key
        }
        const eidtorActive = (id: string) => {
            store.commit('setActive', id)
            activeSetting.value = '1'
            pageActive.value = false
        }
        
        const pageClick = () => {
            store.commit('setActive', '')
            activeSetting.value = '3'
            pageActive.value = true
        }
        const documentClick = () => {
            activeSetting.value = '2'
            pageActive.value = false
            store.commit('setActive', '')
        }
        return {
            addItem,
            defaultTextTemplates,
            defaultImageTemplates,
            defaultShapeTemplate,
            page,
            components,
            setActive,
            currentElement,
            updatePosition,
            handleChange,
            pageChange,
            activeSetting,
            settingPannelChange,
            eidtorActive,
            pageActive,
            pageClick,
            documentClick,
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
        .preview-container{
            position: relative;
            overflow: scroll;
            .title{
                line-height: 50px;
                text-align: center;
            }
            .canvas-container{
                position: absolute;
                width: 375px;
                height: 667px;
                left: 0;
                box-sizing: content-box;
                right: 0;
                top: 20px;
                margin: auto;
                overflow-y: scroll;
                overflow-x: hidden;
            }
        }
        .settings-panel{
            height: 100%;
            .ant-tabs-tab{
                margin: 0;
            }
            .ant-tabs-nav-scroll{
                display: flex;
                justify-content: center;
            }
            .page-settings{
                padding: 0 20px;
            }
        }
    }
}
.picked{
    border: 1px solid #1890ff;
}
.dispicked{
    border: 1px solid #ccc;
}
.ant-tabs{
    height: 100%;
    display: flex;
    flex-direction: column;
    .ant-tabs-content{
        flex: 1;
        height: 0;
        .ant-tabs-tabpane{
            height: 100%;
            overflow-y: auto;
        }
    }
}
</style>
