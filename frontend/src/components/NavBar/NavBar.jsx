import React from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
export default function NavBar(){
    return (
        <>
            <div className="navbar">
                <div className="wrapper">
                    <div className="search">
                        <input type="text" placeholder="Search..." />
                        <SearchOutlinedIcon className="icon" />
                    </div>
                    <div className="items">
                        <div className="item">
                            <LanguageOutlinedIcon className="icon" />
                            English
                        </div>
                        <div className="item"> 
                            <DarkModeOutlinedIcon className="icon" />
                        </div>
                        <div className="item"> 
                            <ChatBubbleOutlineOutlinedIcon className="icon" />
                        </div>
                        <div className="item"> 
                            <FullscreenExitOutlinedIcon className="icon" />
                        </div>
                        <div className="item"> 
                            <NotificationsOutlinedIcon  className="icon" />
                            <div className="counter">2</div>
                        </div>
                        <div className="item"> 
                            <FormatListBulletedOutlinedIcon className="icon" />
                            <div className="counter">1</div>
                        </div>
                        <div className="item"> 
                            <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="" className="avatar" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}