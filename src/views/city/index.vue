<script setup lang="ts">
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import cityGroup from './cpns/cityGroup.vue'

const router = useRouter()

// 搜索框
const searchValue = ref('')
const cancelClick = () => {
  router.back()
}

// tab切换
const tabActive = ref<string>('')

// 获取数据
const store = useCityStore()
const { allCities } = storeToRefs(store)
store.fetchAllCitiesData()
</script>

<template>
  <div class="city top-page">
    <div class="top">
      <!-- 搜索框 -->
      <van-search
        v-model="searchValue"
        shape="round"
        placeholder="请输入搜索关键词"
        show-action
        @cancel="cancelClick"
      />

      <!-- tab标签 -->
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <!-- <van-tab title="国内·港澳台">国内·港澳台</van-tab>
      <van-tab title="海外">海外</van-tab> -->
        <van-tab
          v-for="(value, key, index) in allCities"
          :title="value.title"
          :key="index"
          :name="key"
        >
        </van-tab>
      </van-tabs>
    </div>

    <div class="content">
      <template v-for="(value, key, index) in allCities" :key="index">
        <cityGroup v-show="tabActive === key" :group-data="value" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="less">
.city {
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
