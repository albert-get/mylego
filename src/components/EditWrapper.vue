<template>
  <div class="edit-wrapper"
    ref="editWrapper"
    :style="styles"
    :data-component-id="id"
    @mousedown.stop="startMove"
    @click="onItemClick(id)" :class="{ active: active, hidden: hidden }">
    <div class="move-wrapper">
      <slot></slot>
    </div>
    <div class="resizers">
      <div class='resizer top-left'  @mousedown.stop="startResize($event,'top-left')"></div>
      <div class='resizer top-right'  @mousedown.stop="startResize($event,'top-right')"></div>
      <div class='resizer bottom-left'  @mousedown.stop="startResize($event,'bottom-left')"></div>
      <div class='resizer bottom-right' @mousedown.stop="startResize($event,'bottom-right')"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import { pick } from 'lodash-es'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store/index'

type ResizeDirection = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
interface OriginalPositions {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    },
    props: {
      type: Object
    }
  },
  emits: ['set-active', 'update-position'],
  setup(props, context) {
    const store = useStore<GlobalDataProps>()
    const editWrapper = ref<null | HTMLElement>(null)
    const onItemClick = (id: string) => {
      context.emit('set-active', id)
    }
    const gap = {
      x: 0,
      y: 0
    }
    let isMoving = false
    const styles = computed(() => pick(props.props, ['position', 'top', 'left', 'width', 'height']))
    const caculateMovePosition = (e: MouseEvent) => {
      const container = document.getElementById('canvas-area') as HTMLElement
      const left = e.clientX - gap.x - container.offsetLeft
      const top = e.clientY - gap.y - container.offsetTop  + container.scrollTop
      return {
        left,
        top
      }
    }
    const initE = {
      clientX: 0,
      clientY: 0
    }
    const caculateSize = (direction: ResizeDirection, e: MouseEvent, positions: { left: number; top: number; width: number; height: number }) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = positions
      const rightWidth = width + (clientX - initE.clientX)
      const leftWidth = width - (clientX - initE.clientX)
      const leftOffset = left + (clientX - initE.clientX)
      const bottomHeight = height + (clientY - initE.clientY)
      const topHeight = height - (clientY - initE.clientY )
      const topOffset = top + (clientY - initE.clientY)
      switch (direction) {
        case 'top-left':
          return {
            width: leftWidth,
            height: topHeight,
            top: topOffset,
            left: leftOffset
          }
        case 'top-right':
          return {
            width: rightWidth,
            height: topHeight,
            top: topOffset
          }
        case 'bottom-left':
          return {
            width: leftWidth,
            height: bottomHeight,
            left: leftOffset
          }
        case 'bottom-right':
          return {
            width: rightWidth,
            height: bottomHeight
          }
        default:
          break
      }
    }
    
    const startResize = (e: MouseEvent,direction: ResizeDirection) => {
      initE.clientX = e.clientX
      initE.clientY = e.clientY
      const currentElement = editWrapper.value as HTMLElement
      const {left, top, width, height } = getComputedStyle(currentElement)
      const handleMove = (e: MouseEvent) => {
        const size = caculateSize(direction, e, {left: parseInt(left),top: parseInt(top), width:parseInt(width),height:parseInt(height) })
        // const { style } = currentElement
        // if (size) {
        //   style.width = size.width + 'px'
        //   style.height = size.height + 'px'
        //   if (size.left) {
        //     style.left = size.left + 'px'
        //   }
        //   if (size.top) {
        //     style.top = size.top + 'px'
        //   }
        // }
        context.emit('update-position', { ...size, id: props.id })
      }
      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMove)
        
        nextTick(() => {
          document.removeEventListener('mouseup', handleMouseUp)
        })
      }
      document.addEventListener('mousemove', handleMove)
      document.addEventListener('mouseup', handleMouseUp)
    }
    const initPost = {
      x: 0,
      y: 0
    }
    const ePost = {
      left: 0,
      top: 0
    }
    const startMove = (e: MouseEvent) => {
      const currentElement = editWrapper.value as HTMLElement
      initPost.x = e.clientX
      initPost.y = e.clientY
      const { left, top } = currentElement.style
      ePost.left = parseInt(left)
      ePost.top = parseInt(top)
      const handleMove = (e: MouseEvent) => {
        isMoving = true
        context.emit('update-position', { left:e.clientX -initPost.x + ePost.left, top:e.clientY - initPost.y + ePost.top, id: props.id })
      }
      const handleMouseUp = (e: MouseEvent) => {
        document.removeEventListener('mousemove', handleMove)
        if (isMoving) {
          isMoving = false
        }
        nextTick(() => {
          document.removeEventListener('mouseup', handleMouseUp)
        })
      }
      document.addEventListener('mousemove', handleMove)
      document.addEventListener('mouseup', handleMouseUp)
    }
    return {
      onItemClick,
      styles,
      editWrapper,
      startMove,
      startResize
    }
  }
})
</script>

<style>
.edit-wrapper {
  padding: 0px;
  cursor: pointer;
  border: 1px solid transparent;
  user-select: none;
  box-sizing: content-box !important;
}
.edit-wrapper .move-wrapper {
  position: static !important;
  width: 100% !important;
  height: 100% !important;
}
.move-wrapper > * {
  position: static !important;
}
.edit-wrapper:hover {
  border: 1px dashed #ccc;
}
.edit-wrapper.hidden {
  display: none;
}
.edit-wrapper.active {
  border: 1px solid #1890ff;
  user-select: none;
  z-index: 1500;
}
.edit-wrapper .resizers {
  display: none;
  width: 0 !important;
  height: 0 !important;
}
.edit-wrapper.active .resizers {
  display: block;
}
.edit-wrapper.active .resizers .resizer {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid #1890ff;
  position: absolute;
}
.edit-wrapper .resizers .resizer.top-left {
  left: -5px;
  top: -5px;
  cursor: nwse-resize;
}
.edit-wrapper .resizers .resizer.top-right {
  right: -5px;
  top: -5px;
  cursor: nesw-resize;
}
.edit-wrapper .resizers .resizer.bottom-left {
  left: -5px;
  bottom: -5px;
  cursor: nesw-resize;
}
.edit-wrapper .resizers .resizer.bottom-right {
  right: -5px;
  bottom: -5px;
  cursor: nwse-resize;
}

</style>