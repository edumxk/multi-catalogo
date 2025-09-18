// src/pages/Animais.tsx
import Card from '../components/Card';
import db from '../data/dados.json'; // Importa nosso banco de dados local
import type { Animal } from '../types/data'; // 1. Importe o tipo

function Animais() {
    const animais = db.animais as Animal[];

  return (
    <div>
      <h2>Página de Animais</h2>
      <div className="card-grid">
        {animais.map(animal => (
          // Para cada animal na lista, renderiza um componente Card
          // A 'key' é essencial para o React otimizar a renderização de listas
          <Card key={animal.id} item={animal} />
        ))}
      </div>
    </div>
  );
}

export default Animais;