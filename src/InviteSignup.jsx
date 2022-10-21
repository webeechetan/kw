import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

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
                                <div className="title-wrap">
                                    <h2 className="title text-secondary">Welcome fellow kaykewalker!</h2>
                                    <h3 className="title-sub">You are just 1 step away!</h3>
                                    <p>Your teammates are waiting you on kayakewalk.</p>
                                </div>
                                <Form className="mt-3">
                                    <Form.Group className="form-field mb-3" controlId="signinEmail">
                                        <div className="form-field-icon"><PersonOutlineIcon /></div>
                                        <Form.Control type="text" placeholder="Enter Name" required />
                                        <Form.Control.Feedback type="invalid">Please Enter Valid Name.</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3 form-field" controlId="signinEmail">
                                        <div className="form-field-icon"><MailOutlinedIcon /></div>
                                        <Form.Control type="email" placeholder="Enter Email Here" required />
                                        <Form.Control.Feedback type="invalid">Please Enter Valid Email.</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3 form-field" controlId="signinPassword">
                                        <div className="form-field-icon"><LockOpenOutlinedIcon /></div>
                                        <Form.Control type="password" placeholder="Password 8+ Characters" maxlength="8" required />
                                        <Form.Control.Feedback type="invalid">Please Enter Valid 8+ Characters Password.</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="signinCheckbox">
                                        <Form.Check className="d-inline me-2" type="checkbox" /><span>I agree to Kaykewalk <a href="#" className="text-link">Terms</a> and <a href="#" className="text-link">Privacy Policy</a>.</span>
                                    </Form.Group>
                                    <Form.Group className="space-top-btn">
                                        <Button variant="primary" type="submit">Get Started Now!</Button>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>
                        <Col lg="6" className="text-center text-lg-end pt-5 py-lg-3 invite-team-img">
                            <img className="img-fluid" src={require('./assets/images/invite_signup_img.png')} alt="Team Invite Signup"/>  
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}