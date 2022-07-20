import React, {forwardRef} from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
//import VerifiedUserIcon from '@material-ui/icons/Publish/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

function Post ({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/2_images/rLlCifhXRJiT0RoN2FjK_logo_round_roundbackground_black.png" />
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>{displayName} {""}
                        <span>
                          {verified &&  <verifiedUserIcon className="post__badge" />}
                        </span> 
                    </h3>
                </div>

                <div className='post__headerDescription'>
                    <p>{text}</p>
                </div>
            </div>
            <img
               src="https://media.giphy.com/media/11cPfPrduonvEc/giphy.gif" 
               alt="" />

            <div className='post__footer'>
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small" />
            </div>

        </div>
        
    </div>
  )
}

export default Post;