import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Container, Row, Col, ListGroup, Dropdown, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import ViewWeekOutlinedIcon from '@mui/icons-material/ViewWeekOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import AddTask from "./AddTask";

export default function TasksListView() {

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
                                        <Link className="tabNavigationBar-item tabNavigationBar-item-active"><FormatListBulletedOutlinedIcon /> List</Link>
                                        <Link className="tabNavigationBar-item" to="task-board"> <ViewWeekOutlinedIcon /> Board</Link>
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
                        <div className="taskList_bord">
                            {/* Task List View */}
                            <div className="taskList_body">
                                <div className="taskList_head">
                                    <div className="taskList_row">
                                        <div className="taskList_head_col taskList_head_col_name">Task Name</div>
                                        <div className="taskList_head_col">Project</div>
                                        <div className="taskList_head_col">Assignee</div>
                                        <div className="taskList_head_col">Notify</div>
                                        <div className="taskList_head_col">Due Date</div>
                                        <div className="taskList_head_col">Status</div>
                                    </div>
                                </div>
                                <div className="taskList_item">
                                    <div className="taskList_row">
                                        <div className="taskList_col taskList_col_name">
                                            <div className="kanban_column_task_complete_icon"><CheckCircleOutlineOutlinedIcon /></div>
                                            <div className="kanban_column_task_name_text">
                                                <div>Header style need to fix and add some reference for user login</div>
                                                <div className="kanban_column_task_project_name"><InsertDriveFileOutlinedIcon /> Acma Web</div>
                                            </div>
                                        </div>
                                        <div className="taskList_col">
                                            <div className="team-member-group">
                                                <span className="team-member">RK</span>
                                                <span className="team-member"><img src={require("../assets/images/users/user.jpg")} alt="User" /></span>
                                                <span className="team-member">JK</span>
                                                <span className="team-member"><img src={require("../assets/images/users/avatar2.jpg")} alt="User" /></span>
                                                <span className="team-member"><a href="#">+6</a></span>
                                            </div>
                                        </div>
                                        <div className="taskList_col">
                                            <div className="team-member-group">
                                                <span className="team-member">RK</span>
                                                <span className="team-member"><img src={require("../assets/images/users/user.jpg")} alt="User" /></span>
                                                <span className="team-member">JK</span>
                                            </div>
                                        </div>
                                        <div className="taskList_col">
                                            <Link className="kanban_column_task_date" to="#"><span className="btn-icon-task-action"><DateRangeOutlinedIcon /></span> <span>22 Jan</span></Link>
                                        </div>
                                        <div className="taskList_col">
                                            <Link className="btn_status active"><EventRepeatOutlinedIcon /> In Progress</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>                    
                </div>
                {/* <AddTask /> */}
            </div>
        </>
      
    )
}