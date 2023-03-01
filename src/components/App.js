import React from 'react'
import '../styles/App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Login from './Login/Login';
import Feed from './Feed/feed';
import Widget from './Widget/Widget';
import { useState, useEffect } from 'react';
import UserContext from './UserContext';
import { BrowserRouter, Route, Link,Routes } from 'react-router-dom';


const App = () => {

  const [user, setUser]=useState(null);

  useEffect(() => {
    localStorage.getItem("auth") ?
        setUser(JSON.parse(localStorage.getItem("auth")))
         :
        "";
        console.log(user);
  }, [])
  


  return (
    <UserContext.Provider value={{user,setUser}}>
       <div id="main">
         <BrowserRouter>
          { !user ? ( <>
                       <Login/>
                       </>
                       ):(
              <div>
                {/*console.log(user)*/}
              <Header/>
              <div className='app__body'>
              <Sidebar/>
              <Feed/>
              <Widget/>
              </div>
            </div>  
          )
          }
           
        </BrowserRouter>

        </div>
    </UserContext.Provider>
    
  )
}


export default App;
