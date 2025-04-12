<template>
  <button
    @click="activateButton"
    :class="isActive ? 'bg-red-500 text-white' : 'bg-white'"
  >
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FilterButtons',
  props: {
    buttonText: {
      type: String,
      required: true
    },
  },
  setup(props)
  {
    const isActive = ref(false);
    // defaults to !isActive

    const activateButton = (): void =>
    {
      if (props.buttonText !== 'Remove')
      {
        isActive.value = !isActive.value;
        // toggles
      }
    };

    return {
      isActive,
      activateButton
    };
  },
});
</script>
