import PropTypes from 'prop-types';

function Button({ color, text, onClick }) {
  return (
    <button onClick={onClick} type="button" style={{ backgroundColor: color }} className="btn">{text}</button>
  );
}

Button.defaultProps = {
  color: 'steelBlue',
  onClick: () => {},
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
