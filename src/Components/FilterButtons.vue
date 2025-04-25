<template>
  <button
    @click="activateButton"
    :class="isActive ? 'bg-red-500 text-white' : 'bg-white'"
  >{{ buttonText }}</button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent(
  {
    name: 'FilterButtons',
    props:
    {
      buttonText:
      {
        type: String,
        required: true
      },
      isActive:
      {
        type: Boolean,
        required: true
      }
    },
    emits: ['activate'],
    methods:
    {
      activateButton(): void
      {
        this.$emit('activate');
      }
    }
  });
</script>
