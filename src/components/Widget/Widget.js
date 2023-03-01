import React, { useContext } from 'react'
import AnnouncementIcon from '@material-ui/icons/Announcement';
import './widget.css'
import { Avatar } from '@material-ui/core';
import UserContext from '../UserContext';

function Widget() {
    const {user, setUser} = useContext(UserContext);
  return (
    <div className='widget'>
        <div className='widget__header'>
            <div className='widget__headerTop'>
                <h4>LinkedIn News</h4>
                <AnnouncementIcon/>
            </div>
            <div className='widget__body'>
                <ul className='widget__header__options'>
                    <li>
                        <h4>first</h4>
                        <p>1h ago .100 reader</p>
                    </li>
                    <li>
                        <h4>second</h4>
                        <p>1h ago .100 reader</p>
                    </li>
                    <li>
                        <h4>third</h4>
                        <p>1h ago .100 reader</p>
                    </li>
                    <li>
                        <h4>fourth</h4>
                        <p>1h ago .100 reader</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className='widget__footer'>
                <h4>Ads</h4>
                <Avatar src={user.photoUrl}/>
        </div>
    </div>
  )
}

export default Widget