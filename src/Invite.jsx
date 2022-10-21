import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

export default function Invite() {
    return (
        <>
            <div className="header-invite d-flex align-items-center">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col>
                            {/* Brand Logo */}
                            <div className="logo">
                                <img src={require('./assets/images/logo.png')} alt="Kaykewalk Logo" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="invite-content space-sec">
                <Container>
                    <Row className="align-items-center">
                        <Col lg="6">
                            <div className="invite-content-left">
                                <h2 className="text-secondary">Invite your teammates</h2>
                                <div className="invite-gamil">
                                    <div className="invite-gamil-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.33em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 193"><path d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727z" fill="#4285F4"/><path d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798v98.91z" fill="#34A853"/><path fill="#EA4335" d="M58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.67 34.992l-4.67 40.644L128 145.504z"/><path d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218z" fill="#FBBC04"/><path d="M0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273z" fill="#C5221F"/></svg>    
                                    </div>
                                    <h6 className="invite-gamil-text">Invite from Gmail</h6>
                                </div>
                                <div className="invite-content-left-btm">
                                    <h6>Copy this link and share in your work messanger:</h6>
                                    <div className="invite-copy-link mt-3">
                                        <div className="invite-copy-link-text">http://kaykewalk.com/welcome/ds8945xdcg</div>
                                        <a href="#" className="invite-copy-link-btn">Copy</a>
                                    </div>
                                    <Form className="mt-3">
                                        <Form.Group controlId="inviteEmail">
                                            <div className="form-field">
                                                <div className="form-field-icon"><MailOutlinedIcon /></div>
                                                <Form.Control type="email" placeholder="Enter Emails here" required />
                                            </div>
                                        </Form.Group>
                                        <Row className="btn-group">
                                            <Col><Button className="w-100" variant="primary" type="submit">Send Invitations</Button></Col>
                                            <Col><Button className="w-100" variant="yellow" type="button">Skip for now</Button></Col>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" className="text-center text-lg-end pt-5 py-lg-3 invite-team-img">
                            <img className="img-fluid" src={require('./assets/images/invite_img.png')} alt="Team Invite"/>  
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}