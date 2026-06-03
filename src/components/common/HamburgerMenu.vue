<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<template>
  <div class="sm:hidden">
    <button
      @click="isOpen = !isOpen"
      class="text-customGray hover:text-customGreen dark:text-customBlack dark:hover:text-customGreen"
      aria-label="Toggle navigation menu"
    >
      <svg
        v-if="!isOpen"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 256 256"
        fill="currentColor"
      >
        <path d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16Zm176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16Z" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 256 256"
        fill="currentColor"
      >
        <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
      </svg>
    </button>

    <nav
      v-if="isOpen"
      class="absolute top-full left-0 w-full bg-customBlack dark:bg-white border-t border-customGreen/30 py-4 px-6 shadow-md z-50"
    >
      <ul class="flex flex-col gap-4 text-customGreen text-base">
        <li class="hover:underline"><a href="/" @click="isOpen = false">Home</a></li>
        <li class="hover:underline"><a href="/about" @click="isOpen = false">About</a></li>
        <li class="hover:underline"><a href="/projects/1" @click="isOpen = false">Projects</a></li>
        <li class="hover:underline"><a href="/blog/1" @click="isOpen = false">Blog</a></li>
        <li class="hover:underline"><a href="/notes/1" @click="isOpen = false">Notes</a></li>
      </ul>
    </nav>
  </div>
</template>
