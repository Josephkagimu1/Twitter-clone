import React, { useEffect, useState } from 'react';
import './Feed.css'
import Post from './Post';
import TweetBox from './TweetBox';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);
  
  return (
    <div className='feed'>
        {/* Header */}
        <h2 className='feed__header'> Home </h2>

        {/* TweetBox */}
        <TweetBox />

        <FlipMove>
        {posts.map(post => (
          <Post 
          key={post.text}
          displayName={post.displayName}
          userName={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          />
        ))}
        {/* Post */}
        
        <Post />
 
        </FlipMove>
    </div>
  )
}

export default Feed;