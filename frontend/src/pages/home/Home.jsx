import React from 'react'
import './home.scss'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
import Widget from '../../components/Widget/Widget'
import FeaturedChart from '../../components/FeaturedChart/FeatureChart'
import Chart from '../../components/Chart/Chart'

export default function Home(){
    return (
        <>
            <div className='home'>
                <SideBar />
                <div className='home-container'>
                    <NavBar />
                    <div className='widgets'>
                        <Widget type='order' />
                        <Widget type='user'  />
                        <Widget type='balance' />
                    </div>
                    <div className='charts'>
                        <FeaturedChart type="bubble" />
                        <Chart />
                    </div>  
                </div>
            </div>
        </>
    )
}