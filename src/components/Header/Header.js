import React from 'react'
import Headeroptions from './Headeroptions'
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Header.css'
import { Avatar } from '@material-ui/core';
import { useContext } from 'react';
import UserContext from '../UserContext';
import SearchIcon from '@material-ui/icons/Search';

function Header() {

  const {user, setUser} = useContext(UserContext);
  return (
        <div id="header" className='nav'>
          <div className='header__left'>
            <img id='linkedInLogo' src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='img'/>
            <div className='search'>
             <SearchIcon/>
              <input id='search' type={'text'} placeholder="search"/>
            </div>
            
          </div>
          <div className='header__right'>
              <Headeroptions Icon={HomeIcon} title={'Home'}/>
              <Headeroptions Icon={PeopleIcon} title={'My Network'}/>
              <Headeroptions Icon={BusinessCenterIcon} title={'Jobs'}/>
              <Headeroptions Icon={MessageIcon} title={'Messaging'}/>
              <Headeroptions Icon={NotificationsIcon} title={'Notifications'}/>
              <Headeroptions avatar={Avatar} title={user.name} />
              
          </div>
          
               
              
                
        </div>
  )
}

export default Header
