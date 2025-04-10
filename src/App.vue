<template>

  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <HomeView />

</template>

<script setup lang="ts">
  import HomeView from '@/views/HomeView.vue'
</script>
