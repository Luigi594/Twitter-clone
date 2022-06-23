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
        <Post displayName={"Sonny Sangha"} 
        userName="sssangha" 
        verified={true} 
        text="It's working!"
        avatar={"https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/82/54/ae/8254ae74-339b-de39-4d00-53e5868cfb06/source/600x600bb.jpg"}
        image={"https://res.cloudinary.com/codier/image/upload/v1530614273/jqxbwxmnrkjq0mxhnvjn.png"} />
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