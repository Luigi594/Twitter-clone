import React from 'react';
import styled from 'styled-components';
import SidebarOptions from './SidebarOptions';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';

function Sidebar() {
  return (
    <SidebarContainer>

        {/** Twitter Icons */}
        <TwitterIcon className='twitter_icon' />

        {/** SidebarOption */}
        <SidebarOptions active Icon={HomeIcon} text="Home" />
        <SidebarOptions Icon={SearchIcon} text="Explorer" />
        <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOptions Icon={MailOutlineOutlinedIcon} text="Messages" />
        <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOptions Icon={ListAltIcon} text="Lists" />
        <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
        <SidebarOptions Icon={MoreHorizIcon} text="More" />

        {/** Twitter => button */}
        <Button variant='outlined' className='sidebarTweet' fullWidth>
          Tweet
        </Button>
    </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`

  border-right: 1px solid var(--twitter-background);
  flex: 0.3; // use the third part of the screen
  min-width: 250px; // don't shrink anything more than 250px
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  
  > .twitter_icon{
    color: var(--twitter-color) !important;
    font-size: 30px !important;
    margin-left: 20px;
    margin-bottom: 20px;
  }

  > .sidebarTweet{

    background-color: var(--twitter-color) !important;
    border: none !important;
    color: white !important;
    font-weight: 900 !important;
    text-transform: inherit !important;
    border-radius: 30px !important;
    height: 50px !important;
    margin-top: 20px !important;
  }
`