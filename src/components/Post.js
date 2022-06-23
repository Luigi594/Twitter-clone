import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import IconButton from '@mui/material/IconButton';

function Post({ displayName, userName, verified, text, image, avatar }) {
  return (
    <PostContainer>
        <PostAvatar>
          <Avatar src="https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/82/54/ae/8254ae74-339b-de39-4d00-53e5868cfb06/source/600x600bb.jpg"/>
        </PostAvatar>

        <PostBody>
          <PostHeaderText>
            <h3>
              Rafael Qazi {" "}
              <span className='post_headerSpecial'>
                <VerifiedIcon className='post_badge'/>
                @cleverqazi
              </span>
            </h3>
          </PostHeaderText>

          <PostHeaderDescription>
            <p>I challenge you to build a Twitter Clone</p>
          </PostHeaderDescription>

          <img src="https://res.cloudinary.com/codier/image/upload/v1530614273/jqxbwxmnrkjq0mxhnvjn.png" alt="" />

          <PostFooter>
            <IconButton>
              <ChatBubbleOutlineOutlinedIcon font-size="small"/>
            </IconButton>

            <IconButton>
              <RepeatIcon font-size="small"/> 
            </IconButton>

            <IconButton>
              <FavoriteBorderIcon font-size="small"/>
            </IconButton>

            <IconButton>
              <FileUploadOutlinedIcon font-size="small"/>
            </IconButton>
          </PostFooter>
        </PostBody>
    </PostContainer>
  )
}

export default Post;

const PostContainer = styled.div`

  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid var(--twitter-background);
  padding-bottom: 10px;
  max-width: 650px;
`;

const PostAvatar = styled.div`
  padding: 18px;
`;

const PostBody = styled.div`

  flex: 1;
  padding: 10px;  

  > img{

    border-radius: 20px;
    width: 100%;
  }
`;

const PostHeaderText = styled.div`

  > h3{

    font-size: 15px;
    margin-bottom: 5px;
  }

  > h3 > .post_headerSpecial{

    font-weight: 600;
    font-size: 12px;
    color: gray;
  }

  > h3 > .post_headerSpecial > .post_badge{

    font-size: 14px !important;
    color: var(--twitter-color);
  }
`;

const PostHeaderDescription = styled.div`

  margin-bottom: 10px;
  font-size: 15px;
`;

const PostFooter = styled.div`

  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;