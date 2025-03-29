import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  // Fetch Pokemon data
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()
  return data
})