<template>
    <section class="mt-20">

        <div class="min-h-screen flex">
            <!-- Left side - Image -->
            <div class="w-1/2 relative">
                <img 
                    :src="selfie" 
                    alt="David Welsh" 
                    class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-black/10"></div>
            </div>

            <!-- Right side - Content -->
            <div class="w-1/2 flex items-center justify-center px-16">
                <div class="max-w-xl">
                    <h1 class="text-5xl font-merriweather font-bold mb-6">
                        Hi, I'm David,
                    </h1>
                    <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                        I'm a seasoned Full Stack Developer and AI Evangelist, with a passion for 
                        solving real world problems and using technology to improve people's lives. 
                    </p>
                    <div class="icons flex gap-6 items-center">
                        <a 
                            href="https://www.linkedin.com/in/your-linkedin" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                            </svg>
                        </a>
                        
                        <a 
                            href="https://github.com/your-github" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                            </svg>
                        </a>
                        
                        <NuxtLink 
                            to="/contact"
                            class="text-gray-700 hover:text-green-600 transition-colors duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                        </NuxtLink>
                        
                        <button 
                            @click="downloadResume"
                            class="text-gray-700 hover:text-red-600 transition-colors duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import selfie from '@/assets/img/selfie.png';

const downloadResume = () => {
    const resumeUrl = '/path-to-your-resume.pdf';
    window.open(resumeUrl, '_blank');
}
</script>

<style scoped>
.font-merriweather {
    font-family: 'Merriweather', serif;
}

.font-roboto {
    font-family: 'Roboto', sans-serif;
}

.animate-letter {
    opacity: 0;
    animation: letterFadeIn 1s ease-in forwards;
}

@keyframes letterFadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>