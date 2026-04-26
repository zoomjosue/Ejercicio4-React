import { useParams, useNavigate, Link } from 'react-router-dom';
import { getPlayerById, players } from '../data/players';
import { useApp } from '../context/AppContext';
import StatCard from '../components/StatCard';
import PlayerCard from '../components/PlayerCard';
import NotFound from './NotFound';

function PlayerDetail() {
  const { id } = useParams();          
  const navigate = useNavigate();
  const { state, toggleFavorite } = useApp();

  const player = getPlayerById(id);

  // Si no existe el jugador → 404
  if (!player) return <NotFound />;

  const isFav = state.favorites.includes(player.id);

  // Jugadores relacionados 
  const related = players
    .filter(p => p.position === player.position && p.id !== player.id)
    .slice(0, 3);

  return (
    <div className="page-wrapper">
      <div className="container">
        <nav style={{ padding: '20px 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)' }}>Inicio</Link>
          {' · '}
          <Link to="/jugadores" style={{ color: 'var(--text-secondary)' }}>Plantilla</Link>
          {' · '}
          <span style={{ color: 'var(--barca-gold)' }}>{player.name}</span>
        </nav>

        <div className="detail-hero">
          <div className="detail-image-wrapper">
            <img
              src={player.image}
              alt={`Foto de ${player.name}`}
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&size=600&background=004d98&color=fff&bold=true&length=2`;
              }}
            />
            <div className="detail-jersey">#{player.number}</div>
          </div>

          <div className="detail-content animate-fade-in-up">
            <p className="detail-eyebrow">
              {player.flag} {player.nationality} · {player.position}
            </p>
            <h1 className="detail-name">{player.name}</h1>
            <p className="detail-description">{player.description}</p>

            <div className="detail-stats-grid">
              <StatCard value={player.goals} label="Goles" color="red" />
              <StatCard value={player.assists} label="Asistencias" color="blue" />
              <StatCard value={player.appearances} label="Partidos" color="gold" />
            </div>

            <div className="detail-info-grid">
              <div className="info-item">
                <span className="info-item__label">Edad</span>
                <span className="info-item__value">{player.age} años</span>
              </div>
              <div className="info-item">
                <span className="info-item__label">Dorsal</span>
                <span className="info-item__value">#{player.number}</span>
              </div>
              <div className="info-item">
                <span className="info-item__label">En el club desde</span>
                <span className="info-item__value">{player.joined}</span>
              </div>
              <div className="info-item">
                <span className="info-item__label">Contrato hasta</span>
                <span className="info-item__value">{player.contractUntil}</span>
              </div>
              <div className="info-item">
                <span className="info-item__label">Valor de mercado</span>
                <span className="info-item__value" style={{ color: 'var(--barca-gold)' }}>
                  {player.marketValue}
                </span>
              </div>
              <div className="info-item">
                <span className="info-item__label">Nacionalidad</span>
                <span className="info-item__value">{player.flag} {player.nationality}</span>
              </div>
            </div>

            <div className="detail-actions">
              <button
                className="btn-primary"
                onClick={() => toggleFavorite(player.id)}
              >
                {isFav ? '❤️ En favoritos' : '🤍 Añadir a favoritos'}
              </button>
              <button
                className="btn-outline"
                onClick={() => navigate(-1)}
              >
                ← Volver
              </button>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section style={{ paddingBottom: 64 }}>
            <div className="stripe-divider" style={{ marginBottom: 32 }} />
            <h2 className="section-title" style={{ marginBottom: 8 }}>
              Misma Posición
            </h2>
            <p className="section-subtitle">Otros {player.position.toLowerCase()}s del equipo</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
              {related.map(p => (
                <PlayerCard key={p.id} player={p} compact />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default PlayerDetail;
