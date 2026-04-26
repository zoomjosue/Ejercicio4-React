import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useApp } from '../context/AppContext';


function BarcaCrest({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L90 20 L90 55 Q90 80 50 95 Q10 80 10 55 L10 20 Z" fill="#004d98" stroke="#edbb00" strokeWidth="3"/>
      <path d="M50 5 L90 20 L90 55 Q90 80 50 95" fill="#a50044"/>
      <text x="50" y="62" textAnchor="middle" fontFamily="Georgia" fontWeight="bold" fontSize="28" fill="white">FCB</text>
    </svg>
  );
}

BarcaCrest.propTypes = {
  size: PropTypes.number,
};

function Navbar() {
  const { state, toggleTheme } = useApp();
  const favCount = state.favorites.length;

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        
        <NavLink to="/" className="navbar__logo">
          <BarcaCrest size={38} className="navbar__logo-crest" />
          <span>
            <span className="red">Bar</span>
            <span className="blue">ça</span>
            {' '}Blog
          </span>
        </NavLink>

        
        <div className="navbar__links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/jugadores"
            className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
          >
            Plantilla
          </NavLink>
        </div>

        
        <div className="navbar__actions">
          <div className="relative">
            <NavLink
              to="/jugadores"
              className="btn-icon"
              title="Favoritos"
              style={{ fontSize: '1rem' }}
            >
              ❤️
            </NavLink>
            {favCount > 0 && (
              <span className="fav-badge">{favCount}</span>
            )}
          </div>
          <button
            className="btn-icon"
            onClick={toggleTheme}
            title="Cambiar tema"
            aria-label="Cambiar tema claro/oscuro"
          >
            {state.theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
