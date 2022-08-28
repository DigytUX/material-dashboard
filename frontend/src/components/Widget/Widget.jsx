import React from 'react'
import './widget.scss'

export default function Widget(){
    return (
        <>
            <div className="widget shadow">
                <div className="left">
                    <span className="title">USERS</span>
                    <span className="title">3,429</span>
                    <span className="title">See all</span>
                </div>
                <div className="right">
                    <span className="title">3,429</span>
                </div>
            </div>
        </>
    )
}