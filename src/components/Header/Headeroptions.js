import { Avatar } from '@material-ui/core'
import React from 'react'
import { useContext } from 'react'
import UserContext from '../UserContext'

function Headeroptions({Icon, title, avatar}) {
  const {user, setUser} = useContext(UserContext);

  const handleLogOut=()=>{
     localStorage.removeItem("auth");
     setUser(null);
  }
  return (
    <div className='header__options'>
        {
            Icon &&  <Icon></Icon>
        }
       {
            avatar && <Avatar src={user.photoUrl} name="" onClick={handleLogOut}/>
       }
        {title}
    </div>
  )
}

export default Headeroptions