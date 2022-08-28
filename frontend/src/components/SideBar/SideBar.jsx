import React from 'react'
import './sidebar.scss'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import DataArrayIcon from '@mui/icons-material/DataArray';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function SideBar(){
    return (
        <>
            <div className="sidebar">
                <div className="top">
                    <span className="logo">Logo</span>
                </div>
                <div className="center">
                    <ul>
                        <p className="title">Main</p>
                        <li>
                            <DashboardOutlinedIcon className="icon" />
                            <span className="dashboard">Dashboard</span>
                        </li>
                        <li>
                            <PeopleAltOutlinedIcon className="icon" />
                            <span className="dashboard">Users</span>
                        </li>
                        <li>
                            <Inventory2OutlinedIcon className="icon" />
                            <span className="dashboard">Products</span>
                        </li>
                        <p className="title">Useful links</p>
                        <li>
                            <AnalyticsOutlinedIcon className="icon" />
                            <span className="dashboard">Stats</span>
                        </li>
                        <li>
                            <NotificationsActiveOutlinedIcon className="icon" />
                            <span className="dashboard">Notifications</span>
                        </li>
                        <p className="title">Service</p>
                        <li>
                            <HealthAndSafetyOutlinedIcon className="icon" />
                            <span className="dashboard">System Health</span>
                        </li>
                        <li>
                            <DataArrayIcon className="icon" />
                            <span className="dashboard">Logs</span>
                        </li>
                        <li>
                            <SettingsOutlinedIcon className="icon" />
                            <span className="dashboard">Settings</span>
                        </li>
                        <p className="title">User</p>
                        <li>
                            <AccountCircleOutlinedIcon className="icon" />
                            <span className="dashboard">Profile</span>
                        </li>
                        <li>
                            <LogoutIcon className="icon" />
                            <span className="dashboard">Log Out</span>
                        </li>
                    </ul>
                </div>
                <hr className="hr" />
                <div className="bottom">
                    <div className="color-option"></div>
                    <div className="color-option"></div>

                </div>
            </div>
        </>
    )
}