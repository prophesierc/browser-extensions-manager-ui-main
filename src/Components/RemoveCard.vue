<template>
  <button
  >{{ buttonText }}</button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent(
  {
    name: 'RemoveCard',
    props:
    {
      buttonText:
      {
        type: String,
        required: true
      }
    }
  });
</script>
