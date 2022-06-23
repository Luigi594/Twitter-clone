import React from 'react';
import styled from 'styled-components';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <WidgetContainer>
        <WidgetsInput>

          <SearchIcon className="searchIcon" />
          <input type="text" placeholder='Search Twitter' />
        </WidgetsInput>

        {/** if you can't see any of these embed things, change the
         * browser, I tried on firefox but it was blocking the
         * third-parties so could disable them or just change to
         * another browser
         */}
        <WidgetsWidgetContainer>
          <h2>What's happening</h2>

          <TwitterTweetEmbed  tweetId={'858551177860055040'}/>

          <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}/>

          <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}/>
        </WidgetsWidgetContainer>
    </WidgetContainer>
  )
}

export default Widgets;

const WidgetContainer = styled.div`

  flex: 0.3;
`

const WidgetsInput = styled.div`

  display: flex;
  align-items: center;
  background-color: var(--twitter-background);
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 20px;

  > .searchIcon{
    color: gray !important;
  }

  > input{

    border: none;
    outline: none;
    background-color: var(--twitter-background);
  }
`;

const WidgetsWidgetContainer = styled.div`

  margin-top: 15px;
  margin-left: 20px;
  padding: 20px;
  background-color: #f5f8fa;
  border-radius: 20px;

  > h2{

    font-size: 18px;
    font-weight: 800;
  }
`;