import React, {useState,useEffect} from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container, Row, Col,Spinner, Button,Form } from 'react-bootstrap';

export default function MembersForm() {
    const [spinner, setSpinner] = useState(false)
    useEffect(() => {
        setSpinner(true)
        setTimeout(() => {
            setSpinner(false)
        }, 30000);
        
    })
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
                                <Button>Add Member</Button>
                            </Col>
                        </Row>
                    </div>
                    {/* Users */}
                   <Row>
                       <Col md="8" className='mx-auto'>
                           {
                               spinner == true ?
                                 <Spinner animation="grow" variant="warning" />
                                    :        
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
                           }
                        </Col>
                   </Row>

                </Container>
            </div>
        </div>
        </>
    )
}