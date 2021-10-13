<template>
  <div class="inline-editor" ref="wrapper" @click.stop="handleClick">
      <input 
        v-if="isEditing" 
        placeholder="文本不能为空"
        class="editor-input"
        ref="inputRef"
        v-model="innerValue"
        :class="{ 'input-error': !validateCheck}"
      />
      <span v-else class="editor-text">{{innerValue}}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, nextTick } from 'vue'

export default defineComponent({
    name: 'inline-editor',
    props: {
        value: {
            type: String,
            required: true,
        }
    },
    emits: ['change'],
    setup(props, context) {
        const isEditing = ref(false)
        const innerValue = ref(props.value)
        const validateCheck = computed( () => innerValue.value !== '' )
        const wrapper = ref<null | HTMLElement>(null)
        const inputRef = ref<null | HTMLInputElement>(null)
        watch(
            () => props.value,
            (newValue) => {
                innerValue.value = newValue;
            }
        )
        const handleClick = () => {
            isEditing.value = true
            {(async()=>{
                await nextTick()
                if (inputRef.value) {
                    inputRef.value.focus()
                }
            })()}
        }
        const quit = () => {
            if(validateCheck.value){
                isEditing.value = false
                context.emit('change', innerValue.value)
            }else{
                if (inputRef.value) {
                    inputRef.value.focus()
                }
            }
        }
        const handler = (e: MouseEvent) => {
            if(wrapper.value && e.target) {
                if(!wrapper.value.contains(e.target as HTMLElement)) {
                    quit()
                }
            }
        }
        const trigger = (event: KeyboardEvent) => {
            if ( event.key === 'Enter' || event.key === 'Escape') {
                quit()
            }
        }
        watch(
            () => isEditing.value,
            (flag) => {
                if(flag){
                    document.addEventListener('click', handler)
                    document.addEventListener('keydown', trigger)
                }else{
                    document.removeEventListener('click', handler)
                    document.removeEventListener('keydown', trigger)
                }
            }
        )
        
        return {
            isEditing,
            validateCheck,
            innerValue,
            handleClick,
            inputRef,
            wrapper,
        }
    },
})
</script>


<style lang="less">
.inline-editor {
  cursor: pointer;
  display: flex;
  align-items: center;
  .editor-input{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
    height: 32px;
    padding: 4px 11px;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 20px;
    outline: none;
  }
  .editor-input:focus{
      border-color: #1890ff;
  }
  .input-error {
    border: 1px solid #f5222d;
  }
  .input-error:focus {
    border-color:  #f5222d;
  }
  .input-error::placeholder {
    color: #f5222d;
  }
}
</style>