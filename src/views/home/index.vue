<script setup lang="ts">
import homeCategories from './cpns/homeCategories.vue'
import homeContent from './cpns/homeContent.vue'
import homeNavBar from './cpns/homeNavBar.vue'
import homeSearchBox from './cpns/homeSearchBox.vue'
import useHomeStore from '@/stores/modules/home'
import searchBar from '@/components/searchBar/index.vue'
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

    <homeCategories />

    <homeContent />

    <div class="search-bar">
      <searchBar />
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
  .banner {
    img {
      width: 100%;
    }
  }

  .search-bar {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    background-color: #fff;
  }
}
</style>
