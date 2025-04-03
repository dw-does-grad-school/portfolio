<template>
    <div class="min-h-screen bg-zinc-50">
        <NavBar />
        <slot />
        <Footer />
    </div>  
</template>

<script setup>
import NavBar from '../components/navBar.vue';

useHead({
    titleTemplate: 'Portfolio of David Welsh: Software Engineer and UI Developer', 
    link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap',
      crossorigin: ''
    },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
        crossorigin: ''
    },
    // {
    //     rel: 'stylesheet',
    //     href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',
    //     crossorigin: ''
    // }, 
    // {
    //     rel: 'stylesheet',
    //     href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
    //     crossorigin: ''
    // },
  ]
})
</script>