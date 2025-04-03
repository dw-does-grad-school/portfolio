<template>
    <nav class="bg-zinc-50 shadow-lg">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
                <!-- Logo/Brand -->
                <div class="flex items-center">
                    <NuxtLink to="/" class="text-2xl font-bold text-sky-600 merriweather">David Welsh</NuxtLink>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <NuxtLink 
                        to="/" 
                        :class="[
                            'hover:underline transition-colors duration-300 roboto',
                            $route.path === '/' ? 'text-sky-600' : 'text-gray-700'
                        ]"
                    >
                        Home
                    </NuxtLink>
                    <NuxtLink 
                        to="/about" 
                        :class="[
                            'hover:underline transition-colors duration-300 roboto',
                            $route.path === '/about' ? 'text-sky-600' : 'text-gray-700'
                        ]"
                    >
                        About
                    </NuxtLink>
                    <NuxtLink 
                        to="/projects" 
                        :class="[
                            'hover:underline transition-colors duration-300 roboto',
                            $route.path === '/projects' ? 'text-sky-600' : 'text-gray-700'
                        ]"
                    >
                        Projects
                    </NuxtLink>
                    <NuxtLink 
                        to="/contact" 
                        :class="[
                            'hover:underline transition-colors duration-300 roboto',
                            $route.path === '/contact' ? 'text-sky-600' : 'text-gray-700'
                        ]"
                    >
                        Contact
                    </NuxtLink>
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
                    <NuxtLink 
                        to="/" 
                        :class="[
                            'block py-2 hover:underline transition-colors duration-300',
                            $route.path === '/' ? 'text-sky-600' : 'text-gray-700'
                        ]"
                    >
                        Home
                    </NuxtLink>
                    <NuxtLink 
                        to="/about" 
                        :class="[
                            'block py-2 hover:underline transition-colors duration-300',
                            $route.path === '/about' ? 'text-sky-600' : 'text-gray-700'
                        ]"
                    >
                        About
                    </NuxtLink>
                    <NuxtLink 
                        to="/projects" 
                        :class="[
                            'block py-2 hover:underline transition-colors duration-300',
                            $route.path === '/projects' ? 'text-sky-600' : 'text-gray-700'
                        ]"
                    >
                        Projects
                    </NuxtLink>
                    <NuxtLink 
                        to="/contact" 
                        :class="[
                            'block py-2 hover:underline transition-colors duration-300',
                            $route.path === '/contact' ? 'text-sky-600' : 'text-gray-700'
                        ]"
                    >
                        Contact
                    </NuxtLink>
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
.merriweather {
    font-family: 'Merriweather', serif;
}
.roboto {
    font-family: 'Roboto', sans-serif;
}
</style>

