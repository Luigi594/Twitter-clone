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

function Sidebar() {
  return (
    <div className='sidebar'>

        {/** Twitter Icons */}
        <TwitterIcon />

        {/** SidebarOption */}
        <SidebarOptions Icon={HomeIcon} text="Home" />
        <SidebarOptions Icon={SearchIcon} text="Explorer" />
        <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOptions Icon={MailOutlineOutlinedIcon} text="Messages" />
        <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOptions Icon={ListAltIcon} text="Lists" />
        <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
        <SidebarOptions Icon={MoreHorizIcon} text="More" />

        {/** Twitter => button */}
    </div>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`


`