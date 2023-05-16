import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Spinner, Toast, ToastContainer, ListGroup, Badge, Card, Modal } from "react-bootstrap";
import Select from 'react-select';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { config } from "../config";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import PendingActionsIcon from '@mui/icons-material/PendingActions';






export default function TaskManager(props) {

  // modal state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // api data state
  const [tasks, setTasks] = useState(props.tasks);
  const [pending, setPending] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [inProgress, setInProgress] = useState([]);
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
        const res = await axios.get(`${config.api_url}/users`,header);
        setUsers(res.data.data);
        let options = [];
        res.data.data.map((item) => {
            options.push({value: item.id, label: item.name});
        });
        setUserOptions(options);
        setLoading(false);
        return res;
    }

    async function getTasks(){
      setLoading(true);
      let __token = localStorage.getItem('__token');
      const header = {
          headers: { Authorization: `Bearer ${__token}` }
      };
      const res = await axios.get(`${config.api_url}/tasks`,header);
      setTasks(res.data.data);
      setPending(res.data.data.filter((task) => task.status === "pending"));
      setCompleted(res.data.data.filter((task) => task.status === "completed"));
      setInProgress(res.data.data.filter((task) => task.status === "in-progress"));
      setLoading(false);

    }

    async function saveTask(){
      setLoading(true);
      let __token = localStorage.getItem('__token');
      const header = {
          headers: { Authorization: `Bearer ${__token}` }
      };
      const res = await axios.post(`${config.api_url}/tasks`,{
        name: title,
        description: description,
        status: "pending",
        priority: priority,
        dueDate: dueDate,
        users: userIds,
      },header);
      // setToastMessage("Task added successfully");
      // setShowToast(true);
      // getTasks();
      // setLoading(false);
      return res;
    }


    async function changeTaskStatusToInProgress(id){
      setLoading(true);
      let __token = localStorage.getItem('__token');
      const header = {
          headers: { Authorization: `Bearer ${__token}` }
      };
      const res = await axios.get(`${config.api_url}/changeTaskStatusToInProgress/${id}`,header);
      setToastMessage("Task status changed to in-progress");
      setShowToast(true);
      getTasks();
      setLoading(false);
      return res;
    
    }

    async function changeTaskStatusToCompleted(id){
      setLoading(true);
      let __token = localStorage.getItem('__token');
      const header = {
          headers: { Authorization: `Bearer ${__token}` }
      };
      const res = await axios.get(`${config.api_url}/changeTaskStatusToCompleted/${id}`,header);
      setToastMessage("Task status changed to completed");
      setShowToast(true);
      getTasks();
      setLoading(false);
      return res;

    }

    async function deleteTask(id){
      setLoading(true);
      let __token = localStorage.getItem('__token');
      const header = {
          headers: { Authorization: `Bearer ${__token}` }
      };
      const res = await axios.delete(`${config.api_url}/tasks/${id}`,header);
      setToastMessage("Task deleted successfully");
      setShowToast(true);
      getTasks();
      setLoading(false);
      return res;
    }


  return (
    
    <div className="main-body">
       { loading === true ?
                <Col md="12" className='text-center mt-4'>
                    <Spinner as="span" animation="border" size="lg" role="status" aria-hidden="true" />
                </Col> : 
      <div className="main-body-content">
        <div className="pull right">
          <Button variant="primary" onClick={handleShow}>Add Task</Button>
        </div>
        <ToastContainer position="top-end" className="p-3">
            <Toast show={showToast} bg="success" onClose={() => setShowToast(false)}>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                    />
                    <strong className="me-auto">Success</strong>
                    {/* <small>11 mins ago</small> */}
                </Toast.Header>
                <Toast.Body>
                    {toastMessage}
                </Toast.Body>
            </Toast>
        </ToastContainer>

        <Row className="mt-4" >
          <Col md="4">
            <h3 className="main-body-header-title mb-0">Pending</h3>
            {pending.map((task) => (
              <Card key={task.id} className="mt-1">
                <Card.Body>
                  <h6 className="d-flex justify-content-between align-items-start">{task.name} 
                  { (task.priority === "high") ?
                      <Badge bg="danger" pill className="pull-right small">{task.priority}</Badge> :
                    (task.priority === "medium") ?
                      <Badge bg="warning" pill className="pull-right small">{task.priority}</Badge> :
                      <Badge bg="success" pill className="pull-right small">{task.priority}</Badge>
                  }
                  </h6>
                  <hr />
                  {task.description}
                  <hr />
                    <div className="div">
                  { task.users.map((user) => (
                      <Badge bg="info"  pill key={user.id} className="mr-1 small">{user.name}</Badge>
                  ))}
                    </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button variant="primary" size="sm"> <EditIcon /></Button>
                      <Button variant="danger" size="sm"> <DeleteIcon  onClick={ ()=>{ deleteTask(task.id) } } /></Button>
                      <Button variant="warning" size="sm" title="Check To Start" onClick={ ()=>{ changeTaskStatusToInProgress(task.id) } } ><PendingActionsIcon /></Button>
                    </div>
                    <small className="text-muted">{task.dueDate}</small>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>
          
          <Col md="4">
            <h3 className="main-body-header-title mb-0">In Progress</h3>
            {inProgress.map((task) => (
              <Card key={task.id} className="mt-1">
                <Card.Body>
                  <h6 className="d-flex justify-content-between align-items-start">{task.name} 
                  { (task.priority === "high") ?
                      <Badge bg="danger" pill className="pull-right small">{task.priority}</Badge> :
                    (task.priority === "medium") ?
                      <Badge bg="warning" pill className="pull-right small">{task.priority}</Badge> :
                      <Badge bg="success" pill className="pull-right small">{task.priority}</Badge>
                  }
                  </h6>
                  <hr />
                  {task.description}
                  <hr />
                  { task.users.map((user) => (
                    <Badge bg="info"  pill key={user.id} className="mr-1 small">{user.name}</Badge>
                  ))}
                  <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                      <Button variant="primary" size="sm"> <EditIcon /></Button>
                      <Button variant="danger" size="sm"> <DeleteIcon onClick={ ()=>{ deleteTask(task.id) } }/></Button>
                      <Button variant="info" size="sm" title="Check To Complete" onClick={ ()=>{ changeTaskStatusToCompleted(task.id) } }><RadioButtonUncheckedIcon /></Button>
                    </div>
                    <small className="text-muted">{task.dueDate}</small>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>

          <Col md="4">
            <h3 className="main-body-header-title mb-0">Completed</h3>
            {completed.map((task) => (
              <Card key={task.id} className="mt-1">
                <Card.Body>
                  <h6 className="d-flex justify-content-between align-items-start">{task.name} 
                  { (task.priority === "high") ?
                      <Badge bg="danger" pill className="pull-right small">{task.priority}</Badge> :
                    (task.priority === "medium") ?
                      <Badge bg="warning" pill className="pull-right small">{task.priority}</Badge> :
                      <Badge bg="success" pill className="pull-right small">{task.priority}</Badge>
                  }
                  </h6>
                  <hr />
                  {task.description}
                  <hr />
                  { task.users.map((user) => (
                    <Badge bg="info"  pill key={user.id} className="mr-1 small">{user.name}</Badge>
                  ))}
                  <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                      <Button variant="primary" size="sm"> <EditIcon /></Button>
                      <Button variant="danger" size="sm"> <DeleteIcon onClick={ ()=>{ deleteTask(task.id) } }/></Button>
                      <Button variant="success" size="sm" title="Check To Complete"><CheckCircleOutlineIcon /></Button>
                    </div>
                    <small className="text-muted">{task.dueDate}</small>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
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
      </div>
      }
    </div >
  );
}
