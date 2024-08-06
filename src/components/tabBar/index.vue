<script setup lang="ts">
import tabbarData from '@/assets/data/tabBar'
import { getAssetURL } from '@/utils/loadAssertUrl'
import { ref } from 'vue'

const currentIndex = ref<number>(0)
</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <van-tabbar-item
        icon="home-o"
        v-for="(item, index) in tabbarData"
        :key="index"
        :to="item.path"
      >
        <span>{{ item.text }}</span>
        <template #icon>
          <img v-if="currentIndex === index" :src="getAssetURL(item.imageActive)" alt="" />
          <img v-else :src="getAssetURL(item.image)" alt="" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped lang="less">
.tab-bar {
  img {
    height: 26px;
  }
}
</style>
