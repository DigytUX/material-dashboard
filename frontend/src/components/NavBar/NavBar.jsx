import React from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

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
                            Dark Mode
                        </div>
                        <div className="item"> 
                            <ChatBubbleOutlineOutlinedIcon className="icon" />
                            Chat
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}