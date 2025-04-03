<template>
    <div>
        <h1 class="text-4xl merriweather">Recent Projects</h1>
        <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="project in projects" :key="project.name" class="bg-white shadow-md rounded-lg overflow-hidden">
                <div class="relative h-48 overflow-hidden">
                    <img :src="project.image" :alt="project.name" class="w-full h-full object-cover">
                </div>
            </div>
        </div> -->
        <h2>Coming 04/04/2025</h2>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
    {
        name: "Rodger",
        description: "A ",
        skills: ["Vue", "Supabase", "AI Integration"]
    },
    {
        name: "Finance Tracker",
        image: '/img/finance-tracker.png',
        link: "/work/finance_tracker",
        skills: ["Nuxt", "Supabase", "Chart.js"]
    },
    {
        name: "Three Tests",
        image: '/img/three-tests.png',
        link: "/work/three-tests",
        skills: ["JavaScript", "Tailwind", "UI Design"]
    },
    {
        name: "Mypalate",
        image: '/img/mypalate.jpg',
        link: "/work/mypalate",
        skills: ["React Native", "Node Js", "Mongo DB"]
    }
]);
</script>

<style scoped>
.merriweather {
    font-family: 'Merriweather', serif;
}
.roboto {
    font-family: 'Roboto', sans-serif;
}
</style>