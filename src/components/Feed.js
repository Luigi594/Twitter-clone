import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import TweetBox from './TweetBox';

function Feed() {
  return (
    <FeedContainer>
        
        {/** Header */}
        <FeedHeader>
            <h2>Home</h2>
        </FeedHeader>

        {/** TweetBox */}
        <TweetBox />

        {/** Post reusable component */}
        <Post />
    </FeedContainer>
  )
}

export default Feed;

const FeedContainer = styled.div`

    flex: 0.4;
    border-right: 1px solid var(--twitter-background);
    min-width: fit-content; // whatever the size is
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar{
        display: none;
    }
`;

const FeedHeader = styled.div`

    position: sticky;
    top: 0;
    z-index: 100;
    border: 1px solid var(--twitter-background);
    padding: 15px 20px;

    > h2{

        font-size: 20px;
        font-weight: 800;        
    }
`;