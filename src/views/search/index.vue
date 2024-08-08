<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
// console.log('route=============== ', route)
</script>

<template>
  <div class="search">
    <h2>{{ route.query.startDate }}</h2>
    <h2>{{ route.query.endDate }}</h2>
    <h2>{{ route.query.currentCity }}</h2>
  </div>
</template>

<style scoped></style>
