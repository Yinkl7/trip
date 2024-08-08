<script setup lang="ts">
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)

homeStore.fetchCategoriesData()
</script>

<template>
  <div class="categories">
    <div v-for="item in categories" class="item" :key="item.id">
      <img :src="item.pictureUrl" alt="" />
      <div class="text">{{ item.title }}</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.categories {
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 10px;
  margin-top: 8px;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70px;
    text-align: center;

    img {
      width: 32px;
      height: 32px;
    }

    .text {
      font-size: 12px;
      margin-top: 8px;
    }
  }
}
</style>
