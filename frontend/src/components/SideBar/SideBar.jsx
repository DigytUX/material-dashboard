import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DataArrayIcon from '@mui/icons-material/DataArray';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
                            <DashboardIcon className="icon" />
                            <span className="dashboard">Dashboard</span>
                        </li>
                        <hr className="hr" />
                        <li>
                            <GroupIcon className="icon" />
                            <span className="dashboard">Users</span>
                        </li>
                        <hr className="hr" />
                        <li>
                            <Inventory2Icon className="icon" />
                            <span className="dashboard">Products</span>
                        </li>
                        <p className="title">Useful links</p>
                        <li>
                            <AnalyticsIcon className="icon" />
                            <span className="dashboard">Stats</span>
                        </li>
                        <hr className="hr" />
                        <li>
                            <NotificationsIcon className="icon" />
                            <span className="dashboard">Notifications</span>
                        </li>
                        <p className="title">Service</p>
                        <li>
                            <HealthAndSafetyIcon className="icon" />
                            <span className="dashboard">System Health</span>
                        </li>
                        <li>
                            <DataArrayIcon className="icon" />
                            <span className="dashboard">Logs</span>
                        </li>
                        <li>
                            <SettingsIcon className="icon" />
                            <span className="dashboard">Settings</span>
                        </li>
                        <p className="title">User</p>
                        <li>
                            <AccountCircleIcon className="icon" />
                            <span className="dashboard">Profile</span>
                        </li>
                        <li>
                            <LogoutIcon className="icon" />
                            <span className="dashboard">Log Out</span>
                        </li>
                    </ul>
                </div>
                <hr className="hr" />
                <div className="bottom">color options</div>
            </div>
        </>
    )
}