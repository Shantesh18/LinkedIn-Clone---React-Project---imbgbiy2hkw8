import React from 'react'
import './Header.css'

function Header() {
  return (
    <div id="header">
        <nav className=''>
            <div >
                <img id='linkedInLogo' src="src\logos\linkedInLogo.png" alt='logo'/>
                <input id='search' type={'text'} placeholder="Search"/>
            </div>
            <div>
            </div>
            <div></div>
        </nav>
    </div>
  )
}

export default Header
