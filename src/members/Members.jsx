import React, {useState, useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from 'react-router-dom';
import config from '../config';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Dropdown, Tabs, Tab, Table, Modal, Form, Spinner, Badge, Toast, ToastContainer} from 'react-bootstrap';


export default function Members() {

    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showInviteModal, setShowInviteModal] = useState(false);
    const [email, setEmail] = useState('');
    const handleCloseInviteModal = () => setShowInviteModal(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessages, setAlertMessages] = useState([]);

    


    useEffect(() => {
        getMembers()
        .then((res) => {
            setMembers(res.data.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    async function getMembers(){
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.config.api_url}/users`,header);
        return res;
    }

    async function deleteMember(id){
        setLoading(true);
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.delete(`${config.config.api_url}/users/${id}`,header);
        const index = members.findIndex((member) => member.id === id);
        members.splice(index, 1);
        setMembers([...members]);
        setLoading(false);
        return res;
    }

    async function inviteMember(){
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.post(`${config.config.api_url}/users/invite`,{email:email},header);
        return res;
    }

    const handleInviteForm = (e) => {
        e.preventDefault();
        inviteMember()
        .then((res) => {
            if(res.data.success === 'true'){
                setShowInviteModal(false);
                setEmail('');
                setAlertMessages([]);
                setShowAlert(false);
            }
        }).catch((error) => {
            if (error.response.data.message === 'Validation Error') {
                let messages = [];
                for (const [key, value] of Object.entries(error.response.data.data)) {
                    messages.push(value[0]);
                }
                setAlertMessages(messages);
                setShowAlert(true);
              }              
        });
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
                                <h3 className="main-body-header-title mb-0">Member</h3>
                            </Col>
                                <Col className="text-end">
                                    <Link to="../addmember"><Button>Add Member</Button></Link> &nbsp;        
                                    <Button onClick={ ()=>{ setShowInviteModal(true) } }>Invite Via Email</Button>       
                            </Col>
                        </Row>
                    </div>
                    <ToastContainer position="top-end" className="p-3">
                        <Toast show={showAlert} bg="danger" onClose={() => setShowAlert(false)}>
                            <Toast.Header>
                                <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                                />
                                <strong className="me-auto">Errors</strong>
                                {/* <small>11 mins ago</small> */}
                            </Toast.Header>
                            <Toast.Body>
                               {alertMessages.map((message,i) => {
                                      return <p key={i}>{message}</p>
                                 })}
                            </Toast.Body>
                        </Toast>
                    </ToastContainer>
                    {/* Users */}
                    <Card className="main-body-card">
                        <Card.Body>
                            <Row>
                                {members.map((member) => ( 
                                    <Col md="4" className="mb-4" key={member.id}>
                                        <Card className="card-style1">
                                            <Card.Body>
                                            <div className="card-options">
                                                <Dropdown align="end">
                                                        <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                        <Dropdown.Menu className="card-options-submenu">
                                                        <Dropdown.Item ><Link to={{ 
                                                            pathname: "/edit_member/"+member.id, 
                                                            memberId: member.id,
                                                            }}><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                            <Dropdown.Item onClick={ ()=>{ deleteMember(member.id) } }><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                </Dropdown>
                                                </div>
                                                <div className="mb-3"><img className="img-fluid img-townhall-dp" src={member.image} alt="Team DP Logo" width="70" /></div>
                                                    <Card.Title><a href="#">{member.name}</a></Card.Title>
                                                    <Card.Text>UI/UX Desginer</Card.Text>
                                                    <div className='team-name'>
                                                        {member.teams.map((team) => (
                                                             <Badge bg="primary" key={team.id}>{team.name}</Badge>
                                                        ))}
                                                    </div>
                                                    <div className='mt-3'>
                                                        <Badge bg="primary" key={'assigned_'+member.assigned_tasks_count+member.id}>Assigned { member.assigned_tasks_count} </Badge>
                                                        &nbsp;
                                                        <Badge bg="primary" key={'accepted_'+member.accepted_tasks_count+member.id}>Accepted { member.accepted_tasks_count} </Badge>
                                                        &nbsp;
                                                        <Badge bg="warning" key={'assi_'+member.assigned_tasks_count+member.id}>In Progress { member.in_progress_tasks_count}</Badge>
                                                        &nbsp;
                                                        <Badge className='mt-1' bg="warning" key={'in_review_'+member.in_review_tasks_count+member.id}>In Review { member.in_review_tasks_count}</Badge>
                                                        &nbsp;
                                                        <Badge bg="success" key={'completed_'+member.assigned_tasks_count+member.id}>Completed { member.completed_tasks_count}</Badge>
                                                    </div>
                                            </Card.Body>
                                        </Card>                                    
                                    </Col> 
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                    {/* User Modal */}
                </Container>
            }
            </div>
            <Modal show={showInviteModal} onHide={handleCloseInviteModal}>
                <Modal.Header closeButton>
                <Modal.Title>Invite User</Modal.Title>
                </Modal.Header>
                <Form  method="POST" onSubmit={ handleInviteForm }>
                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col md="12">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseInviteModal}>Close</Button>
                    <Button variant="primary" type="submit">Invite</Button>
                </Modal.Footer>
                </Form>
            </Modal>
        </div>
        </>
    )
}