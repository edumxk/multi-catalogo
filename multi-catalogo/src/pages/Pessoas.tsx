// src/pages/Pessoas.tsx
import Card from '../components/Card';
import db from '../data/dados.json';
import type { Pessoa } from '../types/data'; // 1. Importe o tipo

function Pessoas() {
    const pessoas = db.pessoas as Pessoa[];

  return (
    <div>
      <h2>Página de Pessoas</h2>
      <div className="card-grid">
        {pessoas.map(pessoa => (
          <Card key={pessoa.id} item={pessoa} />
        ))}
      </div>
    </div>
  );
}

export default Pessoas;