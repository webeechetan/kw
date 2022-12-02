import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container, Row, Col, Button,Form, Spinner} from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { config } from '../../config';


export default function AddMember() {

    const history = useHistory();
    const [validated, setValidated] = React.useState(false);
    const [name , setName] = React.useState('');
    const [email , setEmail] = React.useState('');
    const [phone , setPhone] = React.useState('');
    const [address , setAddress] = React.useState('');
    const [password , setPassword] = React.useState('');
    const [spinner , setSpinner] = React.useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSpinnerTo(false);
        }, 1500);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);
        addMember()
        .then((res) => {
            if(res.data.success){
                history.push('/members');
            }
            console.log(res);
        }).catch((error) => {
            console.log(error);
        });

    };

    const setSpinnerTo = (val) => {
        setSpinner(val);
    }

    async function addMember() {
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const data = {
            name,
            email,
            phone,
            address,
            password
        }
        const res = await axios.post(`${config.api_url}/users`, data,header);
        return res;
    }
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
                       <Col md="6" className=''>
                             <h3 className='main-body-header-title mb-3'>Add New Members</h3>
                            { spinner ==  true ? 
                                <Spinner animation="grow" role="status" variant="warning" />
                                    :
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="Form.Control">
                                        <Form.Control type="name" placeholder="Enter Full Name" onChange={(e)=>{ setName(e.target.value) }} />
                                    </Form.Group> 
                                    <Form.Group className="mb-3" controlId="Form.Control">
                                        <Form.Control type="email" placeholder="Enter Your Email" onChange={(e)=>{ setEmail(e.target.value) }} />
                                    </Form.Group> 
                                    <Form.Group className="mb-3" controlId="Form.Control">
                                        <Form.Control type="password" placeholder="Enter Your Password" onChange={(e)=>{ setPassword(e.target.value) }} />
                                    </Form.Group> 
                                    <Form.Group className="mb-3" controlId="Form.Control">
                                        <Form.Control type="number" placeholder="Enter Your Phone Number" onChange={(e)=>{ setPhone(e.target.value) }} />
                                    </Form.Group> 
                                    <Form.Group className="mb-3" controlId="Form.Control">
                                        <Form.Control as="textarea" placeholder="Enter Your Address" rows={3} onChange={(e)=>{ setAddress(e.target.value) }} />
                                    </Form.Group>
                                        <Button variant="primary" type="submit">Submit</Button>
                                </Form>
                            } 
                        </Col>
                   </Row>
                </Container>
            </div> 
        </div>
        </>
    )
}