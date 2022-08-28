import React from 'react'
import './home.scss'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'

export default function Home(){
    return (
        <>
            <div className='home'>
                <SideBar />
                <div className="home-container">
                    <NavBar />
                </div>
            </div>
        </>
    )
}