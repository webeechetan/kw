import React, { useState , useEffect } from "react";
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
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EditTask from "./EditTask";
import axios from "axios";
import { config } from "../config";

export default function TasksListView() {

    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [editShow, setEditShow] = useState(false);
    const handleEditClose = () => setEditShow(false);
    const handleEditShow = () => setEditShow(true);

    async function getTasks() {
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const response = await axios.get(`${config.api_url}/tasks`, header);
        if (response.data.success === true) {
            setTasks(response.data.data);
        }
    }


    useEffect(() => {
        getTasks();
    });

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
                                <Col>
                                    <div className="main-body-header-right">
                                        <div className="main-body-header-btn_group justify-content-end">
                                            <div className="main-body-header-btnAdd"><AddOutlinedIcon /> Add Task</div>
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
                                        </div>
                                    </div>
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
                                    { tasks.map((task, index) => (
                                    <div className="taskList_row" key={"task_list_"+task.id} onClick={ ()=>{ setSelectedTask(task); setEditShow(true); } }>
                                        <div className="taskList_col taskList_col_title">
                                            <div className="taskList_col_title_complete_icon"><CheckCircleOutlineOutlinedIcon /></div>
                                            <div className="taskList_col_title_text">
                                                <div>{task.name}</div>
                                            </div>
                                        </div>
                                        <div className="taskList_col"><div className="d-flex align-items-center justify-content-center"><InsertDriveFileOutlinedIcon /> <span className="ms-1">Acma Web</span></div></div>
                                        <div className="taskList_col">
                                            <div className="team-member-group">
                                                {task.users.map((user, index) => (
                                                <span key={"assigned_memebr_"+user.id} className="team-member"><img src={user.image} alt="User" /></span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="taskList_col">
                                            <div className="team-member-group">
                                                {task.users.map((user, index) => (
                                                <span key={"assigned_memebr_"+user.id} className="team-member"><img src={user.image} alt="User" /></span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="taskList_col">
                                            <Link className="kanban_column_task_date" to="#"><span className="btn-icon-task-action"><DateRangeOutlinedIcon /></span> <span>{task.due_date}</span></Link>
                                        </div>
                                        <div className="taskList_col">
                                            {task.status === 'completed' && <Link className="btn_status completed"><CheckCircleOutlineOutlinedIcon /> Completed</Link>}
                                            {task.status === 'assigned' && <Link className="btn_status active"><EventRepeatOutlinedIcon /> Assigned</Link>}
                                            {task.status === 'accepted' && <Link className="btn_status accepted"><EventRepeatOutlinedIcon /> Accepted</Link>}
                                            {task.status === 'in_review' && <Link className="btn_status in_review"><EventRepeatOutlinedIcon /> In Review</Link>}
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        { editShow && <EditTask show={handleEditShow} handleEditClose={handleEditClose} id={selectedTask.id} />}
                    </Container>                    
                </div>
            </div>
        </>
      
    )
}