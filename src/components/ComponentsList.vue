<template>
  <div class="component-list">
    <template v-if="type==='text'">
      <div v-for="(item, index) in list" :key="index" class="component-item" @click="onItemClick(item)">
        <l-text v-bind="item"></l-text>
      </div>
    </template>
    <template v-if="type==='image'">
      <div v-for="(item, index) in list" :key="index" class="component-item" @click="onItemClick(item)">
        <l-image v-bind="item"></l-image>
      </div>
    </template>
    <template v-if="type==='shape'">
      <div v-for="(item, index) in list" :key="index" class="component-item" @click="onItemClick(item)">
        <l-shape v-bind="item"></l-shape>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { ComponentData } from '../store/editor'
import { TextComponentProps } from '../defaultProps'
import LText from './LText.vue'
import LImage from './LImage.vue'
import LShape from './LShape.vue'
type P = 'l-text' | 'l-image' | 'l-shape'
export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  emits: ['on-item-click'],
  name: 'components-list',
  components: {
    LText,
    LImage,
    LShape
  },
  setup(props, context) {
    const p = props;
    const onItemClick = (props: TextComponentProps) => {
      const componentData: ComponentData = {
        name: 'l-' + p.type as P,
        id: uuidv4(),
        props
      }
      context.emit('on-item-click', componentData)
    }
    return {
      onItemClick,
    }
  }
})
</script>

<style>
.component-list{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.component-item {
  margin-bottom: 15px;
}
.component-item > * {
  position: static !important;
  display: flex;
  justify-content: center;
}

</style>