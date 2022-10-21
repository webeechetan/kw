import React, { useState } from 'react';
import { NavDropdown, Navbar, Nav, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import HeaderSearch from './HeaderSearch';
import AddUser from '../users/components/AddUser';

export default function Header() {
    const [HeaderSearchShow, setHeaderSearchShow] = useState(false);
    const [HeaderUsersShow, setHeaderUsersShow] = useState(false);

    return (
        <header className="header-main">
            <div className="header-main-wrap">
                <div className="header-main-left">
                    <div className="logo">
                        <span><img src={require('../assets/images/logo-icon.png')} alt="Kaykewalk Logo" /></span>
                        <span><img src={require('../assets/images/webeesocial-logo.png')} alt="Webeesocial Logo" /></span>
                    </div>
                </div>
                <div className="header-main-right">
                    {/* Header Menu */}
                    <Navbar collapseOnSelect expand="lg">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Nav.Link id="modal-search" href="#" onClick={() => setHeaderSearchShow(true)}><SearchOutlinedIcon/></Nav.Link>
                                <NavDropdown title={<ChatBubbleOutlineOutlinedIcon/>} className="dropdown-chat dropdown-menu-end">
                                    <div className="dropdown-header">
                                        <h6 className="mb-0">Messages</h6>
                                        <span className="badge fs-10 bg-secondary br-7 ms-auto">New</span>
                                    </div>
                                    <div className="dropdown-menu-items">
                                        <NavDropdown.Item href="#">
                                            <div className="dropdown-user"><img className="img-fluid" src={require('../assets/images/users/user.jpg')} alt="Kaykewalk chat User" /></div> 
                                            <div>
                                                <span>Joan Powell</span>
                                                <div className="small text-muted">All the best your template awesome</div>
                                                <div className="small text-muted mt-1">1 hours ago</div>
                                            </div>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#">
                                            <div className="dropdown-user"><img className="img-fluid" src={require('../assets/images/users/user.jpg')} alt="Kaykewalk chat User" /></div> 
                                            <div>
                                                <span>Joan Powell</span>
                                                <div className="small text-muted">All the best your template awesome</div>
                                                <div className="small text-muted mt-1">1 hours ago</div>
                                            </div>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#">
                                            <div className="dropdown-user"><img className="img-fluid" src={require('../assets/images/users/user.jpg')} alt="Kaykewalk chat User" /></div> 
                                            <div>
                                                <span>Joan Powell</span>
                                                <div className="small text-muted">All the best your template awesome</div>
                                                <div className="small text-muted mt-1">1 hours ago</div>
                                            </div>
                                        </NavDropdown.Item>
                                    </div>
                                    <div className="dropdown-button">
                                        <Link to="#" className="btn btn-primary w-100">View All</Link>
                                    </div>
                                </NavDropdown>
                                <NavDropdown title={<NotificationsNoneOutlinedIcon/>} className="dropdown-notification dropdown-menu-end">
                                    <div className="dropdown-header">
                                        <h6 className="mb-0">Notifications</h6>
                                        <span className="badge fs-10 bg-secondary br-7 ms-auto">New</span>
                                    </div>
                                    <div className="dropdown-menu-items">
                                        <NavDropdown.Item href="#">
                                            <div className="dropdown-subIcon"><MarkChatUnreadOutlinedIcon /></div> 
                                            <div>
                                                <span>Messages</span>
                                                <div className="small text-muted">5 minuts ago</div>
                                            </div>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#">
                                            <div className="dropdown-subIcon"><GroupAddOutlinedIcon /></div> 
                                            <div>
                                                <span>New Members</span>
                                                <div className="small text-muted">1 hours ago</div>
                                            </div>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#">
                                            <div className="dropdown-subIcon"><AssignmentOutlinedIcon /></div> 
                                            <div>
                                                <span>New Task</span>
                                                <div className="small text-muted">3 hours ago</div>
                                            </div>
                                        </NavDropdown.Item>
                                    </div>
                                    <div className="dropdown-button">
                                        <Link to="#" className="btn btn-primary w-100">View All</Link>
                                    </div>
                                </NavDropdown>
                                <NavDropdown title={<GroupAddOutlinedIcon/>} className="dropdown-users dropdown-menu-end">
                                    <div className="dropdown-header">
                                        <h6 className="mb-0">Users and roles</h6>
                                    </div>
                                    <div className="dropdown-menu-items">
                                        <NavDropdown.Item href="#" className="align-items-center" id="modal-users" onClick={() => setHeaderUsersShow(true)}>
                                            <div className="dropdown-item-icon"><GroupAddOutlinedIcon /></div> 
                                            <div>
                                                <span>Add User</span>
                                            </div>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" className="align-items-center">
                                            <div className="dropdown-item-icon"><AdminPanelSettingsOutlinedIcon /></div> 
                                            <div>
                                                <span>Asign Role</span>
                                            </div>
                                        </NavDropdown.Item>
                                    </div>
                                    <div className="dropdown-button">
                                        <Link to="../users" className="btn btn-primary w-100">View All</Link>
                                    </div>
                                </NavDropdown>
                                <NavDropdown title={<span><img className="img-fluid" src={require('../assets/images/users/user.jpg')} alt="Kaykewalk Admin User" /></span>} className="dropdown-account dropdown-menu-end">
                                    <div className="dropdown-header">
                                        <h6 className="mb-0 text-primary">John Deo</h6>
                                        <div className="text-muted mt-1 w-100">Web Designer</div>
                                    </div>
                                    <div className="dropdown-menu-items">
                                        <NavDropdown.Item href="#" className="align-items-center">
                                            <div className="dropdown-item-icon"><PersonOutlineOutlinedIcon /></div> 
                                            <div>
                                                <span>Profile</span>
                                            </div>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" className="align-items-center">
                                            <div className="dropdown-item-icon"><CachedOutlinedIcon /></div> 
                                            <div>
                                                <span>Reset Password</span>
                                            </div>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" className="align-items-center">
                                            <div className="dropdown-item-icon"><HelpOutlineOutlinedIcon /></div> 
                                            <div>
                                                <span>Help</span>
                                            </div>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" className="align-items-center">
                                            <div className="dropdown-item-icon"><ToggleOnOutlinedIcon /></div> 
                                            <div>
                                                <span>Logout</span>
                                            </div>
                                        </NavDropdown.Item>
                                    </div>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    {/* Header Menu End */}
                </div>
            </div>
            {/* Header Search Modal */}
            <Modal className="modal-custom" show={HeaderSearchShow} onHide={() => setHeaderSearchShow(false)}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <HeaderSearch />
                </Modal.Body>
            </Modal>
            {/* User Modal */}
            <Modal className="modal-custom" show={HeaderUsersShow} onHide={() => setHeaderUsersShow(false)}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <AddUser />
                </Modal.Body>
            </Modal>
        </header>
    )
}
