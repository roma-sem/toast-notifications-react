import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func
}

function Button(props) {
  const { label, className, handleClick } = props;


  return (
    <button
      className={className}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default Button;
