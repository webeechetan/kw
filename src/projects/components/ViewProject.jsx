import React, { useEffect, useState } from 'react';
import user_image from '../../assets/images/users/user.jpg'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { Container, Row, Col, Card, Button, Dropdown, Tabs, Tab, Table } from 'react-bootstrap';
import axios from 'axios';
import config from '../../config';

const ViewProject = (props) => {
    const projectId = props.match.params.projectId;

    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(true);

    // task states
    const [assigned, setAssigned] = useState([]);
    const [accepted, setAccepted] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [inReview, setInReview] = useState([]);
    const [completed, setCompleted] = useState([]);


    useEffect(() => {
        getProject()
            .then((res) => {
                setProject(res.data.data);
                setAssigned(res.data.data.tasks.filter((task) => task.status === "assigned"));
                setAccepted(res.data.data.tasks.filter((task) => task.status === "accepted"));
                setInProgress(res.data.data.tasks.filter((task) => task.status === "in_progress"));
                setInReview(res.data.data.tasks.filter((task) => task.status === "in_review"));
                setCompleted(res.data.data.tasks.filter((task) => task.status === "completed"));
            }).catch((error) => {
                console.log(error);
            });
    }, []);


    async function getProject() {
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.config.api_url}/projects/${projectId}`, header);
        return res;
    }

    async function handleMoveToNextStage(id) {
        setLoading(true);
        let __token = localStorage.getItem('__token');
        const header = {
          headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.config.api_url}/moveTaskToNextStage/${id}`, header);
        getProject();
        return res;
      }
    
      async function handleMoveToCompleted(id) {
        setLoading(true);
        let __token = localStorage.getItem('__token');
        const header = {
          headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.config.api_url}/changeTaskStatusToCompleted/${id}`, header);
        getProject();
        return res;
      }






    return (
        <>
            <Header />
            <div className="main-body">
                <Sidebar />
                <div className="main-body-content">
                    <Container fluid>
                        <div className="main-body-header mb-4">
                            <Row className="align-items-center">
                                <Col>
                                    <h4 className="main-body-header-title mb-0">{project.name}</h4>
                                </Col>
                                <Col className="text-end">
                                    <Link to=""><Button>Add Task</Button></Link>
                                </Col>
                            </Row>
                            <Row>
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
                                                                        {/* <div className="d-flex align-items-center">
                                                                            {task.users.map((user, index) => (
                                                                                <div key={user.id}><img className="img-fluid clients-image" src={user.image} alt="Kaykewalk chat User" /></div>
                                                                            ))}
                                                                        </div> */}
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
                                                                        {/* <div className="d-flex align-items-center">
                                                                            {task.users.map((user, index) => (
                                                                                <div key={user.id}><img className="img-fluid clients-image" src={user.image} alt="Kaykewalk chat User" /></div>
                                                                            ))}
                                                                        </div> */}
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
                                                                        {/* <div className="d-flex align-items-center">
                                                                            {task.users.map((user, index) => (
                                                                                <div key={user.id}><img className="img-fluid clients-image" src={user.image} alt="Kaykewalk chat User" /></div>
                                                                            ))}
                                                                        </div> */}
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
                                                                        {/* <div className="d-flex align-items-center">
                                                                            {task.users.map((user, index) => (
                                                                                <div key={user.id}><img className="img-fluid clients-image" src={user.image} alt="Kaykewalk chat User" /></div>
                                                                            ))}
                                                                        </div> */}
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
                                                                        {/* <div className="d-flex align-items-center">
                                                                            {task.users.map((user, index) => (
                                                                                <div key={user.id}><img className="img-fluid clients-image" src={user.image} alt="Kaykewalk chat User" /></div>
                                                                            ))}
                                                                        </div> */}
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

                        </div>

                    </Container>

                </div>
            </div>

        </>
    )
}

export default ViewProject;