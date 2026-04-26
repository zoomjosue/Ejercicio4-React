import PropTypes from 'prop-types';

/**
 * StatCard — Tarjeta de estadística individual.
 */
function StatCard({ value, label, color = 'gold' }) {
  const colorMap = {
    gold: 'var(--barca-gold)',
    blue: 'var(--barca-blue)',
    red: 'var(--barca-red)',
  };

  return (
    <div className="stat-card">
      <div
        className="stat-card__number"
        style={{ color: colorMap[color] ?? colorMap.gold }}
      >
        {value}
      </div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
}

StatCard.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['gold', 'blue', 'red']),
};

export default StatCard;
