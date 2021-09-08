<template>
  <div class="app-container">
    <a-spin class="global-spinner" tip="读取中" v-if="false"/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'App',
});
</script>

<style>
.app-container .global-spinner {
  position: fixed;
  top: 10px;
  right: 50%;
}
</style>
