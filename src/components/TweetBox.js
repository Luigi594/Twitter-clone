import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

function TweetBox() {
  return (
    <TweetBoxContainer>

        <form>
            <TweetBoxInput>
                <Avatar src="https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/82/54/ae/8254ae74-339b-de39-4d00-53e5868cfb06/source/600x600bb.jpg"/>
                <input type="text" placeholder="What's up?'" />
                {/* <input type="file" placeholder="Enter an image"/> */}
            </TweetBoxInput>

            <Button>Tweet</Button>
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