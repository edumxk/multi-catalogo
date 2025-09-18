// src/components/Card.tsx
import { useFavorites } from '../contexts/FavoritesContext';
import type { DataItem } from '../types/data';
import './Card.css';

interface CardProps {
  item: DataItem;
}

function Card({ item }: CardProps) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some(fav => fav.id === item.id);

  const renderItemDetails = () => {
    switch (item.tipo) {
      case 'animal':
        return <p><strong>Espécie:</strong> {item.especie}</p>;
      case 'livro':
        return <p><strong>Autor:</strong> {item.autor}</p>;
      case 'pessoa':
        return <p><strong>Profissão:</strong> {item.profissao}</p>;
      // A LINHA QUE RESOLVE O PROBLEMA
      default:
        return null; 
    }
  };

  const title = item.tipo === 'livro' ? item.titulo : item.nome;

  return (
    <div className="card">
      <img src={item.imagem} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {renderItemDetails()} {/* Agora esta chamada é 100% segura */}
        <button
          className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
          onClick={() => toggleFavorite(item)}
        >
          {isFavorite ? 'Remover Favorito ❤️' : 'Favoritar ⭐'}
        </button>
      </div>
    </div>
  );
}

export default Card;