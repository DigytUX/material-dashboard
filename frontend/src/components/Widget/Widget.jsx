import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import './widget.scss'

export default function Widget(){
    return (
        <>
            <div className="widget shadow">
                <div className="left">
                    <span className="title">USERS</span>
                    <div className="counter">3,429</div>
                    <span className="link">See all users</span>
                </div>
                <div className="right">
                    <div className="percentage positive">
                        <KeyboardArrowUpOutlinedIcon />
                        20%
                    </div>
                    <PeopleAltOutlinedIcon className="icon" />
                </div>
            </div>
        </>
    )
}