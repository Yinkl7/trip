<script setup lang="ts">
import useCityStore from '@/stores/modules/city'
import useHomeStore from '@/stores/modules/home'
import { formatMonthDay, getDiffDays } from '@/utils/formatDate'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// 位置/城市
const cityClick = () => {
  router.push('/city')
}

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    (res: any) => {
      console.log('获取位置：', res)
    },
    (err: any) => {
      console.log('获取位置失败：', err)
    },
    {
      enableHighAccuracy: true,
      timeout: 2000,
      maximumAge: 0
    }
  )
}

const store = useCityStore()
const { currentCity } = storeToRefs(store)

const nowDate = new Date()
const startDate = ref(formatMonthDay(nowDate))
const newDate = new Date().setDate(new Date().getDate() + 1)
const endDate = ref(formatMonthDay(newDate))
const stayCount = ref(getDiffDays(nowDate, newDate))

const showCalender = ref(false)

function onConfirm(values: Date | Date[]) {
  if (Array.isArray(values)) {
    startDate.value = formatMonthDay(values[0])
    endDate.value = formatMonthDay(values[1])
    stayCount.value = getDiffDays(values[0], values[1])
  }
  showCalender.value = false
}

const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)
</script>

<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>

    <!-- 日期范围 -->
    <section class="section date-range" @click="showCalender = true">
      <div class="start">
        <div class="date">
          <span>入住</span>
          <span>{{ startDate }}</span>
        </div>
      </div>
      <div class="stay">共{{ stayCount }}晚</div>
      <div class="end">
        <div class="date">
          <span>离店</span>
          <span>{{ endDate }}</span>
        </div>
      </div>
    </section>
    <van-calendar
      v-model:show="showCalender"
      type="range"
      color="#ff9854"
      :round="false"
      @confirm="onConfirm"
    />

    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门建议 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="item"
          :style="{ color: item.tagText.color, background: item.tagText.background.color }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="less">
.search-box {
  --van-calendar-popup-height: 100% !important;
}

.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  .city {
    flex: 1;
    font-size: 15px;
  }
  .position {
    width: 74px;

    .text {
      font-size: 12px;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}

.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.hot-suggests {
  margin: 10px 0;
  height: auto;

  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}
</style>
