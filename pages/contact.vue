<template>
    <section class="min-h-screen flex flex-col md:flex-row">
        <!-- Left side - Letter Image -->
        <div class="w-full md:w-2/5 h-[40vh] md:h-[80vh] mt-20 relative">
            <img 
                :src="letter" 
                alt="Letter" 
                class="w-full h-full object-cover"
            />
        </div>

        <!-- Right side - Content -->
        <div class="w-full md:w-3/5 flex items-center justify-center p-8 md:p-16">
            <div class="max-w-md text-center">
                <h3 class="text-3xl md:text-4xl font-merriweather mb-6">
                    I'd love to work with you to bring your ideas to life.
                </h3>
                <p class="text-lg text-gray-600">
                    <a 
                        href="mailto:dwelsh2@clemson.edu" 
                        class="text-sky-600 hover:text-sky-700 transition-colors duration-300"
                    >
                        Email me
                    </a>
                    or give me a call at 
                    <a 
                        href="tel:248-672-1219" 
                        class="text-sky-600 hover:text-sky-700 transition-colors duration-300"
                    >
                        248-672-1219
                    </a>    
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import letter from '@/assets/img/letter.png'
</script>