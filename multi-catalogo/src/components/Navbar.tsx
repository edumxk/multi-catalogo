// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Animais</Link></li>
        <li><Link to="/livros">Livros</Link></li>
        <li><Link to="/pessoas">Pessoas</Link></li>
        <li><Link to="/favoritos">Favoritos</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;