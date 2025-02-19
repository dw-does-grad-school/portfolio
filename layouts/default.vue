<template>
    <div class="bg-white">
        <header class="absolute top-0 left-0 right-0 z-10 mt-5 p-4 bg-base-100/80 backdrop-blur-sm shadow-md mx-4 rounded-xl">
            <div class="flex items-center justify-end w-full">
                <Menu />
            </div>
        </header>

        <main>
            <slot />
        </main>
        <footer>
            <BaseOfPage />
        </footer>
    </div> 
</template>

<script setup>
useHead({
    titleTemplate: 'David.Dev', 
    link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Anton&display=swap',
      crossorigin: ''
    },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap',
        crossorigin: ''
    },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',
        crossorigin: ''
    }, 
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
        crossorigin: ''
    },
  ]
})
</script>

<style scoped>
body {
    font-family: 'Inter', sans-serif;
}
.focus-text {
    font-family: 'Bebas Neue', sans-serif;
}
</style>