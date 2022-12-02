import React, {useState, useEffect} from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { Container, Row, Col, Card, Button,Badge } from 'react-bootstrap';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { Link } from 'react-router-dom';
export default function MemberProfile() {
   
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
                                    <h3 className="main-body-header-title mb-0">My Profile</h3>
                                </Col>
                                <Col className="text-end">
                                    <Link to="../addmember"><Button>Add Profile</Button></Link>
                                </Col>
                            </Row>
                        </div>
                        {/* Users */}
                        <Card className='main-body-card'>
                            <Card.Body>
                                <Row>
                                    <Col md="4">
                                        <Card className="card-style1 mb-4">
                                            <Card.Body>
                                                <div className="img-profile d-flex">
                                                    <div className="text-dark p-3">
                                                        <h5 className="text-dark">Welcome Back !</h5>
                                                        <p>It will seem like simplified</p>
                                                    </div>
                                                    <div className='align-self-end'>
                                                        <img src={require("../../assets/images/users/profile-img.png")} className='img-fluid' />
                                                    </div>
                                                </div>
                                                <div className="profile-content pe-3">
                                                    <div className="mb-2 pe-3">
                                                        <img className="img-fluid img-profile-dp" src={require("../../assets/images/users/user-2.jpg")} alt="Profile-DP" width="70" />
                                                    </div>
                                                    <div className='pt-2'>
                                                        <h5 className="profile-name">Ragini</h5>
                                                        <p className='profile-designation mb-0'>UI/UX Designer</p>
                                                    </div>       
                                                </div>                 
                                            </Card.Body>
                                        </Card>
                                        <Card className='card-style1 mb-4'>
                                            <Card.Body>
                                                <Card.Title className='mb-4'>About</Card.Title>
                                                <Card.Text>Hi I'm Ragini,has been the industry's standard dummy text To an English person, it will seem like simplified English, as a skeptical.</Card.Text>
                                                <ul class="list-none profile-exp">
                                                    <li>   
                                                        <h6><a href="javascript: void(0);"><BadgeOutlinedIcon  className='me-3'/>Full Name</a></h6>
                                                        <span className='text-primary'>Ragini Agarwal</span>
                                                    </li>        
                                                    <li>
                                                        <h6><a href="javascript: void(0);"><CallOutlinedIcon  className='me-3'/>Contact Number</a></h6>
                                                        <span className='text-primary'>8104090658</span>
                                                    </li>
                                                    <li>
                                                        <h6><a href="javascript: void(0);"><EmailOutlinedIcon className='me-3'/>Email Id</a></h6>
                                                        <span className='text-primary'>Ragini@ gmail.com</span>
                                                    </li>
                                                    <li>
                                                        <h6><a href="javascript: void(0);"><PlaceOutlinedIcon className='me-3'/>Address</a></h6>
                                                        <span className='text-primary'>Nodia, Up</span>
                                                    </li> 
                                                </ul> 
                                            </Card.Body>
                                        </Card>
                                        <Card className='card-style1 mb-4'>
                                            <Card.Body>
                                                <Card.Title className='mb-4'>Skill</Card.Title>
                                                <div className='d-flex flex-wrap gap-2'>
                                                    <a href='#'><Badge bg="secondary">Html</Badge></a>
                                                    <a href='#'><Badge bg="secondary">Css</Badge></a>
                                                    <a href='#'><Badge bg="secondary">Java</Badge></a>
                                                    <a href='#'><Badge bg="secondary">Php</Badge></a>
                                                    <a href='#'><Badge bg="secondary">Python</Badge></a>
                                                    <a href='#'><Badge bg="secondary">Laravel</Badge></a>
                                                    <a href='#'><Badge bg="secondary">Photoshop</Badge></a>
                                                </div>
                                                  
                                            </Card.Body>
                                        </Card> 
                                        <Card className='card-style1'>
                                            <Card.Body>
                                                <Card.Title className='mb-4'>Experience</Card.Title>
                                                <ul class="list-none profile-exp">
                                                    <li>
                                                        <h6><a href="javascript: void(0);"><DnsOutlinedIcon  className='me-3'/>Back End Developer</a></h6>
                                                        <span className='text-primary'>2016 - 19</span>
                                                    </li>
                                                    <li>
                                                        <h6><a href="javascript: void(0);"><CodeOutlinedIcon className='me-3'/>Front End Developer</a></h6>
                                                        <span className='text-primary'>2013 - 16</span>
                                                    </li>
                                                    <li>
                                                        <h6><a href="javascript: void(0);"><EditOutlinedIcon className='me-3'/>UI/UX Desginer</a></h6>
                                                        <span className='text-primary'>2010 - 13</span>
                                                    </li>
                                                </ul>                                                                  
                                            </Card.Body>
                                        </Card>
                                    </Col>    
                                    <Col md="8">
                                        <Row>
                                            <Col md='4' className='mb-4'>
                                                <Card className='card-style1'>
                                                    <Card.Body>
                                                        <div className='d-flex'>
                                                            <div>
                                                                <p className='text-muted fw-medium mb-2'>Completed Projects</p>
                                                                <h5 className='mb-0'>125</h5>
                                                            </div>
                                                            <div className='align-items-center bg-primary project'>
                                                            <AccountTreeOutlinedIcon className='text-white' />
                                                            </div>
                                                        </div>                                                        
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md='4' className='mb-4'>
                                                <Card className='card-style1'>
                                                    <Card.Body>
                                                        <div className='d-flex'>
                                                            <div className='flex-grow-1'>
                                                                <p className='text-muted  mb-2'>Pending Projects</p>
                                                                <h5 className='mb-0'>12</h5>
                                                            </div>
                                                            <div className='align-self-center bg-primary project'>
                                                            <AccountTreeOutlinedIcon className='text-white' />
                                                            </div>
                                                        </div>                                                        
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md='4' className='mb-4'>
                                                <Card className='card-style1'>
                                                    <Card.Body>
                                                        <div className='d-flex'>
                                                            <div className='flex-grow-1'>
                                                                <p className='text-muted  mb-2'>Active Projects</p>
                                                                <h5 className='mb-0'>5</h5>
                                                            </div>
                                                            <div className='align-self-center bg-primary project'>
                                                            <AccountTreeOutlinedIcon className='text-white' />
                                                            </div>
                                                        </div>                                                        
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md='6'>
                                                <Card className="card-style1">
                                                    <Card.Body>
                                                        <Card.Title className='mb-4'><a href="#">Tech Teams</a></Card.Title>
                                                        <Card.Text className="mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                                        <div className='d-flex'>
                                                            <div className="team-member-group flex-grow-1">
                                                                <span className="team-member">RK</span>
                                                                <span className="team-member"><img src={require("../../assets/images/users/avatar1.jpg")} alt="User" /></span>
                                                                <span className="team-member">JK</span>
                                                                <span className="team-member"><img src={require("../../assets/images/users/avatar2.jpg")} alt="User" /></span>
                                                                <span className="team-member"><a href="#">+49</a></span>
                                                            </div>
                                                            <div className='btn-group' role="group">
                                                               <button type="button" className='btn text-primary'>View All</button>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md='6'>
                                                <Card className="card-style1">
                                                    <Card.Body>
                                                        <Card.Title className='mb-4'><a href="#">Desgin Teams</a></Card.Title>
                                                        <Card.Text className="mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                                        <div className='d-flex'>
                                                            <div className="team-member-group flex-grow-1">
                                                                <span className="team-member">RK</span>
                                                                <span className="team-member"><img src={require("../../assets/images/users/avatar1.jpg")} alt="User" /></span>
                                                                <span className="team-member">JK</span>
                                                                <span className="team-member"><img src={require("../../assets/images/users/avatar2.jpg")} alt="User" /></span>
                                                                <span className="team-member"><a href="#">+49</a></span>
                                                            </div>
                                                            <div className='btn-group' role="group">
                                                            <button type="button" className='btn text-primary'>View All</button>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            
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
    );
};

