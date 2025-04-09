<template>

  <router-view v-slot="{ HomeView }">
    <!-- redundant, but caches the HomeView -->
    <keep-alive>
      <component :is="HomeView" />
    </keep-alive>
  </router-view>

  <HomeView />

</template>

<script setup lang="ts">
  import HomeView from '@/views/HomeView.vue'
</script>
