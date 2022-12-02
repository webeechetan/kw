import React, {useState, useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Container, Row, Col, Card,Dropdown, Button, Spinner, Badge  } from 'react-bootstrap';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from 'react-router-dom';
import config from '../config';
import axios from 'axios';


export default function Members() {

    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

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
                                    <Link to="../addmember"><Button>Add Member</Button></Link>        
                            </Col>
                        </Row>
                    </div>
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
        </div>
        </>
    )
}