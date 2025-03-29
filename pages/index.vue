<template>
    <section class="hero mt-40 md:min-h-screen shadow-2xl bg-gradient-to-b from-base-100/50 to-base-100 w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-center py-16 md:py-24">
            <!-- Left Column -->
            <div class="flex-1">
                <div class="hero-content text-center mt-4 md:mt-16">
                    <h1 class="pop-in header-text">
                        <span class="font-bold text-5xl md:text-7xl">I'm David</span>
                        <br>
                        <br>
                        <span class="focus-text block mx-auto md:mx-0 md:max-w-[80%]">
                            I'm a software developer, and graduate student in Clemson's School of Computing. 
                            My focus is on building scalable, interactive, and user-friendly applications that 
                            address the issues that the people using them are facing. 
                        </span>
                    </h1>
                </div>
            </div>
            <!-- Right Column -->
            <div class="hidden md:flex flex-1 justify-center items-center mt-16 md:mt-0">
                <img :src="brutalcoding" alt="City Coding Image" class="coding-image" />
            </div>
        </div>
    </section>

    <!-- <section class="menu-boxes-section bg-white border-t border-b border-black/50 py-[20%]">
        <div class="container mx-auto flex flex-col md:flex-row">
            <div class="w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
                <div 
                    class="menu-box hover:text-pink-600 flex items-center justify-center p-16 border shadow-lg text-3xl bg-white text-black transition-colors duration-300 hover:cursor-pointer"
                    @mouseenter="onLeftEnter" 
                    @mouseleave="onLeftLeave">
                    <NuxtLink to="/about">About</NuxtLink>
                </div>
            </div>
            <div class="w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
                <div 
                    class="menu-box hover:text-pink-600 flex items-center justify-center p-16 border shadow-lg text-3xl transition-colors duration-300 hover:cursor-pointer"
                    :class="(leftHovered || centerHovered || rightHovered) ? 'bg-white text-black' : 'bg-pink-600 text-white'"
                    @mouseenter="onCenterEnter" 
                    @mouseleave="onCenterLeave">
                    <NuxtLink to="/projects">Projects</NuxtLink>
                </div>
            </div>
            <div class="w-full md:w-1/3 flex justify-center items-center">
                <div 
                    class="menu-box hover:text-pink-600 flex items-center justify-center p-16 border shadow-lg text-3xl bg-white text-black transition-colors duration-300 hover:cursor-pointer"
                    @mouseenter="onRightEnter" 
                    @mouseleave="onRightLeave">
                    <NuxtLink to="/contact">Contact</NuxtLink>
                </div>
            </div>
        </div>
    </section>  -->

    <section class="semi-hero relative flex flex-col mt-24 mb-24 items-center">
        <h3 class="text-center text-4xl focus-text">
            There's more to life than just coding, even if it is some of the fun
        </h3>
        <div class="flex justify-center items-center mt-8 space-x-8">
            <div class="relative inline-block mt-8">
                <!-- Desktop version -->
                <div class="hidden md:block">
                    <img :src="dotted_background" alt="Dotted Background" class="dotted-image">
                    <img :src="code" alt="Code Image" class="code-image">
                    <div class="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 translate-x-[60%] bg-sky-500 border border-black border-r-4 border-b-4 w-[24vh] h-[24vh] flex items-center justify-center">
                        <NuxtLink to="/projects" class="text-white text-3xl focus-text">LEARN MORE...</NuxtLink>
                    </div>
                </div>
                <!-- Mobile version -->
                <div class="md:hidden relative w-[80vw] h-[60vh]">
                    <div class="absolute inset-0 bg-center bg-cover" :style="{ backgroundImage: `url(${code})` }"></div>
                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <NuxtLink to="/projects" class="text-white text-3xl focus-text bg-sky-500 border border-black border-r-4 border-b-4 p-6">
                            LEARN MORE...
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Updated Section with white background -->
    

    <section>
      
    </section>

</template>

<script setup>
import { ref } from 'vue';

import dotted_background from '@/assets/dotted_background.jpg';
import code from '@/assets/code.jpg';
import brutalcoding from '@/assets/nbrutalcode.jpeg';

const leftHovered = ref(false);
const centerHovered = ref(false);
const rightHovered = ref(false);

function onLeftEnter() {
    leftHovered.value = true;
}

function onLeftLeave() {
    leftHovered.value = false;
}

function onCenterEnter() {
    centerHovered.value = true;
}

function onCenterLeave() {
    centerHovered.value = false;
}

function onRightEnter() {
    rightHovered.value = true;
}

function onRightLeave() {
    rightHovered.value = false;
}
</script>

<style>
.sum-text {
    font-family: 'Inter', sans-serif;
}

.focus-text {
    font-family: 'Bebas Neue', sans-serif;
}

.floating-image {
  width: 300px; /* Adjust width as needed */
  height: auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.floating-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.floating-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@keyframes popIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.pop-in {
  animation: popIn 0.6s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards;
  opacity: 0;
}

/* New styles for semi-hero images */
.image-wrapper {
    position: relative;
    display: inline-block;
}

.code-image {
    height: 60vh;
    width: auto;
    object-fit: cover;
    border-radius: 9999px; /* Makes the ends fully rounded */
    border: 5px solid #000; /* Example border; adjust color & thickness as needed */
    position: relative;
    z-index: 2;
}

.dotted-image {
    height: 45vh; /* 75% of 60vh */
    width: auto;
    object-fit: cover;
    border-radius: 50%; /* Completely circular */
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translate(50%, -50%);
    z-index: 1;
}

.inset-text {
    background-color: #f0f0f0;
    color: #666;
    text-shadow: 
        -1px -1px 1px rgba(255,255,255,0.8),
        1px 1px 1px rgba(0,0,0,0.3);
    padding: 0.5rem;
    border-radius: 8px;
    box-shadow: 
        inset 2px 2px 5px rgba(0,0,0,0.2),
        inset -2px -2px 5px rgba(255,255,255,0.8);
}
</style>
