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

    const getMembers = () => {
        axios.get(`${config.config.api_url}/users`,config.config.headers)
        .then((res) => {
            setMembers(res.data.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getMembers();
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
                               <Member />
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

