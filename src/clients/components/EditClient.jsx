import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container, Row, Col, Button,Form, Spinner, Toast, ToastContainer} from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { config } from '../../config';
import Select from 'react-select';


export default function EditClient(props) {

    const clientId = props.match.params.clientId;

    const history = useHistory();
    const [validated, setValidated] = React.useState(false);
    const [name , setName] = React.useState('');
    const [description , setDescription] = React.useState('');
    const [image , setImage] = React.useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessages, setAlertMessages] = useState([]);
    const [clientImagePreview, setClientImagePreview] = useState('https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg');
    const [spinner , setSpinner] = React.useState(false);

    useEffect(() => {
        getClient();
    }, []);
    
    const previwImage = (e) => {
        setImage(e.target.files[0]);
        setClientImagePreview(URL.createObjectURL(e.target.files[0]));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);
        updateClient()
        .then((res) => {
            if(res.data.success){
                history.push('/clients');
            }
        }).catch((error) => {
            setSpinner(false);
            console.log(error);
            if(error.response.data.message=="Validation Error"){
                let messages = [];
                for (const [key, value] of Object.entries(error.response.data.errors)) {
                    messages.push(value[0]);
                }
                console.log(messages);
                setAlertMessages(messages);
                setShowAlert(true);
            }
        });
    }

    const updateClient = async () => {
        setSpinner(true);
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const formData = new FormData();
        formData.append('_method', 'PATCH');
        formData.append('name', name);
        formData.append('description', description);
        if(image){
            formData.append('image', image);
        }
        const res = await axios.post(`${config.api_url}/clients/${clientId}`,formData,header);
        return res;
    }

    const getClient = async () => {
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };

        const res = await axios.get(`${config.api_url}/clients/${clientId}`,header);
        setName(res.data.data.name);
        setDescription(res.data.data.description);
        setClientImagePreview(res.data.data.image);
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
                                <h3 className="main-body-header-title mb-0">Client</h3>
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
                             <h3 className='main-body-header-title mb-3 text-center'>Add New Client</h3>
                                <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                                    <Form.Group className="mb-3" controlId="Form.Control">
                                        <Form.Control type="name" placeholder="Cleint Name" onChange={(e)=>{ setName(e.target.value) }} value={name || ''} />
                                    </Form.Group> 
                                    <Form.Group className="mb-3" controlId="Form.Control">
                                        <Form.Control type="text" placeholder="Enter Description" onChange={(e)=>{ setDescription(e.target.value) }}  value={description || ''} />
                                    </Form.Group> 

                                    <Form.Group className="mb-3" controlId="Form.Control">
                                        <Form.Control type="file" placeholder="Image Upload" accept='images/*' onChange={previwImage} />
                                        <img src={clientImagePreview} height={120} />
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