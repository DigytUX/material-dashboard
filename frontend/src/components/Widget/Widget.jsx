import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import './widget.scss'

export default function Widget({type}){
    let data = { title:'test'}

    switch(type){
        case 'user':
            data={
                title:'USERS',
                isMoney:false,
                link:'Sell all users',
                icon:<PeopleAltOutlinedIcon />
            }
        break;
        case 'order':
            data={
                title:'ORDERS',
                isMoney:false,
                link:'View all orders',
                icon:<Inventory2OutlinedIcon />
            }
        break;
        case 'earnings':
            data={
                title:'EARNINGS',
                isMoney:true,
                link:'View net earnings',
                icon:<MonetizationOnOutlinedIcon  />
            }
        break;
            case 'balance':
            data={
                title:'BALANCE',
                isMoney:true,
                link:'See details',
                icon:<AccountBalanceWalletOutlinedIcon  />
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
                    <div className='counter'>3,429</div>
                    <span className='link'>{data.link}</span>
                </div>
                <div className='right'>
                    <div className='percentage positive'>
                        {data.icon}20%
                    </div>
                    <PeopleAltOutlinedIcon className='icon' />
                </div>
            </div>
        </>
    )
}