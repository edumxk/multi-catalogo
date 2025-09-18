// src/pages/Livros.tsx
import Card from '../components/Card';
import db from '../data/dados.json';
import type { Livro } from '../types/data'; // 1. Importe o tipo

function Livros() {
    const livros = db.livros as Livro[];

  return (
    <div>
      <h2>Página de Livros</h2>
      <div className="card-grid">
        {livros.map(livro => (
          <Card key={livro.id} item={livro} />
        ))}
      </div>
    </div>
  );
}

export default Livros;