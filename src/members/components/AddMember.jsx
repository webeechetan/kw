import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container, Row, Col, Button,Form, Spinner, Toast, ToastContainer} from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { config } from '../../config';
import Select from 'react-select';


export default function AddMember() {

    const history = useHistory();
    const [validated, setValidated] = React.useState(false);
    const [name , setName] = React.useState('');
    const [email , setEmail] = React.useState('');
    const [phone , setPhone] = React.useState('');
    const [address , setAddress] = React.useState('');
    const [password , setPassword] = React.useState('');
    const [spinner , setSpinner] = React.useState(false);
    const [teams , setTeams] = React.useState([]);
    const [options , setOptions] = React.useState([]);
    const [selectedTeams , setSelectedTeams] = React.useState([]);
    const [teamIds, setTeamIds] = React.useState([]);
    const [memberImagePreview, setMemberImagePreview] = useState('https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg');
    const [memberImage, setMemberImage] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessages, setAlertMessages] = useState([]);
    useEffect(() => {
        getTeams();
    }, []);

    const changeHandler = e => {
        let ids = [];
        e.map((item) => {
            ids.push(item.value);
        });
        setTeamIds(ids);
      };

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
        }).catch((error) => {
            if(error.response.data.message=="Validation Error"){
                let messages = [];
                for (const [key, value] of Object.entries(error.response.data.data)) {
                    messages.push(value[0]);
                }
                setAlertMessages(messages);
                setShowAlert(true);
            }
            setSpinner(false);
        });

    };

    const previwImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setMemberImage(file);
            setMemberImagePreview(reader.result);
        }
        reader.readAsDataURL(file);
    };


    async function addMember() {
        setSpinner(true);
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('password', password);
        formData.append('teams',  JSON.stringify(teamIds));
        formData.append('image', memberImage);

        const res = await axios.post(`${config.api_url}/users`, formData,header);
        setSpinner(false);
        return res;
    }

    async function getTeams() {
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.api_url}/teams`,header);
        setTeams(res.data.data);
        let res_options = [];
        res.data.data.map((team) => {
            res_options.push({value: team.id, label: team.name});
        });
        setOptions(res_options);
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
                        </Row>
                    </div>
                    {/* Users */}
                    <ToastContainer position="top-end" className="p-3">
                        <Toast show={showAlert} bg="danger" onClose={() => setShowAlert(false)}>
                            <Toast.Header>
                                <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                                />
                                <strong className="me-auto">Errors</strong>
                                {/* <small>11 mins ago</small> */}
                            </Toast.Header>
                            <Toast.Body>
                               {alertMessages.map((message,i) => {
                                      return <p key={i}>{message}</p>
                                 })}
                            </Toast.Body>
                        </Toast>
                    </ToastContainer>
                   <Row>
                       <Col md="6" className='mx-auto'>
                             <h3 className='main-body-header-title mb-3 text-center'>Add New Members</h3>
                                <Form onSubmit={handleSubmit} encType='multipart/form-data'>
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
                                    <Form.Group className="mb-3">
                                        <Select options={options} isMulti  onChange={changeHandler} />
                                    </Form.Group> 

                                    <Form.Group className="mb-3" controlId="Form.Control">
                                        <Form.Control type="file" placeholder="Image Upload" accept='images/*' onChange={previwImage} />
                                        <img src={memberImagePreview} height={120} />
                                    </Form.Group> 

                                    { spinner === true ?
                                        <Button  variant="primary" type="submit">
                                            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                            <span className="visually-hidden">Creating User...</span>
                                        </Button>
                                    : 
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                    }
                                </Form>
                        </Col>
                   </Row>
                </Container>
            </div> 
        </div>
        </>
    )
}