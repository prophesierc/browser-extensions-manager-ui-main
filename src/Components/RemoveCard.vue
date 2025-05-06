<template>
  <button
    @click="removeCardButton"
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
    },
    emits: ['removeCard'],
    methods:
    {
      removeCardButton(): void
      {
        this.$emit('removeCard');
      }
    }
  });
</script>
