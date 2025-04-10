<template>
  <div class="h-screen w-screen flex flex-col text-center bg-gradient-to-b from-[#EBF2FC] to-[#EEF8F9]">
    <!-- bg-gradient-to-b from-[#040918] to-[#091540] for darkmode -->
    <!-- bg-gradient-to-b from-[#EBF2FC] to-[#EEF8F9] for lightmode -->
    <div class="m-4">
      <!-- inner container -->
      <ExtensionsBar/>
    </div>

  </div>
</template>

<script setup lang="ts">
  import ExtensionsBar from '@/Components/ExtensionsBar.vue'
</script>
