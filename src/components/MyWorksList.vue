<template>
    <div class="template-list-component">
        <a-row :gutter="16">
            <a-col :span="6" v-for="item in list" :key="item.id" class="poster-item">
                <router-link :to="{ name: 'template', params: { id: item.id }}">
                    <a-card hoverable>
                        <template v-slot:cover>
                            <img :src="item.coverImg" v-if="item.coverImg" />
                            <img src="http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png"  v-else />
                            <div class="hover-item">
                                <a-button size="large" type="primary">编辑该作品</a-button>
                            </div>
                        </template>
                        <a-card-meta :title="item.title">
                            <template v-slot:description>
                                <div class="description-detail">
                                    <span>作者：{{item.author}}</span>
                                    <span class="user-number"><user-outlined></user-outlined>{{item.copiedCount}}</span>
                                </div>
                            </template>
                        </a-card-meta>
                    </a-card>
                    <div class="tag-list">
                        <a-tag color="red" v-if="item.status === 1">未发布</a-tag>
                        <a-tag color="green" v-if="item.status === 2">已发布</a-tag>
                    </div>
                </router-link>
            </a-col>
        </a-row>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TemplateProps } from '../store/templates'
import { UserOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  name: 'template-list',
  components: {
    UserOutlined
  },
  props: {
    list: {
      type: Array as PropType<TemplateProps[]>,
      required: true
    }
  }
})
</script>
<style>
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
.description-detail {
    display: flex;
    justify-content: space-between;
    padding: 13px 12px;
    color: #999;
}
.description-detail .user-number{
  font-weight: 700;
}
</style>