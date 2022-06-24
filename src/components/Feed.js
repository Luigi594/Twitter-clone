import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';
import Post from './Post';
import TweetBox from './TweetBox';
import db from '../firebase';
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';
import FlipMove from 'react-flip-move';

function Feed() {

  const [posts, setPost] = useState([]);

  useEffect(() => {

    const reference = collection(db, "posts");
    const Query = query(reference, orderBy("timestamp", "desc"));

    onSnapshot(Query, (snapshot) => {

        // map all the documents on the snapshot to the posts hook
        setPost(snapshot.docs.map((doc) => ({
            
            id: doc.id,
            data: doc.data()
        })))
    })
  },[])

  return (
    <FeedContainer>
        
        {/** Header */}
        <FeedHeader>
            <h2>Home</h2>
        </FeedHeader>

        {/** TweetBox */}
        <TweetBox />

        {/** Post reusable component */}
        <FlipMove>
            {posts.map(({ id, data: { displayName, userName, verified, text, avatar, image } }) => (

                <Post
                
                key={id}
                displayName={displayName}
                userName={userName}
                verified={verified}
                text={text}
                avatar={avatar}
                image={image}
                />
            ))}
        </FlipMove>

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