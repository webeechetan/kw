import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container, Row, Col, Button,Form } from 'react-bootstrap';

export default function MembersForm
    () {
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
                                <Button>Add Member</Button>
                            </Col>
                        </Row>
                    </div>
                    {/* Users */}
                   <Row>
                       <Col md="8" className='mx-auto'>
                            <Form>
                                <Form.Group className="mb-3" controlId="Form.Control">
                                <Form.Control type="name" placeholder="Enter Full Name" />
                                </Form.Group> 
                                <Form.Group className="mb-3" controlId="Form.Control">
                                <Form.Control type="email" placeholder="Enter Your Email" />
                                </Form.Group> 
                                <Form.Group className="mb-3" controlId="Form.Control">
                                <Form.Control type="number" placeholder="Enter Your Phone Number" />
                                </Form.Group> 
                                <Form.Group className="mb-3" controlId="Form.Control">
                                    <Form.Control as="textarea" placeholder="Enter Your Address" rows={3} />
                                </Form.Group>
                                    <Button className="w-100" variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Col>
                   </Row>

                </Container>
            </div>
        </div>
        </>
    )
}