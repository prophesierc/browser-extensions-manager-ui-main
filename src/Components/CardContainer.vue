<template>
  <div class="h-50 rounded-2xl shadow-default bg-white px-4">

    <span class="flex flex-row h-[70%] w-full py-4 mt-6">
      <img src="@/assets/images/logo-devlens.svg" class="h-15 w-15">
      <div class="text-start pl-5">
        <p class="text-xl font-dark">DevLens</p>
        <p class="text-paragraph font-light text-neutral-600"
        >Quickly inspect page layouts and visualize element boundaries.</p>
      </div>
    </span>

    <span class="flex flex-row w-full justify-between text-center place-items-center h-auto">
      <FilterButtons :button-text="removeButton" :class="'h-8 w-25 bg-white'"/>

      <span class="relative w-11 h-6">
        <input checked id="toggle" type="checkbox"
          class="peer appearance-none w-11 h-5 bg-Neutral-100 rounded-full checked:bg-red-dark duration-300" />
        <label for="toggle"
          class="absolute left-0 w-5 h-5 bg-white rounded-full border border-Neutral-300
            transition-transformduration-300 peer-checked:translate-x-6 peer-checked:border-red-dark cursor-pointer">
        </label>
      </span>

    </span>

  </div>
</template>

<script lang="ts">
  import FilterButtons from '@/Components/FilterButtons.vue'
  import { defineComponent } from 'vue';

  export default defineComponent(
  {
    name: 'CardContainer',
    components:
    {
      FilterButtons
    },
    data()
    {
      return{
        removeButton: 'Remove',
      }
    }
  });
</script>
