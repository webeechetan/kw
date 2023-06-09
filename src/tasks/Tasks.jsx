import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskManager from "../components/TaskManager";

export default function Tasks() {

    return (
        <>
            <Header />
             <div className="main-body">
            <Sidebar />
            <div className="main-body-content">
                <Container fluid>
                   
                    <TaskManager />
                </Container>
            </div>
        </div>
        </>
      
    );
}
