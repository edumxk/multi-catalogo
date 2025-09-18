// src/pages/Favoritos.tsx
import { useFavorites } from '../contexts/FavoritesContext';
import Card from '../components/Card';

function Favoritos() {
  // Acessamos a lista global de favoritos com nosso hook
  const { favorites } = useFavorites();

  return (
    <div>
      <h2>Página de Favoritos</h2>

      {/* Verificamos se a lista de favoritos está vazia */}
      {favorites.length === 0 ? (
        <p>Você ainda não selecionou nenhum item como favorito.</p>
      ) : (
        <div className="card-grid">
          {/* Se não estiver vazia, mapeamos e renderizamos um Card para cada favorito */}
          {favorites.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;