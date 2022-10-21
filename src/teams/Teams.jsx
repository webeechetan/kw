import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Team from './components/Team';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Teams(props) {
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
                                <h3 className="main-body-header-title mb-0">Teams</h3>
                            </Col>
                            <Col className="text-end">
                                <Button>Add Team</Button>
                            </Col>
                        </Row>
                    </div>
                    {/* Users */}
                    <Card className="main-body-card">
                        <Card.Body>
                            <Row>
                                <Col md="4">
                                    <h4 className="text-center title-style"><span>Town Hall</span></h4>
                                    <Card className="card-style1">
                                        <Card.Body>
                                            <div className="mb-3"><img className="img-fluid img-townhall-logo" src={require("../assets/images/team/town-hall-logo.png")} alt="Town Hall Logo" /></div>
                                            <div className="mb-3"><img className="img-fluid img-townhall-dp" src={require("../assets/images/users/user.jpg")} alt="Team DP Logo" width="200" /></div>
                                            <Card.Title><a href="#">Webeesocial</a></Card.Title>
                                            <Card.Text className="mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                            <div className="team-member-group">
                                                <span className="team-member">RK</span>
                                                <span className="team-member"><img src={require("../assets/images/users/avatar1.jpg")} alt="User" /></span>
                                                <span className="team-member">JK</span>
                                                <span className="team-member"><img src={require("../assets/images/users/avatar2.jpg")} alt="User" /></span>
                                                <span className="team-member"><a href="#">+49</a></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md="8">
                                    <Row>
                                        <Col md="12">
                                            <h4 className="text-center title-style"><span>My Teams</span></h4>
                                        </Col>
                                        <Team />
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    {/* User Modal */}
                </Container>
            </div>
        </div>
        </>
    )
}