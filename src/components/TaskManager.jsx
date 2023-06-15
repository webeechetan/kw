import React, { useState, useEffect } from "react";
// import { Container, Dropdown, Row, Col, Button, Form, Spinner, Toast, ToastContainer, ListGroup, Badge, Card, Modal } from "react-bootstrap";
import Select from 'react-select';
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";
import { config } from "../config";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import user_image from '../assets/images/users/user.jpg'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { Container, Row, Col, Card, Button, Dropdown, Tabs, Tab, Table, Modal, Form } from 'react-bootstrap';






export default function TaskManager(props) {

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

  // form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [userIds, setUserIds] = useState([]);

  useState(() => {
    getUsers();
    getTasks();

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
      dueDate: dueDate,
      users: userIds,
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




  return (
    <>
      <Row>
        <Col className="text-end">
          <div className="pull right">
            <Button variant="primary" onClick={handleShow}>Add Task</Button>
          </div>
        </Col>
        <div className="tab-view mt-4">
          <Tabs defaultActiveKey="second">
            <Tab eventKey="first" title="List">
              <div className="tab-view-list mt-4">
                <h6 className="main-body-header-title mb-4">Assigned</h6>
                <Card className='border-0'>
                  <Card.Body className='p-0'>
                    <Table responsive="sm">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Task Name</th>
                          <th>Priority</th>
                          <th>Assign</th>
                          <th>Due Date</th>
                          <th>Attachment</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><CheckBoxOutlineBlankOutlinedIcon /></td>
                          <td>acma</td>
                          <td>High</td>
                          <td>Ajay</td>
                          <td>10 June</td>
                          <td><AttachFileOutlinedIcon /></td>
                          <td><EditOutlinedIcon /></td>
                          <td><DeleteOutlineOutlinedIcon /></td>
                        </tr>
                        <tr>
                          <td><CheckBoxOutlineBlankOutlinedIcon /></td>
                          <td>acma</td>
                          <td>High</td>
                          <td>Ajay</td>
                          <td>10 June</td>
                          <td><AttachFileOutlinedIcon /></td>
                          <td><EditOutlinedIcon /></td>
                          <td><DeleteOutlineOutlinedIcon /></td>
                        </tr>
                        <tr>
                          <td><CheckBoxOutlineBlankOutlinedIcon /></td>
                          <td>acma</td>
                          <td>High</td>
                          <td>Ajay</td>
                          <td>10 June</td>
                          <td><AttachFileOutlinedIcon /></td>
                          <td><EditOutlinedIcon /></td>
                          <td><DeleteOutlineOutlinedIcon /></td>
                        </tr>
                        <tr>
                          <td><CheckBoxOutlineBlankOutlinedIcon /></td>
                          <td>acma</td>
                          <td>High</td>
                          <td>Ajay</td>
                          <td>10 June</td>
                          <td><AttachFileOutlinedIcon /></td>
                          <td><EditOutlinedIcon /></td>
                          <td><DeleteOutlineOutlinedIcon /></td>
                        </tr>

                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </div>

            </Tab>
            <Tab eventKey="second" title="Board">
              <Row className='flex-row flex-nowrap scrolling-wrapper mt-4'>
                {/* Assigned Task List */}

                <Col xs="4" className='mb-4'>
                  <h6 className="main-body-header-title mb-0">Assigned</h6>
                  <div className="view-task mt-4">
                  {assigned.map((task, index) => (   
                    <Card className="card-style1 h-100 mb-4" key={task.id}>
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
                        <div className="mb-3 pe-5">{task.name}</div>

                        <div className="d-flex align-items-center justify-content-between">
                          <div className="flex d-flex align-items-center">
                            <span className="text-yellow">Today</span>
                          </div>
                          <div className="d-flex align-items-center">
                            {task.users.map((user, index) => (
                              <div key={user.id}><img className="img-fluid clients-image" src={user.image} alt="Kaykewalk chat User" /></div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-3">
                            {task.status !== 'completed' && (
                              <>
                                <button className="btn btn-primary btn-sm " onClick={() => handleMoveToNextStage(task.id)}>Accept</button>&nbsp;
                                <button className="btn btn-primary btn-sm" onClick={() => handleMoveToCompleted(task.id)}>Mark as Completed</button>
                              </>
                            )}
                          </div>
                      </Card.Body>
                    </Card>
                    ))}
                  </div>
                </Col>


                {/* Accepted task list */}


                <Col xs="4" className='mb-4'>
                  <h6 className="main-body-header-title mb-0">Accepted</h6>
                  <div className="view-task mt-4">

                    {accepted.map((task, index) => (
                      <Card className="card-style1 h-100 mb-4" key={task.id}>
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
                          <div className="mb-3 pe-5">{task.name}</div>

                          <div className="d-flex align-items-center justify-content-between">
                            <div className="flex d-flex align-items-center">
                              <span className="text-orange">Today</span>
                            </div>
                            <div className="d-flex align-items-center">
                              {task.users.map((user, index) => (
                                <div key={user.id}><img className="img-fluid clients-image" src={user.image} alt="Kaykewalk chat User" /></div>
                              ))}
                            </div>
                          </div>

                          <div className="mt-3">
                            {task.status !== 'completed' && (
                              <>
                                <button className="btn btn-primary btn-sm " onClick={() => handleMoveToNextStage(task.id)}>Move in progress</button>&nbsp;
                                <button className="btn btn-primary btn-sm" onClick={() => handleMoveToCompleted(task.id)}>Mark as Completed</button>
                              </>
                            )}
                          </div>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </Col>

                {/* In Progress Task List */}

                <Col xs="4" className='mb-4'>
                  <h6 className="main-body-header-title mb-0">In Progress</h6>
                  <div className="view-task mt-4">

                    {inProgress.map((task, index) => (
                      <Card className="card-style1 h-100 mb-4" key={task.id}>
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
                          <div className="mb-3 pe-5">{task.name}</div>

                          <div className="d-flex align-items-center justify-content-between">
                            <div className="flex d-flex align-items-center">
                              <span className="text-primary">1 June</span>
                            </div>
                            <div className="d-flex align-items-center">
                              {task.users.map((user, index) => (
                                <div key={user.id}><img className="img-fluid clients-image" src={user.image} alt="Kaykewalk chat User" /></div>
                              ))}
                            </div>
                          </div>
                          <div className="mt-3">
                            {task.status !== 'completed' && (
                              <>
                                <button className="btn btn-primary btn-sm " onClick={() => handleMoveToNextStage(task.id)}>Move in review</button>&nbsp;
                                <button className="btn btn-primary btn-sm" onClick={() => handleMoveToCompleted(task.id)}>Mark as Completed</button>
                              </>
                            )}
                          </div>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </Col>

                {/* In Review Task List */}

                <Col xs="4" className='mb-4'>
                  <h6 className="main-body-header-title mb-0">In Review</h6>
                  <div className="view-task mt-4">

                    {inReview.map((task, index) => (

                      <Card className="card-style1 h-100 mb-4" key={task.id}>
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
                          <div className="mb-3 pe-5">{task.name}</div>

                          <div className="d-flex align-items-center justify-content-between">
                            <div className="flex d-flex align-items-center">
                              <span className="text-secondary">1 June</span>
                            </div>
                            <div className="d-flex align-items-center">
                              {task.users.map((user, index) => (
                                <div key={user.id}><img className="img-fluid clients-image" src={user.image} alt="Kaykewalk chat User" /></div>
                              ))}
                            </div>
                          </div>
                          <div className="mt-3">
                            {task.status !== 'completed' && (
                              <>
                                <button className="btn btn-primary btn-sm " onClick={() => handleMoveToNextStage(task.id)}>Move to completed</button>&nbsp;
                              </>
                            )}
                          </div>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </Col>

                {/* Completed Task List */}

                <Col xs="4" className='mb-4'>
                  <h6 className="main-body-header-title mb-0">Completed</h6>
                  <div className="view-task mt-4">
                    {completed.map((task, index) => (
                      <Card className="card-style1 h-100 mb-4" key={task.id}>
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
                          <div className="mb-3 pe-5">{task.name}</div>

                          <div className="d-flex align-items-center justify-content-between">
                            <div className="flex d-flex align-items-center">
                              <span className="text-success">1 June</span>
                            </div>
                            <div className="d-flex align-items-center">
                              {task.users.map((user, index) => (
                                <div key={user.id}><img className="img-fluid clients-image" src={user.image} alt="Kaykewalk chat User" /></div>
                              ))}
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>

                </Col>
              </Row>
            </Tab>

          </Tabs>
        </div>
      </Row>

      {/* Add New Task Modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form onSubmit={addTask} method="POST">
          <Modal.Body>
            <Card>
              <Card.Body>
                <Row>
                  <Col md="4">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Title</Form.Label>
                      <Form.Control type="text" placeholder="Enter title" onChange={(e) => { setTitle(e.target.value) }} value={title} />
                    </Form.Group>
                  </Col>
                  <Col md="4">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Priority</Form.Label>
                      <Form.Select aria-label="Default select example" onChange={(e) => { setPriority(e.target.value) }}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md="4">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Due Date</Form.Label>
                      <Form.Control type="date" placeholder="Enter title" onChange={(e) => { setDueDate(e.target.value) }} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Description</Form.Label>
                      <Form.Control as="textarea" rows={3} onChange={(e) => { setDescription(e.target.value) }} value={description} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Assign To</Form.Label>
                      <Select options={userOptions} onChange={userChangeHandler} isMulti />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

    </>
  )

  // return (

  //   <div className="task-body">
  //      { loading === true ?
  //               <Col md="12" className='text-center mt-4'>
  //                   <Spinner as="span" animation="border" size="lg" role="status" aria-hidden="true" />
  //               </Col> : 
  //       <div className="task-body-content">
  //           <div className="main-body-header mb-4">
  //                 <Row className="align-items-center">
  //                     <Col>
  //                         <h4 className="main-body-header-title mb-0">My Tasks</h4>
  //                     </Col>
  //                     <Col className="text-end">
  //                       <div className="pull right">
  //                           <Button variant="primary" onClick={handleShow}>Add Task</Button>
  //                       </div>
  //                     </Col>
  //                 </Row>
  //           </div>

  //       <ToastContainer position="top-end" className="p-3">
  //           <Toast show={showToast} bg="success" onClose={() => setShowToast(false)}>
  //               <Toast.Header>
  //                   <img
  //                   src="holder.js/20x20?text=%20"
  //                   className="rounded me-2"
  //                   alt=""
  //                   />
  //                   <strong className="me-auto">Success</strong>
  //                   {/* <small>11 mins ago</small> */}
  //               </Toast.Header>
  //               <Toast.Body>
  //                   {toastMessage}
  //               </Toast.Body>
  //           </Toast>
  //       </ToastContainer>

  //       <Row className="mt-4" >
  //         <Col md="4">
  //           <h6 className="main-body-header-title mb-0">Pending</h6>
  //           {pending.map((task) => (
  //             <Card key={task.id} className="card-style1 h-100 mb-4 mt-4">
  //             <Card.Body>
  //                 <div className="card-options">
  //                     <Dropdown align="end">
  //                         <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
  //                         <Dropdown.Menu className="card-options-submenu">
  //                         <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
  //                                 <Dropdown.Item><DeleteOutlineOutlinedIcon onClick={() => { deleteTask(task.id) }} /> Delete</Dropdown.Item>
  //                                 <Dropdown.Item><PendingActionsIcon title="Check To Start" onClick={ ()=>{ changeTaskStatusToInProgress(task.id) } } />Check To Start</Dropdown.Item>
  //                         </Dropdown.Menu>
  //                     </Dropdown>
  //                 </div>
  //                 <div className="mb-3 pe-5">
  //                     <h6 className="d-flex justify-content-between align-items-start">{task.name}</h6>
  //                 </div>
  //                 <div className="task-description pb-2">
  //                    {task.description}
  //                 </div>


  //                 <div className="d-flex justify-content-between">
  //                   <div className="div">
  //                             { task.users.map((user) => (
  //                                 <Badge bg="primary"  pill key={user.id} className="mr-1 small">{user.name}</Badge>
  //                             ))}
  //                   </div>
  //                   <div>{task.dueDate}</div>
  //                   { (task.priority === "high") ?
  //                               <Badge bg="danger" pill className="pull-right small">{task.priority}</Badge> :
  //                             (task.priority === "medium") ?
  //                               <Badge bg="warning" pill className="pull-right small">{task.priority}</Badge> :
  //                               <Badge bg="success" pill className="pull-right small">{task.priority}</Badge>
  //                    }           
  //                 </div>
  //             </Card.Body>
  //         </Card>
  //           ))}
  //         </Col>
  //         <Col md="4">
  //           <h6 className="main-body-header-title mb-0">In Progress</h6>
  //           {inProgress.map((task) => (
  //            <Card key={task.id} className="card-style1 h-100 mt-4 mb-4">
  //               <Card.Body>
  //                   <div className="card-options">
  //                       <Dropdown align="end">
  //                           <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
  //                           <Dropdown.Menu className="card-options-submenu">
  //                           <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
  //                                   <Dropdown.Item><DeleteOutlineOutlinedIcon onClick={() => { deleteTask(task.id) }} /> Delete</Dropdown.Item>
  //                                   <Dropdown.Item><RadioButtonUncheckedIcon title="Check To Complete" onClick={ ()=>{ changeTaskStatusToCompleted(task.id) } } />Check To Done</Dropdown.Item>
  //                           </Dropdown.Menu>
  //                       </Dropdown>
  //                   </div>
  //                   <div className="mb-3 pe-5">
  //                       <h6 className="d-flex justify-content-between align-items-start">{task.name} 

  //                       </h6>
  //                   </div>
  //                   <div className="task-description pb-2">
  //                       {task.description}
  //                   </div>


  //                     <div className="task-priority d-flex justify-content-between">
  //                         <div className="div">
  //                                 { task.users.map((user) => (
  //                                     <Badge bg="primary"  pill key={user.id} className="mr-1 small">{user.name}</Badge>
  //                                 ))}
  //                       </div>
  //                         <div className="text-muted">{task.dueDate}</div>
  //                     { (task.priority === "high") ?
  //                                 <Badge bg="danger" pill className="pull-right small">{task.priority}</Badge> :
  //                               (task.priority === "medium") ?
  //                                 <Badge bg="warning" pill className="pull-right small">{task.priority}</Badge> :
  //                                 <Badge bg="success" pill className="pull-right small">{task.priority}</Badge>
  //                       }           
  //                   </div>


  //               </Card.Body>
  //            </Card>
  //           ))}
  //         </Col>

  //         <Col md="4">
  //           <h6 className="main-body-header-title mb-0">Completed</h6>
  //           {completed.map((task) => (
  //             <Card key={task.id} className="card-style1 h-100 mt-4 mb-4">
  //             <Card.Body>
  //                 <div className="card-options">
  //                     <Dropdown align="end">
  //                         <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
  //                         <Dropdown.Menu className="card-options-submenu">
  //                         <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
  //                                 <Dropdown.Item><DeleteOutlineOutlinedIcon onClick={() => { deleteTask(task.id) }} /> Delete</Dropdown.Item>
  //                                 <Dropdown.Item><CheckCircleOutlineIcon title="Check To Complete" onClick={ ()=>{ changeTaskStatusToCompleted(task.id) } } />Check To Done</Dropdown.Item>
  //                         </Dropdown.Menu>
  //                     </Dropdown>
  //                 </div>
  //                 <div className="mb-3 pe-5">
  //                     <h6 className="d-flex justify-content-between align-items-start">{task.name} 

  //                     </h6>
  //                 </div>
  //                 <div className="task-description pb-2">
  //                     {task.description}
  //                 </div>


  //                   <div className="task-priority d-flex justify-content-between">
  //                       <div className="div">
  //                               { task.users.map((user) => (
  //                                   <Badge bg="primary"  pill key={user.id} className="mr-1 small">{user.name}</Badge>
  //                               ))}
  //                     </div>
  //                       <div className="text-muted">{task.dueDate}</div>
  //                   { (task.priority === "high") ?
  //                               <Badge bg="danger" pill className="pull-right small">{task.priority}</Badge> :
  //                             (task.priority === "medium") ?
  //                               <Badge bg="warning" pill className="pull-right small">{task.priority}</Badge> :
  //                               <Badge bg="success" pill className="pull-right small">{task.priority}</Badge>
  //                     }           
  //                 </div>


  //             </Card.Body>
  //          </Card>
  //           ))}
  //         </Col>
  //       </Row>
  //       <Modal show={show} onHide={handleClose}>
  //         <Modal.Header closeButton>
  //           <Modal.Title>Modal heading</Modal.Title>
  //         </Modal.Header>
  //         <Form onSubmit={addTask} method="POST">
  //           <Modal.Body>
  //             <Card>
  //               <Card.Body>
  //                 <Row>
  //                   <Col md="4">
  //                     <Form.Group className="mb-3" controlId="formBasicEmail">
  //                       <Form.Label>Title</Form.Label>
  //                       <Form.Control type="text" placeholder="Enter title" onChange={(e) => { setTitle(e.target.value) }} value={title} />
  //                     </Form.Group>
  //                   </Col>
  //                   <Col md="4">
  //                     <Form.Group className="mb-3" controlId="formBasicEmail">
  //                       <Form.Label>Priority</Form.Label>
  //                       <Form.Select aria-label="Default select example" onChange={(e) => { setPriority(e.target.value) }}>
  //                         <option value="high">High</option>
  //                         <option value="medium">Medium</option>
  //                         <option value="low">Low</option>
  //                       </Form.Select>
  //                     </Form.Group>
  //                   </Col>
  //                   <Col md="4">
  //                     <Form.Group className="mb-3" controlId="formBasicEmail">
  //                       <Form.Label>Due Date</Form.Label>
  //                       <Form.Control type="date" placeholder="Enter title" onChange={(e) => { setDueDate(e.target.value) }} />
  //                     </Form.Group>
  //                   </Col>
  //                 </Row>
  //                 <Row>
  //                   <Col md="12">
  //                     <Form.Group className="mb-3" controlId="formBasicEmail">
  //                       <Form.Label>Description</Form.Label>
  //                       <Form.Control as="textarea" rows={3} onChange={(e) => { setDescription(e.target.value) }} value={description} />
  //                     </Form.Group>
  //                   </Col>
  //                 </Row>
  //                 <Row>
  //                   <Col md="12">
  //                     <Form.Group className="mb-3" controlId="formBasicEmail">
  //                       <Form.Label>Assign To</Form.Label>
  //                       <Select options={userOptions} onChange={userChangeHandler} isMulti />
  //                     </Form.Group>
  //                   </Col>
  //                 </Row>
  //               </Card.Body>
  //             </Card>
  //           </Modal.Body>
  //           <Modal.Footer>
  //             <Button variant="secondary" onClick={handleClose}>
  //               Close
  //             </Button>
  //             <Button variant="primary" type="submit">
  //               Save Changes
  //             </Button>
  //           </Modal.Footer>
  //         </Form>
  //       </Modal>
  //     </div>
  //     }
  //   </div >
  // );
}
