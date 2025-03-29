<template>
  <nav class="font-mono fixed w-full bg-white z-50">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Desktop Navigation -->
      <div class="hidden md:flex justify-end py-4 space-x-4">
        <NuxtLink 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path"
          class="px-4 py-2 border border-black font-bold uppercase hover:text-pink-600 hover:border-pink-600"
        >
          {{ item.name }}
        </NuxtLink>
      </div>

      <!-- Mobile Navigation -->
      <div class="md:hidden">
        <!-- Hamburger Button -->
        <div class="flex justify-end py-4">
          <button 
            @click="toggleMenu" 
            class="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg 
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div 
          :class="[
            menuOpen ? 'max-h-[200px] border-b-4 border-black bg-white' : 'max-h-0',
            'overflow-hidden transition-all duration-300 ease-in-out'
          ]"
        >
          <div class="pb-4 space-y-2">
            <NuxtLink 
              v-for="item in menuItems" 
              :key="item.path"
              :to="item.path"
              class="block text-right font-bold uppercase py-2 hover:text-pink-600"
              @click="closeMenu"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>
