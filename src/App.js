import React, { useState } from 'react';
import './App.css';
import Toast from './components/Notifcations/Toast';
import checkIcon from './assets/check.svg';
import errorIcon from './assets/error.svg';
import infoIcon from './assets/info.svg';
import warningIcon from './assets/warning.svg';
import Button from './components/Button';

const BUTTON_PROPS = [
  {
    id: 1,
    type: 'success',
    className: 'success',
    label: 'Success'
  },
  {
    id: 2,
    type: 'danger',
    className: 'danger',
    label: 'Danger'
  },
  {
    id: 3,
    type: 'info',
    className: 'info',
    label: 'Info'
  },
  {
    id: 4,
    type: 'warning',
    className: 'warning',
    label: 'Warning'
  },
];



function App() {
  const [list, setList] = useState([]);
  // const [position, setPosition] = useState();
  let toastProps = null;
  
  const showToast = type => {
    const id = Math.floor((Math.random() * 100) + 1);

    switch (type) {
      case "success":
        toastProps = {
          id,
          title: "Success",
          message: "This is success toast component",
          backgroundColor: '#5cb85c',
          icon: checkIcon
        }
        break;
      case "danger":
        toastProps = {
          id,
          title: 'Danger',
          message: 'This is an error toast component',
          backgroundColor: '#d9534f',
          icon: errorIcon
        }
        break;
      case "info":
        toastProps = {
          id,
          title: 'Info',
          message: 'This is an info toast component',
          backgroundColor: '#5bc0de',
          icon: infoIcon
        }
        break;
      case "warning":
        toastProps = {
          id,
          title: 'Warning',
          message: 'This is a warning toast component',
          backgroundColor: '#f0ad4e',
          icon: warningIcon
        }
        break;
      default:
        setList([]);
    }
    setList([...list, toastProps]);
    console.log('list = ', list);
  }
  
  return (
    <div className="app">
      <div className="app-header">
        <p>React Toast Notifications</p>
        <div className="toast-buttons">
          {
            BUTTON_PROPS.map(e => 
              <Button 
                key={e.id}
                className={e.className}
                label={e.label}
                handleClick={() => showToast(e.type)}
              />
            )
          }
        </div>

        <Toast 
          toastList={list} 
          position="bottom-right"
        />
      </div>
    </div>
  );
}

export default App;
