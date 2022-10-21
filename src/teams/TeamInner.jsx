import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Notice from './components/Notice';
import TodoList from './components/TodoList';

export default function TeamInner(props) {
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
                                <h3 className="main-body-header-title mb-0">Tech Team</h3>
                            </Col>
                            <Col className="text-end">
                                <Button>Add Team</Button>
                            </Col>
                        </Row>
                    </div>
                    {/* End Dashboard Header */}
                    <Row>
                        <Col md="6">
                            <Card className="main-body-card card-style2">
                                <Card.Body>
                                    <div className="title-wrap card-title-wrap">
                                        <Card.Title className="mb-0">Notice Board</Card.Title>
                                    </div>
                                    <div className="card-scroll scrollbar scrollbar-y">
                                        <Notice />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* End Notice Board */}
                        <Col md="6">
                            <Card className="main-body-card card-style2">
                                <Card.Body>
                                    <div className="title-wrap card-title-wrap">
                                        <Card.Title className="mb-0">Task List</Card.Title>
                                    </div>
                                    <div className="card-scroll scrollbar scrollbar-y">
                                        <TodoList />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* End Todo List */}
                    </Row>
                </Container>
            </div>
        </div>
        </>
    )
}