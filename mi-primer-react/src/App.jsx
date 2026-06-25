import { useState, useEffect } from 'react'

export default function App() {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, [])

  if (!pokemon) return <p>Cargando...</p>

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  )
}