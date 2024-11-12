import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import Dashboard from "./tools.js"
const root = ReactDOM.createRoot(document.getElementById("root"))

function App() {
  function loadStart(){
    let lineLoad = document.getElementById("loadLine")
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
    let login = document.getElementById("login")
    let pass = document.getElementById("password")
    let loginBox = document.getElementById("lbox")
    let back1 = document.getElementById("back1")
    let lineLoad = document.getElementById("loadLine")
    loginBox.style.transition = "2s ease-in all"

      let result = false
      fetch('https://datajs-fordashboard.onrender.com/api/v1.0/auth', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            __login: login.value,
            __password: pass.value,
              
          })
      })
      .then(response => response.json())
      .then(data => {
          console.log(data);
          if (data.status == true){ result = true } else { result = false }
          if (result == true) {
            loginBox.style.opacity = 0
            setTimeout(function(){
              back1.style.opacity = 0
            } , 100);
            loadStart()
        }else {
    
        }
      })
      .catch(error => {
          console.error('Ошибка при получении данных: ', error);
      });
      console.log(result)
  }
  return (
    <div className='body1'>
      <div className='back1' id='back1'>
      <div className='Box' id='lbox'>
        <span className='Title'>login</span>
          <div className='login_div'>
          <input type='value' required placeholder='' id='login' className='login'>
          </input>
          <span className='line1'></span>
          <span className='l'>Username</span>
          </div>

          <div className='pass_div'>
          <input type='password' required placeholder='' id='password' className='pass'>
          </input>
          <span className='line2'></span>
          <span className='p'>Password</span>
          </div>
          <button className='loginbtn' onClick={Auth} >Enter</button>
      </div>
      </div>
      <div className='loadLine' id='loadLine' ></div>
    </div>
  );
}
export default App;
