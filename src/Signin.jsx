import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { Container, Row, Col, Form, Button, Spinner, Alert} from 'react-bootstrap';
import MarkEmailReadTwoToneIcon from '@mui/icons-material/MarkEmailReadTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import axios from 'axios';
import { config } from './config';

export default function Signin() {
    const history = useHistory();
    const [validated, setValidated] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [spinner,setSpinner] = useState(false);
    const [alert, setAlert] = useState(false);

    const handleSubmit = (event) => {
        setSpinner(true);
        event.preventDefault();
        setValidated(true);
        signin()
        .then(res =>{ 
            console.log(res.data.success);
            if(res.data.success){
                history.push('/dashboard');
            } 
        })
        .catch(error => { 
            setSpinner(false);
            if(error.response.data.success==false){
                setAlert(true);
                setPassword('');
            }
            console.log(error.response.data.data) 
        });
    };
    async function signin (){
        const res = await axios.post(config.api_url+'/organization/login',{email,password});
        return res;
     };
    return (
        <>
            <div className="signin-content">
                <Container fluid>
                    <Row className="align-items-center">
                        <Col md="6" className="text-center px-0">
                            <div className="signin-content-left bg-md-secondary">
                                <img className="img-fluid d-none d-md-block" src={require('./assets/images/logo-verticle-white.png')} alt="Kaykewalk White Logo"/>
                                <img className="img-fluid d-md-none" src={require('./assets/images/logo.png')} alt="Kaykewalk Logo"/>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="signin-content-right text-center text-md-start space-sec">
                                <div className="signin-content-right-top">
                                    <h2 className="title">Sign In to your account</h2>
                                    <a href="#" className="signin-google-btn w-100">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.24182 6.67897C1.98432 5.13169 3.03341 3.82393 4.35554 2.73652C6.14713 1.2563 8.20219 0.365299 10.5063 0.0922493C13.2129 -0.228704 15.7566 0.283863 18.1086 1.69222C18.693 2.04192 19.2391 2.43952 19.7613 2.87065C19.8906 2.97604 19.8763 3.03831 19.7661 3.1437C18.6978 4.20715 17.6296 5.27061 16.5709 6.34365C16.4464 6.4682 16.3793 6.45862 16.2452 6.35802C13.141 3.96764 8.61416 4.61433 6.30042 7.77596C5.89324 8.33164 5.56271 8.93043 5.33277 9.58192C5.31361 9.6394 5.27529 9.6921 5.24655 9.74958C4.62859 9.28013 4.00585 8.81067 3.39269 8.33643C2.67413 7.78554 1.95558 7.23465 1.24182 6.67897Z" fill="#E94335"></path>
                                            <path d="M5.24646 14.2429C5.45244 14.698 5.62489 15.1722 5.88357 15.5986C6.97098 17.3806 8.52305 18.5255 10.5685 18.9327C12.4128 19.3015 14.1852 19.0524 15.8379 18.1279C15.8954 18.0991 15.9529 18.0704 16.0056 18.0417C16.0343 18.0704 16.0583 18.1039 16.087 18.1279C17.3229 19.086 18.5636 20.044 19.7995 21.0021C19.2055 21.5913 18.5301 22.0656 17.8115 22.4775C15.7277 23.6655 13.4715 24.1446 11.0955 23.9625C8.13503 23.7326 5.58178 22.5637 3.47403 20.456C2.54949 19.5315 1.78783 18.4872 1.23694 17.2944C1.74951 16.9016 2.26207 16.5135 2.77464 16.1207C3.59858 15.4932 4.42252 14.8705 5.24646 14.2429Z" fill="#34A853"></path>
                                            <path d="M19.8044 21.0021C18.5685 20.044 17.3278 19.086 16.0919 18.1279C16.0632 18.1039 16.0344 18.0704 16.0105 18.0417C16.4368 17.7111 16.8727 17.3902 17.2224 16.9686C17.8069 16.2692 18.1949 15.4788 18.3961 14.5926C18.42 14.4824 18.4009 14.4441 18.2907 14.4489C18.2332 14.4537 18.1805 14.4489 18.123 14.4489C16.1686 14.4489 14.2093 14.4441 12.2548 14.4537C12.0393 14.4537 11.9914 14.3962 11.9962 14.1902C12.0057 12.801 12.0057 11.4118 11.9962 10.0226C11.9962 9.84539 12.0441 9.79749 12.2213 9.79749C15.8045 9.80228 19.3877 9.80228 22.9756 9.79749C23.1289 9.79749 23.1912 9.83581 23.2295 9.99868C23.5217 11.316 23.5026 12.6382 23.3253 13.9699C23.1816 15.0333 22.9229 16.0633 22.5253 17.0596C21.9361 18.5303 21.0691 19.8141 19.929 20.9159C19.8859 20.9494 19.8427 20.9734 19.8044 21.0021Z" fill="#4285F3"></path>
                                            <path d="M5.24651 14.2429C4.42257 14.8705 3.59863 15.4932 2.77469 16.1208C2.26213 16.5088 1.74956 16.9016 1.23699 17.2944C0.839395 16.5567 0.580717 15.7758 0.369942 14.9711C-0.0324468 13.4142 -0.0947213 11.8334 0.125634 10.2478C0.298087 9.0023 0.657362 7.80472 1.23699 6.68378C1.95555 7.23467 2.66931 7.79035 3.38786 8.34124C4.00581 8.81548 4.62377 9.28493 5.24172 9.75439C5.13633 10.267 4.98783 10.7699 4.93993 11.2969C4.8537 12.2549 4.94472 13.1891 5.21777 14.1088C5.23693 14.1471 5.24172 14.195 5.24651 14.2429Z" fill="#FABB06"></path>
                                        </svg>
                                        <span>google</span>
                                    </a>
                                    <p><small>or sign in with your E-mail</small></p>
                                </div>
                                <div className="signin-content-right-btm mt-4">
                                    <Form  validated={validated} onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="signinEmail">
                                            <div className="form-field">
                                                <div className="form-field-icon"><MarkEmailReadTwoToneIcon /></div>
                                                <Form.Control type="email" placeholder="Enter Email" required onChange={ (e)=>{ setEmail(e.target.value) }} />
                                                <Form.Control.Feedback type="invalid">Please Enter Valid Email.</Form.Control.Feedback>
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="signinPassword">
                                            <div className="form-field">
                                                <div className="form-field-icon"><LockOpenTwoToneIcon /></div>
                                                <Form.Control type="password" placeholder="Enter Password" required onChange={ (e)=>{ setPassword(e.target.value) }} />
                                                <Form.Control.Feedback type="invalid">Please Enter Valid Password.</Form.Control.Feedback>
                                            </div>
                                        </Form.Group>
                                        <Row>
                                            <Col sm="6" className="text-center text-md-start mb-3 mb-md-0">
                                                <Form.Group className="d-inline-block" controlId="signinCheckbox">
                                                    <Form.Check type="checkbox" label="Remember me" />
                                                </Form.Group>
                                            </Col>
                                            <Col sm="6" className="text-sm-end">
                                                <a href="#" className="text-link">Forgot Password?</a>
                                            </Col>
                                        </Row>
                                        
                                        <Row className="btn-group">
                                            { alert === true ? 
                                            <Alert variant="danger">
                                                Invalid Credentials
                                            </Alert>
                                             : ''}
                                            <Col>
                                                { spinner === true ?
                                                    <Button className="w-100" variant="primary" type="submit">
                                                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                                        <span className="visually-hidden">Loading...</span>
                                                    </Button>
                                                : 
                                                <Button className="w-100" variant="primary" type="submit">
                                                    Sign In
                                                </Button>
                                                }
                                            </Col>
                                            <Col>
                                                <Link to="/">
                                                    <Button className="w-100" variant="primary-border">Sign Up</Button>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}