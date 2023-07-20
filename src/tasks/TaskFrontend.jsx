import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Container, Row, Col, ListGroup, Dropdown, Card } from "react-bootstrap";
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
import { useHistory, Link } from "react-router-dom";
import { config } from "../config";
import Select from 'react-select';
import axios from 'axios';

export default function TasksFrontend(props) {

    
  // modal state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // api data state
  const [tasks, setTasks] = useState(props.tasks);
  const [pending, setPending] = useState([]);
  const [assigned, setAssigned] = useState([]);
  const [accepted, setAccepted] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [inReview, setInReview] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userOptions, setUserOptions] = useState([]);
  const [clients , setClients] = useState([]);
  const [projects , setProjects] = useState([]);

  // form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [userIds, setUserIds] = useState([]);
  const [clientId, setClientId] = useState("");
  const [projectId, setProjectId] = useState("");

  // filter
  const [filter, setFilter] = useState([
    {
      'status' : null,
      'priority' : null,
      'dueDate' : null,
      'users' : null,
      'client' : null,
      'project' : null
    }
  ]);

  useState(() => {
    getUsers();
    getTasks();
    getClients();
    getProjects();

  }, []);

  const addTask = (e) => {
    e.preventDefault();

    saveTask()
      .then((res) => {
        if (res.data.success) {
          // setToastMessage("Task added successfully");
          // setShowToast(true);
          getTasks();
          handleClose();
          // reset form
          setTitle("");
          setDescription("");
          setPriority("");
          setDueDate("");
          setShow(false);
        }
      })
      .catch((error) => {
        if (error.response.data.message == "Validation Error") {
          let messages = [];
          for (const [key, value] of Object.entries(error.response.data.data)) {
            messages.push(value[0]);
          }
          // setAlertMessages(messages);
          // setShowAlert(true);
        }
        setLoading(false);
      });
  };

  const userChangeHandler = e => {

    let ids = [];
    e.map((item) => {
      ids.push(item.value);
    });
    setUserIds(ids);
  };


  async function getUsers() {
    setLoading(true);
    let __token = localStorage.getItem('__token');
    const header = {
      headers: { Authorization: `Bearer ${__token}` }
    };
    const res = await axios.get(`${config.api_url}/users`, header);
    setUsers(res.data.data);
    let options = [];
    res.data.data.map((item) => {
      options.push({ value: item.id, label: item.name });
    });
    setUserOptions(options);
    setLoading(false);
    return res;
  }

  async function getTasks() {
    setLoading(true);
    let __token = localStorage.getItem('__token');
    const header = {
      headers: { Authorization: `Bearer ${__token}` }
    };
    const res = await axios.get(`${config.api_url}/tasks`, header);
    setTasks(res.data.data);
    setPending(res.data.data.filter((task) => task.status === "pending"));
    setCompleted(res.data.data.filter((task) => task.status === "completed"));
    setInProgress(res.data.data.filter((task) => task.status === "in_progress"));
    setInReview(res.data.data.filter((task) => task.status === "in_review"));
    setAccepted(res.data.data.filter((task) => task.status === "accepted"));
    setAssigned(res.data.data.filter((task) => task.status === "assigned"));
    setLoading(false);

  }

  async function saveTask() {
    setLoading(true);
    let __token = localStorage.getItem('__token');
    const header = {
      headers: { Authorization: `Bearer ${__token}` }
    };
    const res = await axios.post(`${config.api_url}/tasks`, {
      name: title,
      description: description,
      status: "assigned",
      priority: priority,
      due_date: dueDate,
      users: userIds,
      client_id: clientId,
      project_id: projectId
    }, header);
    // setToastMessage("Task added successfully");
    // setShowToast(true);
    // getTasks();
    // setLoading(false);
    return res;
  }


  async function changeTaskStatusToInProgress(id) {
    setLoading(true);
    let __token = localStorage.getItem('__token');
    const header = {
      headers: { Authorization: `Bearer ${__token}` }
    };
    const res = await axios.get(`${config.api_url}/changeTaskStatusToInProgress/${id}`, header);
    setToastMessage("Task status changed to in-progress");
    setShowToast(true);
    getTasks();
    setLoading(false);
    return res;

  }

  async function changeTaskStatusToCompleted(id) {
    setLoading(true);
    let __token = localStorage.getItem('__token');
    const header = {
      headers: { Authorization: `Bearer ${__token}` }
    };
    const res = await axios.get(`${config.api_url}/changeTaskStatusToCompleted/${id}`, header);
    setToastMessage("Task status changed to completed");
    setShowToast(true);
    getTasks();
    setLoading(false);
    return res;

  }

  async function deleteTask(id) {
    setLoading(true);
    let __token = localStorage.getItem('__token');
    const header = {
      headers: { Authorization: `Bearer ${__token}` }
    };
    const res = await axios.delete(`${config.api_url}/tasks/${id}`, header);
    setToastMessage("Task deleted successfully");
    setShowToast(true);
    getTasks();
    setLoading(false);
    return res;
  }

  async function handleMoveToNextStage(id) {
    setLoading(true);
    let __token = localStorage.getItem('__token');
    const header = {
      headers: { Authorization: `Bearer ${__token}` }
    };
    const res = await axios.get(`${config.api_url}/moveTaskToNextStage/${id}`, header);
    setToastMessage("Task moved to completed");
    setShowToast(true);
    getTasks();
    setLoading(false);
    return res;
  }

  async function handleMoveToCompleted(id) {
    setLoading(true);
    let __token = localStorage.getItem('__token');
    const header = {
      headers: { Authorization: `Bearer ${__token}` }
    };
    const res = await axios.get(`${config.api_url}/changeTaskStatusToCompleted/${id}`, header);
    setToastMessage("Task moved to completed");
    setShowToast(true);
    getTasks();
    setLoading(false);
    return res;
  }

  async function getClients(){
    setLoading(true);
    let __token = localStorage.getItem('__token');
    const header = {
      headers: { Authorization: `Bearer ${__token}` }
    };
    const res = await axios.get(`${config.api_url}/clients`, header);
    console.log(res.data.data);
    setClients(res.data.data);
    setLoading(false);
    return res;
  }

  async function getProjects(){
    setLoading(true);
    let __token = localStorage.getItem('__token');
    const header = {
      headers: { Authorization: `Bearer ${__token}` }
    };
    const res = await axios.get(`${config.api_url}/projects`, header);
    console.log(res.data.data);
    setProjects(res.data.data);
    setLoading(false);
    return res;
  }

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
                                                    {assigned.map((task, index) => (
                                                    <Card className="kanban_column_task kanban_column_task_overdue h-100" key={task.id}>
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
                                                                    <div>{task.name}</div>
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
                                                    ))}
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
                                                    {inProgress.map((task, index) => (
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
                                                                    <div>{task.name}</div>
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
                                                    ))}
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
                                                    {inReview.map((task, index) => (
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
                                                                    <div>{task.name}</div>
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
                                                    ))}
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
                                                    {completed.map((task, index) => (
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
                                                                    <div>{task.name}</div>
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
                                                    ))}
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