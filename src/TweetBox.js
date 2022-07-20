import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
      e.preventDefault();

      db.collection("posts").add({
        displayName: 'Joseph king',
        username: 'Joseph',
        verified: true,
        text: tweetMessage,
        avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/2_images/rLlCifhXRJiT0RoN2FjK_logo_round_roundbackground_black.png"
      });
    }

  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">
                <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/2_images/rLlCifhXRJiT0RoN2FjK_logo_round_roundbackground_black.png" />
                <input value={tweetMessage} placeholder="What's happening" />
            </div>

            <input
            onChange={(e) => setTweetMessage(e.target.value)}
            className='tweetBox__imageInput'
            placeholder="Whats happening"
            type="text" 
            />

            <input 
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
            className="tweetBox__imageInput"
            placeholder="Optional: Enter image URL"
            type='text'
            />

            <Button className="tweetBox__tweetButton"> Tweet </Button>

        </form>
    </div>
  )
}

export default TweetBox;