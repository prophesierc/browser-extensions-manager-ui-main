<template>
  <div class="h-50 rounded-2xl shadow-default bg-white px-4">

    <span class="flex flex-row h-[70%] w-full py-4">
      <img src="@/assets/images/logo-devlens.svg" class="h-15 w-15">
      <div class="text-start pl-5">
        <p class="text-xl font-dark">DevLens</p>
        <p class="text-paragraph font-light text-neutral-600"
        >Quickly inspect page layouts and visualize element boundaries.</p>
      </div>
    </span>

    <span class="flex flex-row w-full justify-between text-center place-items-center h-auto">
      <button class="h-8 w-25">Remove</button>

      <label for="isActive">
        <input type="checkbox" id="isActive" name="toggle" class="peer appearance-none hidden" />
        <span class="w-10 h-5 flex items-center ml-4 p-1 bg-neutral-300 rounded-full
          duration-300 ease-in-out peer-checked:bg-red-dark
          after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-default
          after:duration-300 peer-checked:after:translate-x-4">
        </span>
    </label>
    </span>

  </div>
</template>
