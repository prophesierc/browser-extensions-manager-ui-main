<template>
  <div
    v-for="(data, index) in extension"
    :key="index"
    class="h-55 rounded-2xl shadow-default bg-white px-4 mb-4 last:mb-20">

    <span class="flex flex-row h-[70%] w-full py-4 mt-6 ">
      <img :src="data?.logo" :alt="`${data?.name} logo`" class="h-15 w-15">
      <div class="text-start pl-5">
        <p class="text-xl font-dark mb-2">
          {{ data?.name }}</p>
        <p class="text-paragraph font-light text-neutral-600 max-w-60 min-w-50">
          {{ data?.description }}</p>
      </div>
    </span>

    <span class="flex flex-row w-full justify-between text-center place-items-center h-auto">

      <RemoveCard
        :button-text="removeButton"
        @removeCardButton="remove"
        :class="'h-8 w-25 bg-white-500'"
      />

      <span class="relative w-11 h-6">

        <input :checked="data.isActive"
          :id="`toggle-${index}`"
          type="checkbox"
          v-model="data.isActive"
          class="peer appearance-none w-11 h-5 bg-Neutral-100 rounded-full checked:bg-red-dark duration-300" />

        <label :for="`toggle-${index}`"
          class="absolute left-0 w-5 h-5 bg-white rounded-full border border-Neutral-300
            transition-transformduration-300 peer-checked:translate-x-6 peer-checked:border-red-dark cursor-pointer">
        </label>

      </span>

    </span>
  </div>
</template>

<script lang="ts">
  import RemoveCard from '@/Components/RemoveCard.vue'
  import { defineComponent } from 'vue';
  import { fetchExtensions } from '@/Composables/Fetch'
  import type { Extension } from '@/Composables/Fetch'
  export default defineComponent(
  {
    name: 'CardContainer',
    components:
    {
      RemoveCard
    },
    data()
    {
      return{
        removeButton: 'Remove',
        extension: [] as Extension[],
        container: []
      }
    },
    methods:
    {
      remove()
      {
        console.log('test')
      }
    },
    mounted()
    {
      fetchExtensions()
        .then((data) =>
        {
          this.extension = data
        })
        .catch((err) =>
        {
          console.error(err)
        })
    }
  });
</script>
