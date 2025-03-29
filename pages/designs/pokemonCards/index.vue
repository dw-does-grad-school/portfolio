<script setup>
const { data: pokemonData } = await useFetch('/api/pokemon')
const getPokemonId = (url) => url.split('/').slice(-2)[0]
</script>

<template>
  <div class="container mx-auto p-2">
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
      <div v-for="pokemon in pokemonData?.results" 
           :key="pokemon.name" 
           class="bg-white rounded p-2 shadow hover:shadow-md">
        <img 
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(pokemon.url)}.png`"
          :alt="pokemon.name"
          class="w-16 h-16 mx-auto"
        />
        <p class="text-sm text-center capitalize truncate">{{ pokemon.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>