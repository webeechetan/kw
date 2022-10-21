import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';

export default function User() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className="add-user">
            <h5 className="title text-primary text-center">Add Member</h5>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="form-field mb-3" controlId="signupName">
                    <div className="form-field-icon"><PersonOutlineIcon /></div>
                    <Form.Control type="text" placeholder="Enter Name" required />
                    <Form.Control.Feedback type="invalid">Please Enter Valid Name.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3 form-field" controlId="signupEmail">
                    <div className="form-field-icon"><MailOutlinedIcon /></div>
                    <Form.Control type="email" placeholder="Work Email" required />
                    <Form.Control.Feedback type="invalid">Please Enter Valid Email.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-field mb-3" controlId="signupDesignation">
                    <div className="form-field-icon"><BusinessCenterOutlinedIcon /></div>
                    <Form.Control type="text" placeholder="Designation" required />
                    <Form.Control.Feedback type="invalid">Please Enter Valid Designation.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-field mb-3" controlId="signupRole">
                    <div className="form-field-icon"><AdminPanelSettingsOutlinedIcon /></div>                    
                    <Form.Select aria-label="Default select example">
                        <option value="1">Member</option>
                        <option value="2">Team Leader</option>
                        <option value="3">Accountant</option>
                        <option value="4">HR</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Please Enter Valid Role.</Form.Control.Feedback>
                </Form.Group> 
                
                <Row>
                    <Col lg="10" xl="9" className="mx-auto">
                        <Form.Group className="mb-3" controlId="signinCheckbox">
                            <Button className="w-100" variant="primary" type="submit">Send Invitation</Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}