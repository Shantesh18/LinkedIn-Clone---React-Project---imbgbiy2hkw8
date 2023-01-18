import React from 'react'
import '../styles/App.css';
import Header from './Header/Header';
import Main from './Main/Main'
import Footer from './Footer/Footer';
const App = () => {


  return (
    <div id="main">
      <Header/>
      <Main/>
      <Footer/>
      <h1>Hello LinkedIn Clone</h1>
    </div>
  )
}


export default App;
