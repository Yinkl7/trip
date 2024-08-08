<script setup lang="ts">
import useMainStore from '@/stores/modules/main'
import { formatMonthDay } from '@/utils/formatDate'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'

const searchText = ref('')

const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)

const startDateStr = computed(() => formatMonthDay(startDate.value, 'MM.DD'))
const endDateStr = computed(() => formatMonthDay(endDate.value, 'MM.DD'))

const handleSearchClick = () => {
  console.log('handleSearchClick=== ', searchText.value)
}
</script>

<template>
  <div class="search">
    <div class="select-time">
      <div class="item start">
        <div class="name">住</div>
        <div class="date">{{ startDateStr }}</div>
      </div>
      <div class="item end">
        <div class="name">离</div>
        <div class="date">{{ endDateStr }}</div>
      </div>
    </div>
    <div class="content">
      <van-field
        v-model="searchText"
        label=""
        placeholder="关键字/位置/民宿"
        maxlength="20"
        right-icon="search"
        :clearable="true"
        @click-right-icon="handleSearchClick"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
.search {
  --van-cell-background: #f2f4f6 !important;
  display: flex;
  align-items: center;
  height: 45px;
  line-height: 45px;
  padding: 0 10px;
  font-size: 14px;
  color: #999;
  border-radius: 6px;
  background-color: #f2f4f6;

  .select-time {
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      align-items: center;
      line-height: normal;
      font-size: 10px;
    }

    .date {
      position: relative;
      color: #333;
      margin: 0 10px 0 3px;
      font-weight: 500;
    }

    .end .date::after {
      content: '';
      width: 0;
      height: 0;
      border: 4px solid rgba(0, 0, 0, 0);
      border-left-color: #666;
      transform: rotate(45deg);
      position: absolute;
      bottom: 0;
      right: -12px;
    }
  }

  .content {
    flex: 1;
    :deep(.van-icon) {
      user-select: none;
    }
  }
}
</style>
