import  React, {useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import axios from 'axios';
import config from './config';


export default function Invite(props) {

    const email = props.match.params.email;
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: email,
            name: name,
            password: password
        }
        axios.post(`${config.config.api_url}/users/acceptInvite`, data)
        .then(res => {
            if(res.data.success){
                props.history.push('/signin');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }




    return (
        <>
            <div className="header-invite d-flex align-items-center">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col>
                            {/* Brand Logo */}
                            <div className="logo">
                                <img src={require('./assets/images/logo.png')} alt="Kaykewalk Logo" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="invite-content space-sec">
                <Container>
                    <Row className="align-items-center">
                        <Col lg="6">
                            <div className="invite-content-left">
                                <h2 className="text-secondary">Invite your teammates</h2>
                                <div className="invite-content-left-btm">
                                    <h6></h6>
                                    <Form className="mt-3" onSubmit={handleSubmit}>
                                        <Form.Group controlId="inviteEmail">
                                            <div className="form-field">
                                                <div className="form-field-icon"><MailOutlinedIcon /></div>
                                                <Form.Control type="email" placeholder="Enter Emails here" required  disabled value={email} />
                                            </div>
                                            <div className="form-field mt-4">
                                                <div className="form-field-icon"><MailOutlinedIcon /></div>
                                                <Form.Control type="text" placeholder="Enter name here" required  onChange={ (e)=>{ setName(e.target.value) } } />
                                            </div>
                                            <div className="form-field mt-4">
                                                <div className="form-field-icon"><PasswordOutlinedIcon /></div>
                                                <Form.Control type="password" placeholder="Enter password here" required  onChange={ (e)=>{ setPassword(e.target.value) } } />
                                            </div>
                                        </Form.Group>
                                        <Row className="btn-group">
                                            <Col><Button className="w-100" variant="primary" type="submit">Accept Invitations</Button></Col>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" className="text-center text-lg-end pt-5 py-lg-3 invite-team-img">
                            <img className="img-fluid" src={require('./assets/images/invite_img.png')} alt="Team Invite"/>  
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}