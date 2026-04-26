import { Link, useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <div className="not-found">
        <div className="not-found__number">404</div>
        <h2 className="not-found__title">Fuera del campo</h2>
        <p className="not-found__subtitle">
          Este jugador o página no existe en nuestra plantilla.
          El balón ha salido por la línea de fondo.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-primary">
            Volver al inicio
          </Link>
          <button className="btn-outline" onClick={() => navigate(-1)}>
            ← Página anterior
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
