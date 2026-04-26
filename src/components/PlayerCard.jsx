import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useApp } from '../context/AppContext';

/**
 * PlayerCard — Tarjeta reutilizable de jugador del FC Barcelona.
 */
function PlayerCard({ player, compact = false }) {
  const { state, toggleFavorite } = useApp();
  const isFav = state.favorites.includes(player.id);

  const handleFav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(player.id);
  };

  return (
    <Link to={`/jugadores/${player.id}`} style={{ display: 'block' }}>
      <article className="player-card animate-fade-in-up">
        
        <div className="player-card__image-wrapper">
          <img
            src={player.image}
            alt={`Foto de ${player.name}`}
            loading="lazy"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&size=400&background=004d98&color=fff&bold=true`;
            }}
          />
          <span className="player-card__number">#{player.number}</span>
          <button
            className={`player-card__fav${isFav ? ' active' : ''}`}
            onClick={handleFav}
            aria-label={isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
            title={isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
          >
            {isFav ? '❤️' : '🤍'}
          </button>
        </div>

        
        <div className="player-card__body">
          <p className="player-card__position">{player.flag} {player.position}</p>
          <h3 className="player-card__name">{player.name}</h3>

          {!compact && (
            <div className="player-card__stats-row">
              <div className="player-card__stat">
                <strong>{player.goals}</strong>
                <span>Goles</span>
              </div>
              <div className="player-card__stat">
                <strong>{player.assists}</strong>
                <span>Asist.</span>
              </div>
              <div className="player-card__stat">
                <strong>{player.appearances}</strong>
                <span>Part.</span>
              </div>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}

PlayerCard.propTypes = {
  /** Jugador con todos sus datos */
  player: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    nationality: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    goals: PropTypes.number.isRequired,
    assists: PropTypes.number.isRequired,
    appearances: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
  }).isRequired,
  /** Oculta estadísticas */
  compact: PropTypes.bool,
};

export default PlayerCard;
