<template>
  <div class="works-list-component">
      <a-skeleton v-if="loading"/>
      <a-row :gutter="16" v-else>
          <a-col :span="6" v-for="item in list" :key="item.id" class="poster-item">
              <a-card hoverable>
                  <template v-slot:cover>
                        <img :src="item.coverImg"  v-if="item.coverImg" />
                        <img src="http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png"  v-else />
                        <div class="hover-item">
                            <router-link :to="`/editor/${item.id}`"><a-button size="large" type="primary">继续编辑该作品</a-button></router-link>
                        </div>
                  </template>
                  <template v-slot:actions class="ant-card-actions">
                      <router-link :to="`/editor/${item.id}`"><EditOutlined key="edit"></EditOutlined></router-link>
                      <a-dropdown>
                          <EllipsisOutlined key="ellipsis"/>
                          <template v-slot:overlay>
                              <a-menu class="overlay-dropdown">
                                  <a-menu-item>
                                      <a href="javascript:;" @click.prevent="copyClicked(item.id)"><CopyOutlined/> 复制</a>
                                  </a-menu-item>
                                  <a-menu-item>
                                      <a href="javascript:;" @click.prevent="deleteClicked(item.id)"><DeleteOutlined /> 删除</a>
                                  </a-menu-item>
                                  <a-menu-item>
                                      <a href="javascript:;"><DownloadOutlined /> 下载图片</a>
                                  </a-menu-item>
                              </a-menu>
                          </template>
                      </a-dropdown>
                  </template>
                  <a-card-meta :title="item.title"/>
              </a-card>
              <div class="tag-list">
                  <a-tag color="red" v-if="item.status === 1">未发布</a-tag>
                  <a-tag color="green" v-if="item.status === 2">已发布</a-tag>
              </div>
          </a-col>
      </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TemplateProps } from '../store/templates'
import { Modal } from 'ant-design-vue'
import { EditOutlined, EllipsisOutlined, CopyOutlined, DeleteOutlined, DownloadOutlined } from '@ant-design/icons-vue'

export default defineComponent({
    name: 'works-list',
    components: {
        EditOutlined,
        EllipsisOutlined,
        CopyOutlined,
        DeleteOutlined,
        DownloadOutlined
    },
    props: {
        list: {
            type: Array as PropType<TemplateProps[]>,
            required: true
        },
        loading: {
            type: Boolean,
            default: false
        },
        transferStatus: {
            type: Boolean,
            default: false
        }
    },
    setup(props, context) {
        const deleteClicked = (id: number) => {
            Modal.confirm({
                title: '确定要删除该作品吗？',
                okText: '删除',
                okType: 'danger',
                cancelText: '取消',
                onOk: () => {
                    context.emit('on-delete', id)
                }
            })
        }
        const copyClicked = (id: number) => {
            context.emit('on-copy', id)
        }
        return {
            deleteClicked,
            copyClicked
        }
    },
})
</script>
<style>
/* 这里的样式在templatelist里写的这里也适用 */
.poster-item {
  position: relative;
  margin-bottom: 20px;
}
.poster-item .ant-card {
  border-radius: 12px;
  overflow: hidden;
}
.tag-list {
  position: absolute;
  top: -4px;
  left: 6px;
}
.tag-list .ant-tag{
    border-radius: 10px;
}
.tag-list .ant-tag:hover {
    color: #1890ff;
}
.poster-item .ant-card-cover {
  height: 390px;
  position: relative;
  overflow: hidden;
}
.poster-item .ant-card-cover > img {
  width: 100%;
  transition: all ease-in .2s;
  font-size: 0;
}
.poster-item:hover .ant-card-cover > img {
  transform: scale(1.25);
}
.poster-item .ant-card-cover .hover-item {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
  background: rgba(0, 0, 0, .8);
  align-items: center;
  justify-content: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.poster-item:hover .hover-item {
  display: flex;
}
.poster-item:hover .hover-item .ant-btn{
    border-radius: 20px;
}
.poster-item .ant-card-body {
    padding: 0;
}
.poster-item .ant-card-meta-title {
    color: #333;
    padding: 10px 12px;
    border-bottom: 1px solid #f2f2f2;
    margin-bottom: 0!important;
}
</style>
