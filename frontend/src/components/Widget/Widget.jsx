import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import './widget.scss'

export default function Widget({type}){
    let data 

    const amount = 100
    const diff = 20

    switch(type){
        case 'user':
            data={
                title:'USERS',
                isMoney:false,
                link:'Sell all users',
                icon:<PeopleAltOutlinedIcon className="icon" style={{backgroundColor:'black'}}/>
            }
        break;
        case 'order':
            data={
                title:'ORDERS',
                isMoney:false,
                link:'View all orders',
                icon:<Inventory2OutlinedIcon className="icon"/>
            }
        break;
        case 'earnings':
            data={
                title:'EARNINGS',
                isMoney:true,
                link:'View net earnings',
                icon:<MonetizationOnOutlinedIcon  className="icon" style={{backgroundColor:'black'}}/>
            }
        break;
            case 'balance':
            data={
                title:'BALANCE',
                isMoney:true,
                link:'See details',
                icon:<AccountBalanceWalletOutlinedIcon className="icon"  />
            }
        break;
        default:
            break;
    }
    return (
        <>
            <div className='widget shadow'>
                <div className='left'>
                    <span className='title'>{data.title}</span>
                    <div className='counter'>{data.isMoney && "$"}{amount}</div>
                    <span className='link'>{data.link}</span>
                </div>
                <div className='right'>
                    <div className='percentage positive'>
                    {diff}
                    </div>
                    {data.icon}
                </div>
            </div>
        </>
    )
}