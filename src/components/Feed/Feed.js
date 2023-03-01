import { Avatar } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import PhotoIcon from '@material-ui/icons/Photo';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './feed.css';
import Post from './Post';
import UserContext from '../UserContext';
import FlipMove from 'react-flip-move';

function Feed() {

    const {user, setUser}=useContext(UserContext);
    
    const [inputText, setInputText]=useState("");
    const [posts, setPosts]=useState([]);

    useEffect(() => {
        (localStorage.getItem("posts")) ? 
            setPosts(JSON.parse(localStorage.getItem("posts")))
            :
            localStorage.setItem("posts",JSON.stringify([]));
    }, []);
    

    const handleInput=(e)=>{
        e.preventDefault();
        setInputText(e.target.value);
        console.log(user.name);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const parsedPosts=JSON.parse(localStorage.getItem("posts"));
        const newPost={
            "name":user.name,
            "message":inputText,
            "description":"This is a test",
            "imgUrl":user.photoUrl,
            "timestamp": Date.now()
        }
        parsedPosts.push(newPost);
        localStorage.setItem("posts",JSON.stringify(parsedPosts.sort((a,b)=>b.timestamp-a.timestamp)));
        setPosts(JSON.parse(localStorage.getItem("posts")));

        setInputText("");
    }
  return (
    <div className='feed'>
        <div className='feed__input__container'>
            <div className='feed__input'>
                <Avatar src={user.photoUrl}/>
                <form onSubmit={handleSubmit}>
                    <input type={'text'} value={inputText} placeholder="start a post"
                      onChange={handleInput}
                    />
                    <input type={'submit'}/>
                </form>
            </div>
            <div className='feed__options'>
                <div className='option'>
                    <PhotoIcon style={{color:'#70b5f9'}}/>
                    <span>Photo</span>
                </div>
                <div className='option'>
                    <YouTubeIcon style={{color:'#e7a33e'}}/>
                    <span>Video</span>
                </div>
                <div className='option'>
                    <EventIcon style={{color:'#fc9295'}}/>
                    <span>Event</span>
                </div>
                <div className='option'>
                    <AssignmentIcon style={{color:'#7fc15c'}}/>
                    <span>Write an article</span>
                </div>
            </div>
        </div>
        
        <div>
          
        <FlipMove>
            { 
                 posts.map((elem)=>{
                   return (
                    <FlipMove>
                     <Post key={elem.name}
                      name={elem.name} 
                    description={elem.description}
                    message={elem.message}
                    imgUrl={elem.imgUrl}/>
                    </FlipMove>
                  )
                })
            }
            </FlipMove>
           
         
        </div>
        
    </div>
  )
}

export default Feed