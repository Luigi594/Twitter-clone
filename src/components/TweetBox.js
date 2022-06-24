import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import db from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function TweetBox() {

  const [tweetText, setTweetText] = useState('');
  const [imageTweet, setImageTweet] = useState('');

  const sendTweet = (e) => {

    e.preventDefault();

    /**displayName, userName, verified, text, avatar, image */
    addDoc(collection(db, "posts"), {

        displayName: "Luis Martinez",
        userName: "Luigix14",
        verified: true,
        text: tweetText,
        image: imageTweet,
        avatar: "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/82/54/ae/8254ae74-339b-de39-4d00-53e5868cfb06/source/600x600bb.jpg",
        timestamp: serverTimestamp()
    })

    setTweetText('');
    setImageTweet('');
  }


  return (
    <TweetBoxContainer>

        <form>
            <TweetBoxInput>
                <Avatar src="https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/82/54/ae/8254ae74-339b-de39-4d00-53e5868cfb06/source/600x600bb.jpg"/>

                <input 
                    type="text" 
                    placeholder="What's happening?'" 
                    value={tweetText} 
                    onChange={(e) => setTweetText(e.target.value)} />

            </TweetBoxInput>

                <input 
                    value={imageTweet}
                    onChange={(e) => setImageTweet(e.target.value)}
                    className='tweetBox_imageInput' 
                    type="text" 
                    placeholder="Optional: Enter an image"/>
                
            <Button className='tweetBox_button' type="submit" onClick={sendTweet}>Tweet</Button>
        </form>
    </TweetBoxContainer>
  )
}

export default TweetBox;

const TweetBoxContainer = styled.div`

    padding-bottom: 10px;
    border-bottom: 8px solid var(--twitter-background);
    padding-right: 10px;

    > form{

        display: flex;
        flex-direction: column;
    }

    > form > .tweetBox_button{

        background-color: var(--twitter-color) !important;
        border: none !important;
        color: white !important;
        font-weight: 900 !important;
        text-transform: inherit !important;
        border-radius: 30px !important;
        width: 80px;
        height: 40px !important;
        margin-top: 20px !important;
        margin-left: auto !important;
    }

    > form > .tweetBox_imageInput{

        border: none;
        outline: none;
        padding: 10px;
    }
`;

const TweetBoxInput = styled.div`

    padding: 20px;
    display: flex;

    > input{

        flex: 1;
        margin-left: 20px;
        font-size: 20px;
        border: none;
        outline: none;
    }
`;