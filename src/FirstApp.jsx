import PropTypes from 'prop-types';

export const FirstApp = ({ name, saludos }) => {
  return <>{name != null ? name : saludos}</>;
};

FirstApp.propTypes = {
  name: PropTypes.string.isRequired,
  saludos: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  name: 'Bienvenido, cliente',
  // saludos: 'Binevenidos, estimados clientes',
}