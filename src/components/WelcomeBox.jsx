import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function WelcomeBox() {
    return (
        <>
            {/* Dashbord Card */}
            <div className="box-item">
                <Row className="align-items-center">
                    <Col md={7}>
                        <div className="welcome-box">
                            <h2 className="title-md">Hi John Doe, <br/><b>Welcome back</b></h2>
                        </div>
                    </Col>
                    <Col md={5} className="">
                        <div className="welcome-box-img animation-rocket">
                            <img src={require('../assets/images/welcome-img.png')} className="img-fluid" alt="Kaykewalk Welcome"/>
                        </div>
                    </Col>
                </Row>
            </div>
            {/* Dashbord Card End */}
        </>
    )
}
