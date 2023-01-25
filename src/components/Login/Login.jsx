import React from 'react'
import './Login.css'
import { useState } from 'react'
import Header from '../Header/Header';
import Main from '../Main/Main'
import Footer from '../Footer/Footer';

function Login() {

  const [loginUsername, setLoginUsername]=useState("");
  const [loginPassword, setLoginPassword]=useState("");
  const [login, setLogin]=useState(false);
  const [errormessage, setErrormessage]=useState("");

  const handleLogin=()=>{
      if(loginUsername===""){
        setErrormessage("* Enter email");
      }else if(loginPassword===""){
        setErrormessage("* Enter password");
      }else if(loginUsername==="shantesh18"&&loginPassword==="12345678"){
        setLogin(true);
       }else{
        setErrormessage("* Email or password incorrect");
       }
  }
  return (
  <>
    {
    login?
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
    :
    <div id='login-container'>
      <div>
        <div>
          <h1 id='login-header'>Login</h1>
        </div>
        <div id='error-message'>{errormessage}</div>
        <div>
          <input id='login-username' 
          className='login' 
          type={"email"} 
          placeholder='Email'
          value={loginUsername}
          onChange={(e)=>setLoginUsername(e.target.value)}
          />
        </div>
        <div>
        <input id='login-password' 
        className='login' 
        type={"password"} 
        placeholder='Password'
        value={loginPassword}
        onChange={(e)=>setLoginPassword(e.target.value)}
        />
        </div>
        <div>
          <button id='login-button' 
            className='login' 
            onClick={handleLogin}>
            Login
          </button>
        </div>
        <div>
          <p className='login'>New user? <a href="">Sign up</a></p>
        </div>
      </div>
    </div>
    }
    
  </>
  )
}

export default Login