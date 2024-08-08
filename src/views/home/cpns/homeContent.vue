<script setup lang="ts">
import houseItemV3 from '@/components/houseItemV3/index.vue'
import houseItemV9 from '@/components/houseItemV9/index.vue'
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
homeStore.fetchHouselistData()
const { houselist } = storeToRefs(homeStore)

// console.log(houselist.value)
const itemClick = (item: any) => {
  console.log('-------------- ', item)
}
</script>

<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in houselist" :key="item.data.houseId">
        <template v-if="item.discoveryContentType === 9">
          <houseItemV9 :item-data="item.data" @click="itemClick(item.data)" />
        </template>
        <template v-else-if="item.discoveryContentType === 3">
          <houseItemV3 :item-data="item.data" @click="itemClick(item.data)" />
        </template>
      </template>
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  padding: 10px 8px;
  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
