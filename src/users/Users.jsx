import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import User from './components/User';
import AddUser from './components/AddUser';
import { Container, Row, Col, Button, Card, Modal } from 'react-bootstrap';

export default function Users() {
    const [HeaderUsersShow, setHeaderUsersShow] = useState(false);
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
                                <h3 className="main-body-header-title mb-0">User and roles</h3>
                            </Col>
                            <Col className="text-end">
                                <Button variant="primary" id="modal-users" onClick={() => setHeaderUsersShow(true)}>Add User</Button>
                            </Col>
                        </Row>
                    </div>
                    {/* Users */}
                    <Card className="main-body-card">
                        <Card.Body>
                            <User />
                        </Card.Body>
                    </Card>
                    {/* User Modal */}
                    <Modal className="modal-custom" show={HeaderUsersShow} onHide={() => setHeaderUsersShow(false)}>
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>
                            <AddUser />
                        </Modal.Body>
                    </Modal>
                </Container>
            </div>
        </div>
        </>
    )
}