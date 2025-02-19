<template>
  <nav :class="{'border-b-8 border-black': menuOpen}" class="font-mono p-4">
    <!-- Mobile Header -->
    <div class="flex items-center justify-between md:hidden">
      <button @click="toggleMenu" aria-label="Toggle menu" class="focus:outline-none">
        <!-- Hamburger Icon -->
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16" 
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Items -->
    <ul v-if="menuOpen" class="mt-4 space-y-4 md:hidden text-right">
      <li>
        <NuxtLink to="/" class="block link hover:text-pink-600">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="block link hover:text-pink-600">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" class="block link hover:text-pink-600">Projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" class="block link hover:text-pink-600">Contact</NuxtLink>
      </li>
    </ul>

    <!-- Desktop Menu Items -->
    <ul class="hidden md:block desktop-menu">
      <li class="menu-item">
        <NuxtLink to="/" class="link hover:text-pink-600">Home</NuxtLink>
      </li>
      <li class="menu-item">
        <NuxtLink to="/about" class="link hover:text-pink-600">About</NuxtLink>
      </li>
      <li class="menu-item">
        <NuxtLink to="/projects" class="link hover:text-pink-600">Projects</NuxtLink>
      </li>
      <li class="menu-item">
        <NuxtLink to="/contact" class="link hover:text-pink-600">Contact</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
/* Neo Brutalist styling for links */
.link {
  font-weight: bold;
  text-transform: uppercase;
}

.link:hover {
  border-bottom: 2px solid black;
}

/* Desktop Menu styles */
.desktop-menu {
  display: flex;
  justify-content: flex-end; /* Aligns the items to the right */
  gap: 1rem;
}

.desktop-menu .menu-item {
  border: 1px solid black;
  padding: 0.5rem 1rem;
}
</style>