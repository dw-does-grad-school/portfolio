<template>
    <p>
        Take a look at my Github Projects!
    </p>
    <section v-if="pending">Loading... </section>
    <section v-else-if="error">Something went wrong... Try again!</section>
    <section v-else>
        <ul class="grid grid-cols-1 gap-4">
            <li v-for="repo in data" :key="repo.id" class="border border-slate-200 rounded-md p-4 shadow-md hover:shadow-lg hover:bg-slate-100 font-mono transition-shadow duration-300">
                <a :href="repo.html_url" target="_blank">
                   <div class="flex items-center justify-between">
                    <div class="font-semibold">{{ repo.name }}</div>
                    <div class="text-sm text-slate-500">{{ repo.description }}</div>
                    <div class="text-sm text-slate-500">{{ repo.language }}</div>
                   </div>
                </a>
            </li>
        </ul>
    </section>
</template>

<script setup>
const {error, pending, data } = await useFetch('https://api.github.com/users/dw-does-grad-school/repos'); 

const repos = data.value.filter(repo => repo.description)
    .sort((a,b) =>{
        return new Date(b.updated_at) - new Date(a.updated_at)
    })
</script>