import { Link } from 'react-router-dom';
import { players } from '../data/players';
import PlayerCard from '../components/PlayerCard';

// Jugadores destacados para la home
const featured = players.filter(p => [8, 5, 9, 7].includes(p.id));

function Home() {
  return (
    <div className="page-wrapper">
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__stripes" />
        <p className="hero__eyebrow">Més que un club</p>
        <h1 className="hero__title">
          FC <span className="highlight-red">Bar</span><span className="highlight-blue">ça</span>
        </h1>
        <p className="hero__subtitle">
          La plantilla blaugrana — temporada 2024–25
        </p>
        <div className="stripe-divider" style={{ maxWidth: 160, margin: '0 auto 48px' }} />
      </section>

      <section className="container" style={{ paddingBottom: 80 }}>
        <h2 className="section-title">Estrellas Destacadas</h2>
        <p className="section-subtitle">Los jugadores que marcan diferencia esta temporada</p>

        <div className="featured-grid">
          {featured.map((player, i) => (
            <div
              key={player.id}
              style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'both' }}
              className="animate-fade-in-up"
            >
              <PlayerCard player={player} />
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/jugadores" className="btn-primary" style={{ display: 'inline-block' }}>
            Ver Plantilla Completa →
          </Link>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid var(--card-border)', padding: '32px 0', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          Barça Blog · Ejercicio 4 React · Hecho con corazón blaugrana
        </p>
        <div className="stripe-divider" style={{ maxWidth: 120, margin: '12px auto 0' }} />
      </footer>
    </div>
  );
}

export default Home;
