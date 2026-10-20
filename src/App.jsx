import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const asignatura = 'Servicios Web'
  const categorias = ['Hardware', 'Software', 'Redes']

  return (
      <main>
        <h1>Sistema de Soporte Técnico</h1>
        <h2>Mi primera aplicación con React</h2>
        <h3>Asignatura: {asignatura}</h3>
        <p>Bienvenido al sistema de solicitudes.</p>

        <h4>Categorías de soporte</h4>
        <ul>
          {categorias.map(c => (
              <li key={c}>{c}</li>
          ))}
        </ul>

        <button onClick={() => alert('Bienvenido a React')}>
          Comenzar
        </button>
        <button onClick={() => alert('Elige una categoría para registrar tu solicitud')}>
          Ver categorías
        </button>
      </main>
  )
}

export default App