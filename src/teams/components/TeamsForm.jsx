import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container, Row, Col, Button,Form } from 'react-bootstrap';

export default function TeamsForm() {
    return (
        <>
        <Header />
        <div className="main-body">
            <Sidebar />
            <div className="main-body-content">
                <Container fluid>
                    <div className="main-body-header">
                        <Row className="align-items-center">
                            <Col className="text-end">
                                <Button>Add Team</Button>
                            </Col>
                        </Row>
                    </div>
                    {/* Users */}
                   <Row>
                       <Col md="8" className='mx-auto'>
                            <Form>
                                <Form.Group className="mb-3" controlId="Form.Control">
                                <Form.Control type="text" placeholder="Enter Team Name" />
                                </Form.Group> 
                                <Form.Group className="mb-3" controlId="Form.Control">
                                    <Form.Control as="textarea" placeholder="Enter Team Description" rows={3} />
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