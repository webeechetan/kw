import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Container, Row, Col } from 'react-bootstrap';

export default function Dashboard() {
    return (
        <>
        <Header />
        <div className="main-body">
            <Sidebar />
            <div className="main-body-content">
                <Container fluid>
                    <Row>
                        <Col md="6" className="mb-3">
                            <div className="box-item">
                                <div className="row align-items-center">
                                    <div className="col-md-7">
                                        <div className="welcome-box">
                                            <h2 className="title">Hi John Doe, <br /><b>Welcome back</b></h2>
                                        </div>
                                    </div>
                                    <div className="col-md-5 text-end">
                                        <div className="welcome-box-img">
                                            <img src={require("./assets/images/welcome-img.png")} alt="Kaykewalk Welcome" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        </>
    )
}
