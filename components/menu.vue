<template>
  <nav class="font-mono fixed mt-20 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Desktop Navigation -->
      <div class="hidden md:flex justify-end py-6 space-x-6">
        <NuxtLink 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path"
          class="px-4 py-2 font-medium uppercase tracking-wide transition-all duration-200 hover:text-pink-600 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-pink-600 after:transition-all after:duration-200 hover:after:w-full"
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
            class="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
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
                stroke-width="1.5" 
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div 
          :class="[
            menuOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0',
            'overflow-hidden transition-all duration-300 ease-in-out'
          ]"
        >
          <div class="pb-6 space-y-3">
            <NuxtLink 
              v-for="item in menuItems" 
              :key="item.path"
              :to="item.path"
              class="block text-right py-2 px-4 font-medium uppercase tracking-wide hover:text-pink-600 transition-colors duration-200"
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
