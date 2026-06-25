import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex gap-6">
      <Link to="/" className="hover:text-blue-400">Inicio</Link>
      <Link to="/about" className="hover:text-blue-400">About</Link>
      <Link to="/proyectos" className="hover:text-blue-400">Proyectos</Link>
    </nav>
  )
}

function Inicio() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800">Hola, soy Brandon 👋</h1>
        <p className="text-xl text-gray-500 mt-4">Desarrollador Fullstack en construcción 🚀</p>
        <Link to="/proyectos" className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Ver proyectos
        </Link>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre mí</h2>
        <p className="text-gray-600">Estudiante de Ingeniería en TICs aprendiendo desarrollo web fullstack con React, FastAPI y PostgreSQL.</p>
      </div>
    </div>
  )
}

function Proyectos() {
  const proyectos = [
    { nombre: 'Tres en Raya', tech: 'React' },
    { nombre: 'Sistema CRUD', tech: 'Flask + PostgreSQL' },
    { nombre: 'App Pokémon', tech: 'React + API' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Mis Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {proyectos.map((p, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-gray-800">{p.nombre}</h3>
            <p className="text-blue-500 mt-2">{p.tech}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/about" element={<About />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </BrowserRouter>
  )
}