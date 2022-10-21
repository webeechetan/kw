import React from 'react';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FindReplaceOutlinedIcon from '@mui/icons-material/FindReplaceOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Form } from 'react-bootstrap';

export default function HeaderSearch() {
    return (
        <>
            {/* BEGIN: Search */}
            <div className="search-main text-start">
                <div className="search-result">
                    <div className="search-result-content">
                        <div className="search">
                            <div className="search-field">
                                <Form.Control type="text" placeholder="Search..." required />
                                <a href="#" className="search-field-btn btn"><SearchOutlinedIcon /></a>
                            </div>
                        </div>
                        <div className="search-result-content-title mb-3">Recent Searches</div>
                        <div className="search-result-content-inner">
                            <a href="#" className="d-flex align-items-center">
                                <div className="search-result-content-icon"> 
                                    <FindReplaceOutlinedIcon />
                                </div>
                                <div className="ms-2">Mail Settings</div>
                            </a>
                            <a href="#" className="d-flex align-items-center">
                                <div className="search-result-content-icon"> 
                                    <FindReplaceOutlinedIcon /> 
                                </div>
                                <div className="ms-2">Users and Permissions</div>
                            </a>
                            <a href="#" className="d-flex align-items-center">
                                <div className="search-result-content-icon"> 
                                    <FindReplaceOutlinedIcon /> 
                                </div>
                                <div className="ms-2">Projects</div>
                            </a>
                        </div>
                        <hr />
                        <div className="search-result-content-title mb-3">Pages</div>
                        <div className="search-result-content-inner">
                            <a href="#" className="d-flex align-items-center">
                                <div className="search-result-content-icon"> 
                                    <MailOutlinedIcon />
                                </div>
                                <div className="ms-2">Mail Settings</div>
                            </a>
                            <a href="#" className="d-flex align-items-center">
                                <div className="search-result-content-icon"> 
                                    <PersonOutlineOutlinedIcon /> 
                                </div>
                                <div className="ms-2">Users and Permissions</div>
                            </a>
                            <a href="#" className="d-flex align-items-center">
                                <div className="search-result-content-icon"> 
                                    <DashboardOutlinedIcon /> 
                                </div>
                                <div className="ms-2">Projects</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* END: Search */}
        </>
    )
}