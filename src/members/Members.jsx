import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Members() {

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
                                    <Link to="../Membersform"><Button>Add Member</Button></Link>        
                            </Col>
                        </Row>
                    </div>
                    {/* Users */}
                    <Card className="main-body-card">
                        <Card.Body>
                            <Row>
                                <Col md="4" className="mb-4">
                                    <Card className="card-style1">
                                        <Card.Body>
                                            <div className="mb-3"><img className="img-fluid img-townhall-dp" src={require("../assets/images/users/user.jpg")} alt="Team DP Logo" width="70" /></div>
                                                <Card.Title><a href="#">Ragini</a></Card.Title>
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
                                <Col md="4" className="mb-4">
                                    <Card className="card-style1">
                                        <Card.Body>
                                            <div className="mb-3"><img className="img-fluid img-townhall-dp" src={require("../assets/images/users/user.jpg")} alt="Team DP Logo" width="70" /></div>
                                                <Card.Title><a href="#">Sonia</a></Card.Title>
                                                <Card.Text>Account Manager</Card.Text>
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
                                <Col md="4" className="mb-4">
                                    <Card className="card-style1">
                                        <Card.Body>
                                            <div className="mb-3"><img className="img-fluid img-townhall-dp" src={require("../assets/images/users/user.jpg")} alt="Team DP Logo" width="70" /></div>
                                                <Card.Title><a href="#">Rajiay</a></Card.Title>
                                                <Card.Text>PHP Developer</Card.Text>
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
                                <Col md="4" className="mb-4">
                                    <Card className="card-style1">
                                        <Card.Body>
                                            <div className="mb-3"><img className="img-fluid img-townhall-dp" src={require("../assets/images/users/user.jpg")} alt="Team DP Logo" width="70" /></div>
                                                <Card.Title><a href="#">Priyanka</a></Card.Title>
                                                <Card.Text>Media Planner</Card.Text>
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
                                <Col md="4" className="mb-4">
                                    <Card className="card-style1">
                                        <Card.Body>
                                            <div className="mb-3"><img className="img-fluid img-townhall-dp" src={require("../assets/images/users/user.jpg")} alt="Team DP Logo" width="70" /></div>
                                                <Card.Title><a href="#">Katrin</a></Card.Title>
                                                <Card.Text>Content Writer</Card.Text>
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
                                <Col md="4" className="mb-4">
                                    <Card className="card-style1">
                                        <Card.Body>
                                            <div className="mb-3"><img className="img-fluid img-townhall-dp" src={require("../assets/images/users/user.jpg")} alt="Team DP Logo" width="70" /></div>
                                                <Card.Title><a href="#">Siya</a></Card.Title>
                                                <Card.Text>HR</Card.Text>
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
                                <Col md="4" className="mb-4">
                                    <Card className="card-style1">
                                        <Card.Body>
                                            <div className="mb-3"><img className="img-fluid img-townhall-dp" src={require("../assets/images/users/user.jpg")} alt="Team DP Logo" width="70" /></div>
                                                <Card.Title><a href="#">Ragini</a></Card.Title>
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
                                <Col md="4" className="mb-4">
                                    <Card className="card-style1">
                                        <Card.Body>
                                            <div className="mb-3"><img className="img-fluid img-townhall-dp" src={require("../assets/images/users/user.jpg")} alt="Team DP Logo" width="70" /></div>
                                                <Card.Title><a href="#">Stiffen</a></Card.Title>
                                                <Card.Text>jr. PHP Developer</Card.Text>
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
                                <Col md="4" className="mb-4">
                                    <Card className="card-style1">
                                        <Card.Body>
                                            <div className="mb-3"><img className="img-fluid img-townhall-dp" src={require("../assets/images/users/user.jpg")} alt="Team DP Logo" width="70" /></div>
                                                <Card.Title><a href="#">Sofia</a></Card.Title>
                                                <Card.Text>Sr. Account Manager</Card.Text>
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