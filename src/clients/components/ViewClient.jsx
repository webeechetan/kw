import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { Container, Row, Col, Card, Button, Dropdown, Spinner, Badge } from 'react-bootstrap';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';

export default function ViewClient(props) {

    const clientId = props.match.params.clientId;

    const [projects, setProjects] = useState([]);

    const [client, setClient] = useState([]);

    const [loading, setLoading] = useState(true);

    async function getClient() {
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.config.api_url}/clients/${clientId}`, header);
        return res;
    }

    useEffect(() => {
        getClient()
            .then((res) => {
                setClient(res.data.data);
                setProjects(res.data.data.projects);
                setLoading(false);
            }).catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <>
            <Header />
            <div className="main-body">
                <Sidebar />
                <div className="main-body-content">
                    {loading === true ?
                        <Col md="12" className='text-center mt-4'>
                            <Spinner as="span" animation="border" size="lg" role="status" aria-hidden="true" />
                        </Col>
                        :
                        <Container fluid>
                            <div className="main-body-header">
                                <Row className="align-items-center">
                                    <Col>
                                        <h3 className="main-body-header-title mb-0">{client.name}</h3>
                                    </Col>
                                    <Col className="text-end">
                                        <Link to="../create-client"><Button>Create Client</Button></Link>
                                    </Col>
                                </Row>
                            </div>
                            {/* Users */}
                            <Row>
                                {projects.map((project) => (
                                    <Col md="4" className="mb-4" key={project.id}>
                                        <Card className="card-style1 h-100">
                                            <Card.Body>
                                                <div className="card-options">
                                                    <Dropdown align="end">
                                                        <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                        <Dropdown.Menu className="card-options-submenu">
                                                            <Dropdown.Item >
                                                                <Link to={{
                                                                    pathname: "/edit-client/" + project.id,
                                                                    projectId: project.id,
                                                                    }}>
                                                                    <EditOutlinedIcon />
                                                                    Edit
                                                                </Link>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item  ><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                                <div className="mb-3"><img className="img-fluid img-team-dp" src='http://localhost:8000/clients/default.png' alt="Team DP Logo" width="200" /></div>
                                                <Card.Title>
                                                    <Link to={{
                                                        pathname: "../view-project/" + project.id,
                                                        projectId: project.id,
                                                        }}>
                                                        {project.name}
                                                    </Link>
                                                </Card.Title>
                                                <Card.Text className="mb-3">{project.description}</Card.Text>
                                                {/* <div className='team-name'>
                                                    {client.projects.map((project) => (
                                                        <Badge pill bg="primary" key={project.id}>{project.name}</Badge>
                                                    ))}
                                                </div> */}

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