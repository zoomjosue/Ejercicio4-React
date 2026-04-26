import { useNavigate } from 'react-router-dom';
import { players, positions } from '../data/players';
import PlayerCard from '../components/PlayerCard';
import { useApp } from '../context/AppContext';

function Players() {
  const navigate = useNavigate();
  const { state, setFilter, setSearch } = useApp();
  const { filterPosition, searchQuery } = state;

  // Filtrado y búsqueda
  const filtered = players.filter(p => {
    const matchPosition = filterPosition === 'Todos' || p.position === filterPosition;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase())
      || p.nationality.toLowerCase().includes(searchQuery.toLowerCase());
    return matchPosition && matchSearch;
  });

  // Botón elemento aleatorio 
  const handleRandom = () => {
    const random = players[Math.floor(Math.random() * players.length)];
    navigate(`/jugadores/${random.id}`);
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="players-header">
          <h1 className="section-title" style={{ fontSize: '2.8rem' }}>
            La Plantilla
          </h1>
          <p className="section-subtitle">
            {players.length} jugadores · Temporada 2024–25
          </p>
          <div className="stripe-divider" style={{ width: 120, marginBottom: 32 }} />

          <div className="controls">
            <input
              type="text"
              className="search-input"
              placeholder="Buscar jugador o nacionalidad..."
              value={searchQuery}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Buscar jugador"
            />

            <button
              className={`filter-btn${filterPosition === 'Todos' ? ' active' : ''}`}
              onClick={() => setFilter('Todos')}
            >
              Todos
            </button>
            {positions.map(pos => (
              <button
                key={pos}
                className={`filter-btn${filterPosition === pos ? ' active' : ''}`}
                onClick={() => setFilter(pos)}
              >
                {pos}
              </button>
            ))}

            <button className="random-btn" onClick={handleRandom}>
              Aleatorio
            </button>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="players-grid">
            {filtered.map((player, i) => (
              <div
                key={player.id}
                style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}
                className="animate-fade-in-up"
              >
                <PlayerCard player={player} />
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results__icon">⚽</div>
            <p style={{ fontSize: '1.1rem', marginBottom: 8 }}>No se encontraron jugadores</p>
            <p style={{ fontSize: '0.9rem' }}>Prueba con otro término de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Players;
