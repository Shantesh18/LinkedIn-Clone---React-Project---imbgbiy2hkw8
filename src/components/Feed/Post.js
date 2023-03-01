import { Avatar } from '@material-ui/core'
import React from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';


function Post({name, description, message, imgUrl}) {
  return (
    <div className='posts'>
        <div className='post__header'>
            <div className='post__header__left'>
                <Avatar src={imgUrl}/>
                <div className='post__profile__details'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className='post__header__right'>
                <MoreHorizIcon/>
            </div>
        </div>
        <div className='post__body'>
            <p>{message}</p>
        </div>
        <div className='post__footer'>
            <div className='post__footer__options'>
                <ThumbUpIcon/>
                <span>Like</span>
            </div>
            <div className='post__footer__options'>
                <CommentIcon/>
                <span>Comment</span>
            </div>
            <div className='post__footer__options'>
                <ShareIcon/>
                <span>Share</span>
            </div>
            <div className='post__footer__options'>
                <SendIcon/>
                <span>Send</span>
            </div>
        </div>
    </div>
  )
}

export default Post