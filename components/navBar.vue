<template>
    <nav class="bg-zinc-50 shadow-lg">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
                <!-- Logo/Brand -->
                <div class="flex items-center">
                    <a href="/" class="text-xl font-bold">Your Brand</a>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="/" class="hover:underline">Home</a>
                    <a href="/about" class="hover:underline">About</a>
                    <a href="/projects" class="hover:underline">Projects</a>
                    <a href="/contact" class="hover:underline">Contact</a>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                    <button @click="isOpen = !isOpen" class="outline-none">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Navigation -->
            <div v-show="isOpen" class="md:hidden">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <a href="/" class="block py-2 hover:underline">Home</a>
                    <a href="/about" class="block py-2 hover:underline">About</a>
                    <a href="/projects" class="block py-2 hover:underline">Projects</a>
                    <a href="/contact" class="block py-2 hover:underline">Contact</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
const isOpen = ref(false)
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>

