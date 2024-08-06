<script setup lang="ts">
import homeNavBar from './cpns/homeNavBar.vue'
import homeSearchBox from './cpns/homeSearchBox.vue'
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
const { hotSuggests, categories } = storeToRefs(homeStore)
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
</script>

<template>
  <div class="home">
    <homeNavBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <homeSearchBox :hotSuggests="hotSuggests" :categories="categories" />
  </div>
</template>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
