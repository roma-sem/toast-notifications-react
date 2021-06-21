import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Toast.css';

Toast.defaultProps = {
  position: 'bottom-right'
}

Toast.propTypes = {
  toastList: PropTypes.array.isRequired,
  position: PropTypes.string
}

export default function Toast(props) {
  const { 
    toastList, 
    position
  } = props;

  return (
    <div className={`notification-container ${position}`}>
      {
        toastList?.map((toast, i) => {
          return (
            <div 
              className={`notification toast ${position}`} 
              style={{ backgroundColor: toast.backgroundColor }}
              key={`toast-${i}`}
            >
              <button>X</button>
              <div className="notification-image">
                  <img src={toast.icon} alt="icon" />
              </div>
              <div>
                  <p className="notification-title">{toast.title}</p>
                  <p className="notification-message">{toast.message}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}