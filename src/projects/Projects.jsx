import React, {useEffect,useState} from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import  user_image from '../assets/images/users/user.jpg'
import { Container, Row, Col, Card, Button, Dropdown ,ProgressBar, Spinner, Badge} from 'react-bootstrap';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../config';

export default function Projects(props) {
    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects()
        .then((res) => {
            setProjects(res.data.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    async function getProjects(){
        setLoading(true);
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.config.api_url}/projects`,header);
        setProjects(res.data.data);
        setLoading(false);
        return res;
    }

    async function deleteProject(id){
        setLoading(true);
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.delete(`${config.config.api_url}/projects/${id}`,header);
        const index = projects.findIndex((project) => project.id === id);
        projects.splice(index, 1);
        setProjects([...projects]);
        setLoading(false);
        return res;
    }


    return (
        <>
        <Header />
        <div className="main-body">
            <Sidebar />
            <div className="main-body-content">
            { loading === true ?
                <Col md="12" className='text-center mt-4'>
                    <Spinner as="span" animation="border" size="lg" role="status" aria-hidden="true" />
                </Col>
            : 
                <Container fluid>
                    <div className="main-body-header pb-4">
                        <Row className="align-items-center">
                            <Col>
                                <h3 className="main-body-header-title mb-0">Projects</h3>
                            </Col>
                            <Col className="text-end">
                                <Link to="../create_project"><Button>Create Project</Button></Link>
                            </Col>
                            <Col>
                                <div className='d-flex justify-content-between btn-task'>
                                    <Link to="../create_project">All</Link>
                                    <Link to="../create_project">Started</Link>
                                    <Link to="../create_project">Approval</Link>
                                    <Link to="../create_project">Completed</Link>
                                </div> 
                            </Col>
                        </Row>
                    </div>
                    <Row className='pt-3'>

                        {projects.map((project) => (
                        <Col md="4">
                           <Card>
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
                                    <div className="mb-4 pe-5">
                                        <h6 className='main-body-header-title'>{project.client.name}/{project.name}</h6>
                                    </div>
                                    <div className="d-flex align-items-center mb-4">
                                        {project.users.map((user) => (
                                            <div key={user.id}><img className="img-fluid clients-image" src={user.image} alt="Kaykewalk chat User" /></div> 
                                        ))}
                                    </div>
                                    <div className='d-flex gap-5 mb-4'>
                                        <div className='d-flex gap-2'>
                                            <div><AttachFileIcon /></div>
                                            <div>5 Attach</div>
                                        </div>
                                        <div className='d-flex gap-2' align="end">
                                            <div><DateRangeOutlinedIcon  /></div>
                                            <div>2 Month</div>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-4 mb-4'>
                                        <div className='d-flex gap-2'>
                                            <div><PersonAddAltOutlinedIcon /></div>
                                            <div>{ project.users.length } Members</div>
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <div><CommentOutlinedIcon  /></div>
                                            <div>10</div>
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <Badge bg="primary" >Assigned 1 </Badge>
                                        &nbsp;
                                        <Badge bg="primary" >Accepted 1 </Badge>
                                        &nbsp;
                                        <Badge bg="warning">In Progress 1</Badge>
                                        &nbsp;
                                        <Badge className='mt-1' bg="warning" >In Review 1</Badge>
                                        &nbsp;
                                        <Badge bg="success" >Completed 1</Badge>
                                    </div>
                                    <div className='pe-2 ps-2 border-bottom mb-4'></div>
                                    <div className='d-flex justify-content-between mb-2'>
                                        <div><h6>Progress</h6></div>
                                        <div className='btn-time'><AccessTimeOutlinedIcon /> 35 Days Left</div>
                                    </div>
                                    <div className='d-flex justify-content-between gap-2'>
                                       
                                        <ProgressBar variant="secondary" now={100} />
                                        <ProgressBar variant="secondary" now={100} />
                                        <ProgressBar variant="secondary" now={20} />
                                    </div>
                             </Card.Body>
                           </Card>
                        </Col>
                        ))}
                    </Row>
                </Container>
                }
            </div>
        </div>
        </>
    )
}