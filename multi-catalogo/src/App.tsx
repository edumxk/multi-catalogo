// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Animais from './pages/Animais';
import Livros from './pages/Livros';
import Pessoas from './pages/Pessoas';
import Favoritos from './pages/Favoritos';
import './App.css'; // Vamos limpar este arquivo também

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          {/* A rota da página inicial ("/") vai renderizar a página de Animais */}
          <Route path="/" element={<Animais />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/pessoas" element={<Pessoas />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </main>
    </>
  );
}

export default App;