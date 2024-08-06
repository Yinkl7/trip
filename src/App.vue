<script setup lang="ts">
import { useRoute } from 'vue-router'
import tabBar from './components/tabBar/index.vue'

const route = useRoute()
</script>

<template>
  <div class="app">
    <RouterView />
    <tabBar v-if="!route.meta.hideTabBar" />
  </div>
</template>

<style scoped></style>
