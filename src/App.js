/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import Dashboard from "./tools.js"
const root = ReactDOM.createRoot(document.getElementById("root"))

function App() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (result) {
      loadStart();
    }
  }, [result]);

  function loadStart(){
    const lineLoad = document.getElementById("loadLine")
    setTimeout(() => {
      lineLoad.classList.add("loadd")
      setTimeout(() => {
        lineLoad.classList.remove("loadLine")
        root.render(
          <React.StrictMode>
            <Dashboard/>
          </React.StrictMode>
        )
      }, 10000);
    }, 3000);
  }

  function Auth() {
    setLoading(true);
    fetch('https://datajs-fordashboard.onrender.com/api/v1.0/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          __login: login,
          __password: password,
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setResult(data.status);
    })
    .catch(error => {
        console.error('Ошибка при получении данных: ', error);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  return (
    <div className='body1'>
      <div className='back1' id='back1'>
      <div className='Box' id='lbox'>
        <span className='Title'>login</span>
          <div className='login_div'>
          <input type='text' required placeholder='' id='login' className='login' onChange={(e) => setLogin(e.target.value)}>
          </input>
          <span className='line1'></span>
          <span className='l'>Username</span>
          </div>

          <div className='pass_div'>
          <input type='password' required placeholder='' id='password' className='pass' value={password} onChange={(e) => setPassword(e.target.value)}>
          </input>
          <span className='line2'></span>
          <span className='p'>Password</span>
          </div>
          <button className='loginbtn' onClick={Auth} disabled={loading} >{loading ? 'Loading...' : 'Enter'}</button>
      </div>
      </div>
      <div className='loadLine' id='loadLine' ></div>
    </div>
  );
}
export default App;