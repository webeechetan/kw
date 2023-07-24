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
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ItemTypes } from './ItemTypes';
import AddTask from "./AddTask";
import { set } from "date-fns";

export default function TasksFrontend() {

    
  // modal state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // api data state
  const [tasks, setTasks] = useState();
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
    return res;
    
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

  async function changeTaskStatus(id,status){
    setLoading(true);
    let __token = localStorage.getItem('__token');
    const header = {
      headers: { Authorization: `Bearer ${__token}` }
    };

    const res = await axios.get(`${config.api_url}/changeTaskStatus/${id}/${status}`, header);
    setToastMessage("Task status changed");
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
    setProjects(res.data.data);
    setLoading(false);
    return res;
  }


  const TaskCard = ({ task }) => {
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.TASK,
        item: { task: task },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
  
    return (
      <Card  ref={drag} className={`kanban_column_task kanban_column_task_overdue h-100 ${isDragging ? 'dragging' : ''}`} onClick={handleShow}>
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
                  <Link className="kanban_column_task_date" to="#"><span className="btn-icon-task-action"><DateRangeOutlinedIcon /></span> <span>{task.due_date}</span></Link>
              </div>

              <div className="team-member-group">
                {task.users.map((user,index) => (
                    index < 2 &&
                    <span title={user.name} key={"user_"+user.id} className="team-member"><img src={user.image} alt="User" /></span>
                ))}
                {
                    task.users.length > 2 &&
                
                <span className="team-member">
                    <a href="#">
                        +{ task.users.length - 2}
                    </a>
                </span>
                }
              </div>
          </div>
      </Card.Body>
    </Card>
    );
  };

  const TaskColumn = ({ tasks, columnStatus, columnName }) => {
 
    const [{ isOver }, drop] = useDrop({
      accept: ItemTypes.TASK,
      drop: (item, monitor) => {
        let status = columnName;
        if(status == "Assigned"){
            status = "assigned";
        }else if(status == "Accepted"){
            status = "accepted";
        }else if(status == "In Review"){
            status = "in_review";
        }else if(status == "Completed"){
            status = "completed";
        }
        setStatus(status);
        const didDrop = monitor.didDrop();
        if (didDrop) {
          return;
        }
        if (item.task.status !== columnStatus) {
            changeTaskStatus(item.task.id,status);
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    });

    return (
        <div ref={drop} className={`kanban_bord_column ${columnStatus}`}>
        <div className="kanban_bord_column_title_wrap">
            <div className="kanban_bord_column_title">{columnName}</div> 
            <div onClick={ ()=>{ handleShow(true); setStatus(columnName); } } className="kanban_bord_column_title_btnAddTask"><AddOutlinedIcon /> Add Task</div>    
        </div>
        <div className="kanban_column_card_body">
            <div className="kanban_column_card">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
      </div>
    );
  };

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
                                <Link className="tabNavigationBar-item" to="task-list"><FormatListBulletedOutlinedIcon /> List</Link>
                                <div className="tabNavigationBar-item tabNavigationBar-item-active"> <ViewWeekOutlinedIcon /> Board</div>
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
                                                    {users.map((user) => (
                                                    <span key={"user_filter"+user.id} className="filterSort_body_btn_action"><PersonOutlineOutlinedIcon />{user.name}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
                <DndProvider backend={HTML5Backend}>
                <div className="kanban_bord">
                    {/* ----- Bord KanBan View ----- */}
                    <div className="kanban_bord_body">
                        <div className="kanban_bord_scrollbar">
                            <div className="kanban_bord_body_columns">

                                {/* ----- Assigned -----  */}
                                <TaskColumn tasks={assigned} key={'task_assigned'} columnStatus="kanban_bord_column_assigned" columnName="Assigned" />
                                {/* Accepted */}
                                <TaskColumn tasks={accepted} key={'task_accepted'} columnStatus="kanban_bord_column_accepted" columnName="Accepted" />
                                {/* In Review */}
                                <TaskColumn tasks={inReview} key={'task_in_review'} columnStatus="kanban_bord_column_in_review" columnName="In Review" />
                                {/* completed */}
                                <TaskColumn tasks={completed} key={'task_completed'} columnStatus="kanban_bord_column_completed" columnName="Completed" />
                            
                            </div>
                        </div>
                    </div>
                </div>
                </DndProvider>
            </Container>
        </div>
        { show ? <AddTask show={show} handleClose={handleClose} status={status} addTask={addTask} title={title} setTitle={setTitle} description={description} setDescription={setDescription} priority={priority} setPriority={setPriority} dueDate={dueDate} setDueDate={setDueDate} userOptions={userOptions} userChangeHandler={userChangeHandler} clients={clients} setClientId={setClientId} projects={projects} setProjectId={setProjectId} /> : null }

    </div>
</>

  );

}