<script setup lang="ts">
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { computed } from 'vue'
import { useRouter } from 'vue-router';

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

const indexList = computed(() => {
  const list = props.groupData.cities.map((item: any) => item.group)
  list.unshift('#')
  return list
})

const store = useCityStore()
const { currentCity } = storeToRefs(store)

const router = useRouter()

const cityClick = (city: any) => {
  currentCity.value = city
  router.back()
}
</script>

<template>
  <div class="city-group">
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="item in groupData?.hotCities" :key="item.cityId">
          <div class="city"  @click="cityClick(item)" >{{ item.cityName }}</div>
        </template>
      </div>

      <template v-for="group in groupData?.cities" :key="group.group">
        <div class="group-item">
          <van-index-anchor :index="group.group" />
          <van-cell v-for="city in group.cities" :key="city.cityId" :title="city.cityName"  @click="cityClick(city)" />
        </div>
      </template>
    </van-index-bar>
  </div>
</template>

<style scoped lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  .city {
    box-sizing: content-box;
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 6px 0;
  }
}
</style>
