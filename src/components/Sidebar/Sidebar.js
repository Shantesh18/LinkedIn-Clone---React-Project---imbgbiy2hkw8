import { Avatar } from '@material-ui/core'
import React from 'react'
import { useContext } from 'react'
import UserContext from '../UserContext'
import './Sidebar.css'

function Sidebar() {

  const {user,setUser} = useContext(UserContext);
  return (
    <div className='sidebar'>
       <div className='sidebar__profile'>
           <img src='https://m.media-amazon.com/images/I/31qu4ixHZ3L._SY355_.jpg'/>
               <div className='profile__details'>
                  <Avatar src={user.photoUrl}/>
                  <h4>{user.name}</h4>
                  <p>Web Developer</p>
               </div>
               <div className='profile__stat'>
                <span>Connections<br/>
                <b>Grow Your Network</b></span>
                <span className='connection_number'>20</span>
               </div>
               <div className='profile__stat'>
                <span>Who's viewed your profile</span>
                <span className='connection_number'>157</span>
               </div>
       </div>
       <div className='sidebar__recent'>
        <p>Recent</p>
        <p className='hash'><span>#</span> branding</p>
        <p className='hash'><span>#</span> marketing</p>
        <p className='hash'><span>#</span> webdevelopment</p>
        <p className='hash'><span>#</span> programming</p>
        <p className='hash'><span>#</span> reactjs</p>
        <p className='hash'><span>#</span> reduxtoolkit</p>
       </div>
    </div>
  )
}

export default Sidebar