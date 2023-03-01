import React from 'react'
import './login.css'
import { useState } from 'react'
import { useContext } from 'react';
import UserContext from '../UserContext';

function Login() {

  const {user,setUser} = useContext(UserContext);

  const [loginUsername, setLoginUsername]=useState("");
  const [loginPassword, setLoginPassword]=useState("");
  const [errormessage, setErrormessage]=useState("");

  const [login, setLogin]=useState(false);

  //for new registering form
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [photoUrl, setPhotoUrl]=useState("");
  const [password, setPassword]=useState("");

  //creating db
  (localStorage.getItem("user"))?"":localStorage.setItem("user",JSON.stringify([]));

  const handleLogin=()=>{

      if(loginUsername===""){
        setErrormessage("* Email Required");
      }else if(loginPassword===""){
        setErrormessage("* Password Required");
      }else{

      } 
      const allUser=JSON.parse(localStorage.getItem("user"));
      allUser.forEach(element => {
        if(element.email===loginUsername && element.password==loginPassword){
          setErrormessage("");
          localStorage.setItem("auth",JSON.stringify(element));
          setUser(element);
          setLoginUsername("");
          setLoginPassword("");
        }
      });
      
        setErrormessage("* Email or password incorrect");
  }

  const handleRegister=()=>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(name===""){
      setErrormessage("* Enter name");
    }else if(email===""){
      setErrormessage("* Enter email");
    }else if(!email.match(validRegex)){
      setErrormessage("* Enter valid email");
    }else if(photoUrl===""){
      setErrormessage("* Enter photo url");
    }else if(password===""){
      setErrormessage("* Enter password");
    }else if(password.length<6){
      setErrormessage("* Password should at least 6 character");
    } else {
      const db=localStorage.getItem("user");
      const adduser={
        "name":name, 
        "email":email, 
        "photoUrl":photoUrl, 
        "password":password
      }
      const parsedArray = JSON.parse(db);
      parsedArray.push(adduser);
      localStorage.setItem("user", JSON.stringify(parsedArray));

      //on reloading login continues 
      localStorage.setItem("auth",JSON.stringify(adduser));

      setUser(adduser);
      console.log(user);
      setName("");
      setEmail("");
      setPhotoUrl("");
      setPassword("");
      setErrormessage("");
      alert("Successfully Registered");
    }

  }
  return (
  <>
      <div className='login-container'>

        <div className='login-field'>

          <div>
            <img className='linkedin-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpKZPh1xDp9LCRizXgvUHJ6byPukbeexZR0w&usqp=CAU'/>
          </div>
        {
          login?
          <div>
                <div className='error-message'>{errormessage}</div>
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
              <div className='button-container'>
                <button id='login-button' 
                  className='login-button' 
                  onClick={handleLogin}>
                  Login
                </button>
              </div>
              <div>
                <p>New user? <span className='span-click' onClick={()=>{
                  setLogin(false); 
                  setErrormessage("");
                  setEmail("");
                  setName("");
                  setPhotoUrl("");
                  setPassword("");
                  setLoginUsername("");
                  setLoginPassword("");
                  }}>Sign up</span></p>
              </div>
        </div>
         
         :
          
        <div>
            <div className='error-message'>{errormessage}</div>
            <div>
            <input id='register-name' 
            className='login' 
            type={"text"} 
            placeholder='Name'
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            />
        </div>
        <div>
            <input id='register-email' 
            className='login' 
            type={"email"} 
            placeholder='Email'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            />
        </div>
        <div>
            <input id='register-url' 
            className='login' 
            type={"text"} 
            placeholder='Photo URL'
            value={photoUrl}
            onChange={(e)=>{setPhotoUrl(e.target.value)}}
            />
        </div>
        <div>
            <input id='register-password' 
            className='login' 
            type={"password"} 
            placeholder='Password'
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            />
        </div>
        <div>
          <button id='register-button' 
            className='login-button' 
            onClick={handleRegister}>
            Sign Up
          </button>
        </div>
        <div>
          <p>Already have an account? <span className='span-click' onClick={()=>{
             setLogin(true);
             setErrormessage("");
             setEmail("");
             setName("");
             setPhotoUrl("");
             setPassword("");
             setLoginUsername("");
             setLoginPassword("");
             }}>Sign In</span></p>
        </div>
      </div>
    }    
        
    </div> 
  </div> 


  </>
  )
}

export default Login