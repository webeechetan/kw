import React, {useState, useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Member from './components/Member';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import config from '../config';
import axios from 'axios';


export default function Members(props) {

    const [members, setMembers] = useState([]);

    async function getMembers(){
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.config.api_url}/users`,header);
        return res;
    }

    useEffect(() => {
        getMembers()
        .then((res) => {
            setMembers(res.data.data);
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
                                                <div className="mb-3"><img className="img-fluid img-townhall-dp" src={require("../assets/images/users/user.jpg")} alt="Team DP Logo" width="70" /></div>
                                                    <Card.Title><a href="#">{member.name}</a></Card.Title>
                                                    <Card.Text>UI/UX Desginer</Card.Text>
                                            </Card.Body>
                                            <Card.Footer className="card-footer-style1">
                                                <div className="icon-group">
                                                        <span><ChatBubbleOutlineIcon /></span>
                                                        <span><PieChartOutlineIcon /></span>
                                                        <span><PersonOutlineIcon /></span>                                                
                                                </div>
                                            </Card.Footer>
                                        </Card>                                    
                                    </Col> 
                                ))}
                                
                            </Row>
                        </Card.Body>
                    </Card>
                            {/* User Modal */}
                        </Container>
                    </div>
                </div>
            </>
        );
    };

