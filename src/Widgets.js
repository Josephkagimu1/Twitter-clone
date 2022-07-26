import React from 'react';
import "./Widgets.css";
import SearchIcon from '@material-ui/icons/Search';
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder='Search Twitter' type='text' /> 
        </div>

        <div className='widgets__widgetContainer'>
          <h2>Whats happening</h2>
          <TwitterTweetEmbed tweetId={858551177860055040} />

          <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
          />

          <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          // options={{text: "#react is awesome"}},
          />
          
        </div>

    </div>
  )
}

export default Widgets