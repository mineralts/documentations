<template>
  <div class="collapse">
    <div class="header">
      <div @click.prevent="toggle" class="icon">
        <svg v-if="state" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </div>
        <slot name="label" />
    </div>
    <transition>
      <slot v-if="state" name="body"></slot>
    </transition>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const state = ref(false)

function toggle () {
  state.value = !state.value
}

</script>

<style scoped>
.collapse .header {
  display: flex;
}

.collapse .header .icon {
  display: flex;
  align-items: center;
  padding-right: 5px;
  cursor: pointer;
}
</style>