import React, {useEffect,useState} from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Container, Row, Col, Card, Button, Dropdown , Spinner} from 'react-bootstrap';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
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
                    <div className="main-body-header">
                        <Row className="align-items-center">
                            <Col>
                                <h3 className="main-body-header-title mb-0">Projects</h3>
                            </Col>
                            <Col className="text-end">
                                <Link to="../create_project"><Button>Create Project</Button></Link>
                            </Col>
                        </Row>
                    </div>
                    <Card className="main-body-card">
                        <Card.Body>
                            <Row>
                                <Col md="12">
                                    <Row>
                                        <Col md="12">
                                            <h4 className="text-center title-style"><span>My Projects</span></h4>
                                        </Col>
                                        {projects.map((project) => (
                                            <Col md="4" className="mb-4" key={project.id}>
                                                <Card className="card-style1 h-100">
                                                    <Card.Body>
                                                        <div className="card-options">
                                                            <Dropdown align="end">
                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                <Dropdown.Menu className="card-options-submenu">
                                                                    <Dropdown.Item ><EditOutlinedIcon/> Edit</Dropdown.Item>
                                                                    <Dropdown.Item onClick={() => { deleteProject(project.id) }}><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                        <Card.Title> { project.name } </Card.Title>
                                                        <Card.Text className="mb-3">{project.description}</Card.Text>
                                                        {/* Members */}
                                                        <div className="team-member-group">
                                                            <span className="mt-1">Members :</span> 
                                                            {
                                                            project.users.slice(0,4).map((user,i) => (
                                                                <span className="team-member" key={user.id}>{ user.name[0] }</span>
                                                            ))}
                                                            <span className="team-member"><a href="#">+{ project.users.length < 4 ? '0' : project.users.length - 4 }</a></span> 
                                                        </div>
                                                        {/* Teams  */}
                                                        <div className="team-member-group">
                                                        <span className="mt-1">Teams :</span> 
                                                            {
                                                            project.teams.slice(0,4).map((team,i) => (
                                                                <span className="team-member" key={team.id}>{ team.name[0] }</span>
                                                            ))}
                                                            <span className="team-member"><a href="#">+{ project.teams.length < 4 ? '0' : project.teams.length - 4 }</a></span> 
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}                           
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
                }
            </div>
        </div>
        </>
    )
}