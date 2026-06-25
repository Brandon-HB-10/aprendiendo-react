import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Inicio() {
  return <h1>Página de Inicio</h1>
}

function About() {
  return <h1>Sobre mí</h1>
}

function Contacto() {
  return <h1>Contacto</h1>
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/contacto">Contacto</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}