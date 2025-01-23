<template>
    <div class="container mx-auto max-w-3xl">
        <header class="flex justify-between items-center mt-5 shadow-lg p-4 rounded-lg w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">

            <div class="flex items-center space-x-12">
                <div>
                    <NuxtLink to="/" class="text-xl font-semibold p-2 hover:text-pink-600">CV</NuxtLink>
                </div>

                <Menu />
            </div>

        </header>


        <main class="p-2 mt-10">
            <slot />
        </main>
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
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ]
})
</script>