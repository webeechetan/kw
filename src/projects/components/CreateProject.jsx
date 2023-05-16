import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container, Row, Col, Button,Form, Spinner, Toast, ToastContainer} from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { config } from '../../config';
import Select from 'react-select';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



export default function CreateProject() {

    const history = useHistory();
    const [validated, setValidated] = React.useState(false);
    const [name , setName] = React.useState('');
    const [description , setDescription] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [teams , setTeams] = React.useState([]);
    const [teamOptions , setTeamOptions] = React.useState([]);
    const [users , setUsers] = React.useState([]);
    const [userOptions , setUserOptions] = React.useState([]);
    const [teamIds, setTeamIds] = React.useState([]);
    const [userIds, setUserIds] = React.useState([]);
    const [clients, setClients] = React.useState([]);
    const [client, setClient] = React.useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessages, setAlertMessages] = useState([]);


    useEffect(() => {
        getTeams();
        getUsers();
        getClients();
    }, []);
    
    const TeamChangeHandler = e => {
        let ids = [];
        e.map((item) => {
            ids.push(item.value);
        });
        setTeamIds(ids);
    };

    const UserChangeHandler = e => {
        let ids = [];
        e.map((item) => {
            ids.push(item.value);
        });
        setUserIds(ids);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);
        addProject()
        .then((res) => {
            if(res.data.success){
                history.push('/projects');
            }
            console.log(res);
        }).catch((error) => {
            console.log(error);
            if(error.response.data.message=="Validation Error"){
                let messages = [];
               for(let i in error.response.data.data){
                     messages.push(error.response.data.data[i][0]);
                }
                setAlertMessages(messages);
                setShowAlert(true);
                setLoading(false);
            }
        });
    };

    async function addProject() {
        setLoading(true);
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const data = {
            name,
            description,
            teams:teamIds,
            users:userIds,
            client_id:client
        }
        const res = await axios.post(`${config.api_url}/projects`, data,header);
        setLoading(false);
        return res;
    }

    async function getTeams() {
        setLoading(true);
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.api_url}/teams`,header);
        setTeams(res.data.data);
        let options = [];
        res.data.data.map((item) => {
            options.push({value: item.id, label: item.name});
        });
        setTeamOptions(options);
        setLoading(false);
        return res;
    }

    async function getUsers() {
        setLoading(true);
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.api_url}/users`,header);
        setUsers(res.data.data);
        let options = [];
        res.data.data.map((item) => {
            options.push({value: item.id, label: item.name});
        });
        setUserOptions(options);
        setLoading(false);
        return res;
    }

    async function getClients() {
        setLoading(true);
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.api_url}/clients`,header);
        setClients(res.data.data);
        setLoading(false);
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
                                <h3 className="main-body-header-title mb-0">Projects</h3>
                            </Col>
                            <Col className="text-end">
                                <Button>Creact Project</Button>
                            </Col>
                        </Row>
                    </div>
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
                             <h3 className='main-body-header-title mb-3 text-center'>Create New Project</h3>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="Form.Control">
                                        <Form.Control type="name" placeholder="Project Name" onChange={(e)=>{ setName(e.target.value) }} />
                                    </Form.Group> 
                                    <Form.Group className="mb-3" >
                                        <Form.Select placeholder="Select Client" onChange={(e)=>{ setClient(e.target.value) }} >
                                            <option>Select Client</option>
                                            {clients.map((item) => {
                                                return <option key={client.id} value={item.id}>{item.name}</option>
                                            })}
                                        </Form.Select>
                                    </Form.Group> 
                                    <Form.Group className="mb-3" controlId="Form.Control">
                                        <CKEditor
                                            editor={ ClassicEditor }
                                            data="<p>Project Description Goes Here</p>"
                                            onReady={ editor => {
                                                console.log( 'Editor is ready to use!', editor );
                                            } }
                                            onChange={ ( event, editor ) => {
                                                const data = editor.getData();
                                                setDescription(data);
                                                console.log( { event, editor, data } );
                                            } }
                                            onBlur={ ( event, editor ) => {
                                                console.log( 'Blur.', editor );
                                            } }
                                            onFocus={ ( event, editor ) => {
                                                console.log( 'Focus.', editor );
                                            } }
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Select options={teamOptions} isMulti  placeholder="Select Teams" onChange={TeamChangeHandler}  />
                                    </Form.Group> 

                                    <Form.Group className="mb-3">
                                        <Select options={userOptions} isMulti placeholder="Select Members" onChange={UserChangeHandler} />
                                    </Form.Group> 

                                    { loading === true ?
                                        <Button  variant="primary" type="submit">
                                            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                            <span className="visually-hidden">Creating Project...</span>
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