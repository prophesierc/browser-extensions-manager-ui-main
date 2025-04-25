<template>
  <div class="h-full w-screen flex flex-col text-center bg-gradient-to-b from-[#EBF2FC] to-[#EEF8F9] overflow-x-hidden">
      <!-- bg-gradient-to-b from-[#040918] to-[#091540] for darkmode -->
      <!-- bg-gradient-to-b from-[#EBF2FC] to-[#EEF8F9] for lightmode -->
    <div class="m-4">
      <!-- inner container -->
      <ExtensionsBar/>

      <h1 class="pt-8 pb-2 font-dark text-3xl"
        >Extensions List
      </h1>

      <span class="min-w-[80%] max-w-[85%] mt-4 mb-10
        flex flex-row justify-between items-center place-self-center
        *:h-10 last:m-100"
      >
        <FilterButtons
          :button-text="allButton"
          :class="'h-22 w-16'"
          :is-active="activeFilter === allButton"
          @activate="setActive(allButton)"
        />

        <FilterButtons
          :button-text="activeButton"
          :class="'h-22 w-20'"
          :is-active="activeFilter === activeButton"
          @activate="setActive(activeButton)"
        />

        <FilterButtons
          :button-text="inactiveButton"
          :class="'h-22 w-22'"
          :is-active="activeFilter === inactiveButton"
          @activate="setActive(inactiveButton)"
        />

      </span>
      
      <CardContainer/>

    </div>

  </div>
</template>

<script lang="ts">
  import ExtensionsBar from '@/Components/ExtensionsBar.vue'
  import FilterButtons from '@/Components/FilterButtons.vue'
  import CardContainer from '@/Components/CardContainer.vue'
  import { defineComponent } from 'vue';

  export default defineComponent(
  {
    name: 'HomeView',
    components:
    {
      ExtensionsBar,
      FilterButtons,
      CardContainer
    },
    data()
    {
      return{
        allButton: 'All',
        activeButton: 'Active',
        inactiveButton: 'Inactive',
        activeFilter: 'All',
      };
    },
    methods:
    {
      setActive(button: string)
      {
        this.activeFilter = button;
      }
    }
  });
  </script>
