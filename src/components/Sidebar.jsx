import React from 'react';
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

export default function LeftSidebar() {
    return (
        <>
            {/* Left Sidebar */}
            <aside className="sidebar-l">
                {/* Left Sidebar Top */}
                <div className="sidebar-l-top">
                    {/* Dashboard Profile */}
                    <div className="sidebar-profile">
                        <div className="sidebar-profile-img"><img src={require('../assets/images/profile-sidebar.png')} alt="Kaykewalk Profile" /></div>
                        <h3 className="sidebar-profile-title">John Due</h3>
                        <a className="sidebar-profile-mail" href="{#}">demo@dummyweb.com</a>
                    </div>
                </div>
                {/* Left Sidebar Top End */}
                {/* Left Sidebar Menu */}
                <div className="sidebar-l-menu">
                    <ul className="list-none menu-sidebar">
                        <li><Link to="../dashboard" className="active"><HomeOutlinedIcon/> Dashboard</Link></li>
                        <li><Link to="../teams"><PeopleAltOutlinedIcon/> Teams</Link></li>
                        <li><Link to="../tasks" className=""><AssignmentOutlinedIcon/> Tasks</Link></li>
                        <li><Link to="../messages" className=""><MarkChatUnreadOutlinedIcon/> Messages</Link></li>
                        <li><Link to="../projects" className=""><DashboardOutlinedIcon/> Projects</Link></li>
                        <li><Link to="../calendar" className=""><EventNoteOutlinedIcon/> Calendar</Link></li>
                        <li><Link to="../calendar" className=""><WavesOutlinedIcon/> Water Cooler</Link></li>
                        <li><Link to="../calendar" className=""><ManageAccountsOutlinedIcon/> My Account</Link></li>
                    </ul>
                </div>
                {/* Left Sidebar Menu End */}
                {/* Left Bottom Section */}
                <div className="sidebar-l-btm">
                    <img src={require('../assets/images/logo.png')} width="150" alt="Kaykewalk Profile" />
                    <p className="mb-0 mt-3">Copyright © 2022, Kaykewalk, All Rights Reserved.</p>
                </div>
            </aside>
        </>
    )
}
