import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';

export default function Messages() {
    return (
        <div className="main-body">
            <Sidebar />
            <div className="main-body-content">
                <Container fluid>
                    <Header />
                    <h2>Hello Bro</h2>
                </Container>
            </div>
        </div>
    )
}