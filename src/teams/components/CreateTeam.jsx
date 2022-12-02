import React ,{useState} from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { useHistory} from 'react-router-dom';
import { Container, Row, Col, Button,Form, Spinner } from 'react-bootstrap';
import axios from 'axios';
import config from '../../config';
import { data } from 'jquery';

export default function CreateTeam() {
    const history = useHistory();
    const [teamName, setTeamName] = useState('');
    const [teamDescription, setTeamDescription] = useState('');
    const [teamImage, setTeamImage] = useState('');
    const [teamImagePreview, setTeamImagePreview] = useState('https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg');
    const [loading, setLoading] = useState(false);
    const handleSubmit = (event) => {
        setLoading(true);
        event.preventDefault();

        createTeam()
        .then((res) => {
            setLoading(false);
            console.log(res.data);
            if(res.data.success === true){
                history.push('/teams');
            }
        }).catch((error) => {
            setLoading(false);
            console.log(error);
        });
    }
  

    async function createTeam(){
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}`, "Content-Type": "multipart/form-data", }
        };
        const formData = new FormData();
        formData.append('name', teamName);
        formData.append('description', teamDescription);
        formData.append('image', teamImage);
        const res = await axios.post(`${config.config.api_url}/teams`,formData,header);
        return res;
    }

    const previwImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setTeamImage(file);
            setTeamImagePreview(reader.result);
        }
        reader.readAsDataURL(file);
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
                                <h3 className="main-body-header-title mb-0">Teams</h3>
                            </Col>
                            <Col className="text-end">
                                <Button>Add Team</Button>
                            </Col>
                        </Row>
                    </div>
                    {/* Users */}
                   <Row>
                       <Col md="6" className=''>
                          <h3 className='main-body-header-title mb-3 text-center'>Add Team Name</h3>
                            <Form method='POST' encType='multipart/form-data' onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="Form.Control">
                                   <Form.Control type="text" placeholder="Enter Team Name" onChange={ (e)=>{ setTeamName(e.target.value) }} />
                                 </Form.Group> 
                                <Form.Group className="mb-3" controlId="Form.Control">
                                   <Form.Control type="file" placeholder="Image Upload" accept='images/*' onChange={previwImage} />
                                   <img src={teamImagePreview} height={120} />
                                </Form.Group> 
                                <Form.Group className="mb-3" controlId="Form.Control">
                                    <Form.Control as="textarea" placeholder="Enter Team Description" rows={3} onChange={ (e)=>{ setTeamDescription(e.target.value) }} />
                                </Form.Group>
                                    { loading === true ?
                                        <Button  variant="primary" type="submit">
                                            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                            <span className="visually-hidden">Creating Team...</span>
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