<template>
  <div class="component-list">
    <div v-for="(item, index) in list" :key="index" class="component-item" @click="onItemClick(item)">
      <l-text v-bind="item"></l-text>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { ComponentData } from '../store/editor'
import { TextComponentProps } from 'lego-bricks'
import LText from './LText.vue'
export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  emits: ['on-item-click'],
  name: 'components-list-text',
  components: {
    LText
  },
  setup(props, context) {
    const onItemClick = (props: TextComponentProps) => {
      const componentData: ComponentData = {
        name: 'l-text',
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