import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Container, Row, Col, ListGroup, Dropdown, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ViewWeekOutlinedIcon from '@mui/icons-material/ViewWeekOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function TasksFrontend() {

    return (
        <>
            <Header />
                <div className="main-body">
                <Sidebar />
                <div className="main-body-content">
                    <Container fluid>
                        <div className="main-body-header pb-0">
                            <Row className="align-items-center">
                                <Col>
                                    <h3 className="main-body-header-title mb-0">All Tasks</h3>
                                    <div className="tabNavigationBar-tab">
                                        <Link className="tabNavigationBar-item" to="#"><FormatListBulletedOutlinedIcon /> List</Link>
                                        <Link className="tabNavigationBar-item tabNavigationBar-item-active" to="#"> <ViewWeekOutlinedIcon /> Board</Link>
                                    </div>
                                </Col>
                                <Col className="text-end">
                                    <Dropdown className="dropdown-menu-end">
                                        <Dropdown.Toggle className="btn-filterSort"><FilterListOutlinedIcon /> Filter</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <div className="filterSort_wrap">
                                                <div className="filterSort_body">
                                                    <div className="filterSort_body_item">
                                                        <h2 className="filterSort_body-header">Quick Filter</h2>
                                                        <div className="filterSort_body_btn_group">
                                                            <span className="filterSort_body_btn_action">Incomplete tasks</span>
                                                            <span className="filterSort_body_btn_action">Completed tasks</span>
                                                            <span className="filterSort_body_btn_action">My tasks</span>
                                                            <span className="filterSort_body_btn_action">Due this week</span>
                                                            <span className="filterSort_body_btn_action">Due next week</span>
                                                        </div>
                                                    </div>
                                                    <div className="filterSort_body_item">
                                                        <h2 className="filterSort_body-header">Sort By Assignee</h2>
                                                        <div className="filterSort_body_btn_group">
                                                            <span className="filterSort_body_btn_action"><PersonOutlineOutlinedIcon /> Rakesh Roshan</span>
                                                            <span className="filterSort_body_btn_action"><PersonOutlineOutlinedIcon /> John Cena</span>
                                                            <span className="filterSort_body_btn_action"><PersonOutlineOutlinedIcon /> The Rock</span>
                                                            <span className="filterSort_body_btn_action"><PersonOutlineOutlinedIcon /> Chetan Kumar</span>
                                                            <span className="filterSort_body_btn_action"><PersonOutlineOutlinedIcon /> Vikram Ahuja</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                        </div>
                        <div className="kanban_bord">
                            {/* ----- Bord KanBan View ----- */}
                            <div className="kanban_bord_body">
                                <div className="kanban_bord_scrollbar">
                                    <div className="kanban_bord_body_columns">

                                        {/* ----- Assigned -----  */}
                                        <div className="kanban_bord_column">
                                            <div className="kanban_bord_column_title_wrap">
                                                <div className="kanban_bord_column_title">Assigned</div> 
                                                <div><Link to="./add-task" className="kanban_bord_column_title_btnAddTask"><AddOutlinedIcon /> Add Task</Link></div>    
                                            </div>
                                            <div className="kanban_column_card_body">
                                                <div className="kanban_column_card">
                                                    <Card className="kanban_column_task kanban_column_task_overdue h-100">
                                                        <Card.Body>
                                                            <div className="card-options">
                                                                <Dropdown align="end">
                                                                    <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                        <Dropdown.Menu className="card-options-submenu">
                                                                            <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                            <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                            <div className="kanban_column_task_name">
                                                                <div className="kanban_column_task_complete_icon"><CheckCircleOutlineOutlinedIcon /></div>
                                                                <div className="kanban_column_task_name_text">
                                                                    <div>Header style need to fix and add some reference for user login</div>
                                                                    <div className="kanban_column_task_project_name"><InsertDriveFileOutlinedIcon /> Acma Web</div>
                                                                </div>
                                                            </div>
                                                            <div className="kanban_column_task_bot">
                                                                <div className="kanban_column_task_actions">
                                                                    <Link className="kanban_column_task_date" to="#"><span className="btn-icon-task-action"><DateRangeOutlinedIcon /></span> <span>22 Jan</span></Link>
                                                                </div>
                                                                <div className="team-member-group">
                                                                    <span className="team-member">RK</span>
                                                                    <span className="team-member"><img src={require("../assets/images/users/user.jpg")} alt="User" /></span>
                                                                    <span className="team-member">JK</span>
                                                                    <span className="team-member"><img src={require("../assets/images/users/avatar2.jpg")} alt="User" /></span>
                                                                    <span className="team-member"><a href="#">+6</a></span>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                    <Card className="kanban_column_task kanban_column_task_warning h-100">
                                                        <Card.Body>
                                                            <div className="card-options">
                                                                <Dropdown align="end">
                                                                    <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                        <Dropdown.Menu className="card-options-submenu">
                                                                            <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                            <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                            <div className="kanban_column_task_name">
                                                                <div className="kanban_column_task_complete_icon"><CheckCircleOutlineOutlinedIcon /></div>
                                                                <div className="kanban_column_task_name_text">
                                                                    <div>Header style need to fix and add some reference for user login</div>
                                                                    <div className="kanban_column_task_project_name"><InsertDriveFileOutlinedIcon /> Acma Web</div>
                                                                </div>
                                                            </div>
                                                            <div className="kanban_column_task_bot">
                                                                <div className="kanban_column_task_actions">
                                                                    <Link className="kanban_column_task_date kanban_column_task_date_success" to="#"><span className="btn-icon-task-action"><DateRangeOutlinedIcon /></span> <span>Today</span></Link>
                                                                </div>
                                                                <div className="team-member-group">
                                                                    <span className="team-member">RK</span>
                                                                    <span className="team-member"><img src={require("../assets/images/users/user.jpg")} alt="User" /></span>
                                                                    <span className="team-member">JK</span>
                                                                    <span className="team-member"><img src={require("../assets/images/users/avatar2.jpg")} alt="User" /></span>
                                                                    <span className="team-member"><a href="#">+6</a></span>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* ----- In Progress -----  */}
                                        <div className="kanban_bord_column">
                                            <div className="kanban_bord_column_title_wrap">
                                                <div className="kanban_bord_column_title">In Progress</div> 
                                                <div><Link className="kanban_bord_column_title_btnAddTask"><AddOutlinedIcon /> Add Task</Link></div>    
                                            </div>
                                            <div className="kanban_column_card_body">
                                                <div className="kanban_column_card">
                                                    <Card className="kanban_column_task h-100">
                                                        <Card.Body>
                                                            <div className="card-options">
                                                                <Dropdown align="end">
                                                                    <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                        <Dropdown.Menu className="card-options-submenu">
                                                                            <Dropdown.Item ><Link to="#"><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                            <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                            <div className="kanban_column_task_name">
                                                                <div className="kanban_column_task_complete_icon"><CheckCircleOutlineOutlinedIcon /></div>
                                                                <div className="kanban_column_task_name_text">
                                                                    <div>Header style need to fix and add some reference for user login</div>
                                                                    <div className="kanban_column_task_project_name"><InsertDriveFileOutlinedIcon /> Webeesocial</div>
                                                                </div>
                                                            </div>
                                                            <div className="kanban_column_task_bot">
                                                                <div className="kanban_column_task_actions">
                                                                    <Link className="kanban_column_task_date" to="#"><span className="btn-icon-task-action"><DateRangeOutlinedIcon /></span> <span>12 Aug</span></Link>
                                                                </div>
                                                                <div className="team-member-group">
                                                                    <span className="team-member">RK</span>
                                                                    <span className="team-member"><img src={require("../assets/images/users/user.jpg")} alt="User" /></span>
                                                                    <span className="team-member">JK</span>
                                                                    <span className="team-member"><img src={require("../assets/images/users/avatar2.jpg")} alt="User" /></span>
                                                                    <span className="team-member"><a href="#">+6</a></span>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                    <Card className="kanban_column_task kanban_column_task_warning h-100">
                                                        <Card.Body>
                                                            <div className="card-options">
                                                                <Dropdown align="end">
                                                                    <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                        <Dropdown.Menu className="card-options-submenu">
                                                                            <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                            <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                            <div className="kanban_column_task_name">
                                                                <div className="kanban_column_task_complete_icon"><CheckCircleOutlineOutlinedIcon /></div>
                                                                <div className="kanban_column_task_name_text">
                                                                    <div>Header style need to fix and add some reference for user login</div>
                                                                    <div className="kanban_column_task_project_name"><InsertDriveFileOutlinedIcon /> Webeesocial</div>
                                                                </div>
                                                            </div>
                                                            <div className="kanban_column_task_bot">
                                                                <div className="kanban_column_task_actions">
                                                                    <Link className="kanban_column_task_date" to="#"><span className="btn-icon-task-action"><DateRangeOutlinedIcon /></span> <span>15 Jul</span></Link>
                                                                </div>
                                                                <div className="team-member-group">
                                                                    <span className="team-member">RK</span>
                                                                    <span className="team-member"><img src={require("../assets/images/users/user.jpg")} alt="User" /></span>
                                                                    <span className="team-member">JK</span>
                                                                    <span className="team-member"><img src={require("../assets/images/users/avatar2.jpg")} alt="User" /></span>
                                                                    <span className="team-member"><a href="#">+6</a></span>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </div>
                                        </div>

                                        {/* ----- In Review -----  */}
                                        <div className="kanban_bord_column">
                                            <div className="kanban_bord_column_title_wrap">
                                                <div className="kanban_bord_column_title">In Review</div> 
                                                <div><Link className="kanban_bord_column_title_btnAddTask"><AddOutlinedIcon /> Add Task</Link></div>    
                                            </div>
                                            <div className="kanban_column_card_body">
                                                <div className="kanban_column_card">
                                                    <Card className="kanban_column_task h-100">
                                                        <Card.Body>
                                                            <div className="card-options">
                                                                <Dropdown align="end">
                                                                    <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                        <Dropdown.Menu className="card-options-submenu">
                                                                            <Dropdown.Item ><Link to="#"><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                            <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                            <div className="kanban_column_task_name">
                                                                <div className="kanban_column_task_complete_icon"><CheckCircleOutlineOutlinedIcon /></div>
                                                                <div className="kanban_column_task_name_text">
                                                                    <div>Header style need to fix and add some reference for user login</div>
                                                                    <div className="kanban_column_task_project_name"><InsertDriveFileOutlinedIcon /> Euler</div>
                                                                </div>
                                                            </div>
                                                            <div className="kanban_column_task_bot">
                                                                <div className="kanban_column_task_actions">
                                                                    <Link className="kanban_column_task_date" to="#"><span className="btn-icon-task-action"><DateRangeOutlinedIcon /></span> <span>12 Aug</span></Link>
                                                                </div>
                                                                <div className="team-member-group">
                                                                    <span className="team-member">RK</span>
                                                                    <span className="team-member"><img src={require("../assets/images/users/user.jpg")} alt="User" /></span>
                                                                    <span className="team-member">JK</span>
                                                                    <span className="team-member"><img src={require("../assets/images/users/avatar2.jpg")} alt="User" /></span>
                                                                    <span className="team-member"><a href="#">+6</a></span>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                    <Card className="kanban_column_task kanban_column_task_warning h-100">
                                                        <Card.Body>
                                                            <div className="card-options">
                                                                <Dropdown align="end">
                                                                    <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                        <Dropdown.Menu className="card-options-submenu">
                                                                            <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                            <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                            <div className="kanban_column_task_name">
                                                                <div className="kanban_column_task_complete_icon"><CheckCircleOutlineOutlinedIcon /></div>
                                                                <div className="kanban_column_task_name_text">
                                                                    <div>Header style need to fix and add some reference for user login</div>
                                                                    <div className="kanban_column_task_project_name"><InsertDriveFileOutlinedIcon /> Shop Shaadi</div>
                                                                </div>
                                                            </div>
                                                            <div className="kanban_column_task_bot">
                                                                <div className="kanban_column_task_actions">
                                                                    <Link className="kanban_column_task_date" to="#"><span className="btn-icon-task-action"><DateRangeOutlinedIcon /></span> <span>15 Jul</span></Link>
                                                                </div>
                                                                <div className="team-member-group">
                                                                    <span className="team-member">RK</span>
                                                                    <span className="team-member"><img src={require("../assets/images/users/user.jpg")} alt="User" /></span>
                                                                    <span className="team-member">JK</span>
                                                                    <span className="team-member"><img src={require("../assets/images/users/avatar2.jpg")} alt="User" /></span>
                                                                    <span className="team-member"><a href="#">+6</a></span>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </div>
                                        </div>

                                        {/* ----- Completed -----  */}
                                        <div className="kanban_bord_column">
                                            <div className="kanban_bord_column_title_wrap">
                                                <div className="kanban_bord_column_title">Completed</div> 
                                                <div><Link className="kanban_bord_column_title_btnAddTask"><AddOutlinedIcon /> Add Task</Link></div>    
                                            </div>
                                            <div className="kanban_column_card_body">
                                                <div className="kanban_column_card">
                                                    <Card className="kanban_column_task kanban_column_task_done h-100">
                                                        <Card.Body>
                                                            <div className="card-options">
                                                                <Dropdown align="end">
                                                                    <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                        <Dropdown.Menu className="card-options-submenu">
                                                                            <Dropdown.Item ><Link to="#"><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                            <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                            <div className="kanban_column_task_name">
                                                                <div className="kanban_column_task_complete_icon"><CheckCircleOutlineOutlinedIcon /></div>
                                                                <div className="kanban_column_task_name_text">
                                                                    <div>Header style need to fix and add some reference for user login</div>
                                                                    <div className="kanban_column_task_project_name"><InsertDriveFileOutlinedIcon /> Sleep Nation</div>
                                                                </div>
                                                            </div>
                                                            <div className="kanban_column_task_bot">
                                                                <div className="kanban_column_task_actions">
                                                                    <Link className="kanban_column_task_date" to="#"><span className="btn-icon-task-action"><DateRangeOutlinedIcon /></span> <span>12 Aug</span></Link>
                                                                </div>
                                                                <div className="team-member-group">
                                                                    <span className="team-member">RK</span>
                                                                    <span className="team-member"><img src={require("../assets/images/users/user.jpg")} alt="User" /></span>
                                                                    <span className="team-member">JK</span>
                                                                    <span className="team-member"><img src={require("../assets/images/users/avatar2.jpg")} alt="User" /></span>
                                                                    <span className="team-member"><a href="#">+6</a></span>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                    <Card className="kanban_column_task kanban_column_task_done h-100">
                                                        <Card.Body>
                                                            <div className="card-options">
                                                                <Dropdown align="end">
                                                                    <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                        <Dropdown.Menu className="card-options-submenu">
                                                                            <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                            <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                            <div className="kanban_column_task_name">
                                                                <span className="kanban_column_task_complete_icon"><CheckCircleOutlineOutlinedIcon /></span>
                                                                <span>Header style need to fix and add some reference for user login </span>
                                                            </div>
                                                            <div className="kanban_column_task_bot">
                                                                <div className="kanban_column_task_actions">
                                                                    <Link className="kanban_column_task_date" to="#"><span className="btn-icon-task-action"><DateRangeOutlinedIcon /></span> <span>15 Jul</span></Link>
                                                                </div>
                                                                <div className="team-member-group">
                                                                    <span className="team-member">RK</span>
                                                                    <span className="team-member"><img src={require("../assets/images/users/user.jpg")} alt="User" /></span>
                                                                    <span className="team-member">JK</span>
                                                                    <span className="team-member"><img src={require("../assets/images/users/avatar2.jpg")} alt="User" /></span>
                                                                    <span className="team-member"><a href="#">+6</a></span>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
      
    )
}