import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container, Row, Col, Button,Form, Spinner} from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { config } from '../../config';
import Select from 'react-select';


export default function EditMember(props) {

    const memberId = props.match.params.memberId;

    const history = useHistory();
    const [validated, setValidated] = React.useState(false);
    const [name , setName] = React.useState('');
    const [email , setEmail] = React.useState('');
    const [phone , setPhone] = React.useState('');
    const [address , setAddress] = React.useState('');
    const [spinner , setSpinner] = React.useState(false);
    const [teams , setTeams] = React.useState([]);
    const [options , setOptions] = React.useState([]);
    const [selectedTeams , setSelectedTeams] = React.useState([]);
    const [teamIds, setTeamIds] = React.useState([]);
    const [memberImagePreview, setMemberImagePreview] = useState('https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg');
    const [memberImage, setMemberImage] = useState(null);


    useEffect(() => {
        getMember();
        getTeams();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);
        updateMember()
        .then((res) => {
            if(res.data.success){
                history.push('/members');
            }
        }).catch((error) => {
            console.log(error);
        });

    };

    async function updateMember() {
        setSpinner(true);
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const formData = new FormData();
        formData.append('_method', 'PATCH');
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('teams', JSON.stringify(teamIds));
        if(memberImage){
            formData.append('image', memberImage);
        }
        const res = await axios.post(`${config.api_url}/users/${memberId}`, formData,header);
        setSpinner(false);
        return res;
    }

    const getMember = async () => {
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.api_url}/users/${memberId}`,header);
        setName(res.data.data.name);
        setEmail(res.data.data.email);
        setPhone(res.data.data.phone);
        setAddress(res.data.data.address);
        setMemberImagePreview(res.data.data.image);
        setTeamIds(res.data.data.teams.map((team) => team.id));
        res.data.data.teams.map((item) => {
            let team = {
                value: item.id,
                label: item.name
            }
            selectedTeams.push(team);
        });
        setSelectedTeams(selectedTeams);
        
    }

    async function getTeams() {
        setSpinner(true);
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
        setOptions(options);
        setSpinner(false);
    }

    const handleTeamChange = (e) => {
        let ids = [];
        e.map((item) => {
            ids.push(item.value);
        });
        setTeamIds(ids);
        console.log(teamIds);
    }

    const previwImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setMemberImage(file);
            setMemberImagePreview(reader.result);
        }
        reader.readAsDataURL(file);
    };


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
                   <Row>
                       <Col md="6" className='mx-auto'>
                             <h3 className='main-body-header-title mb-3 text-center'>Edit Member</h3>
                                <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                                    <Form.Group className="mb-3" controlId="Form.Control">
                                        <Form.Control type="name" placeholder="Enter Full Name" value={name || ''} onChange={(e)=>{ setName(e.target.value) }} />
                                    </Form.Group> 
                                    <Form.Group className="mb-3" controlId="Form.Control">
                                        <Form.Control type="email" placeholder="Enter Your Email" value={email || ''} onChange={(e)=>{ setEmail(e.target.value) }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Form.Control">
                                        <Form.Control type="number" placeholder="Enter Your Phone Number" onChange={(e)=>{ setPhone(e.target.value) }} />
                                    </Form.Group> 
                                    <Form.Group className="mb-3" controlId="Form.Control">
                                        <Form.Control as="textarea" placeholder="Enter Your Address" rows={3} onChange={(e)=>{ setAddress(e.target.value) }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Form.Control">
                                        <Form.Control type="file" placeholder="Image Upload" accept='images/*' onChange={previwImage} />
                                        <img src={memberImagePreview} height={120} />
                                    </Form.Group> 
                                    <Form.Group className="mb-3">
                                        <Select 
                                            options={options} 
                                            isMulti  
                                            placeholder="Select Teams" 
                                            defaultValue={selectedTeams} 
                                            onChange={handleTeamChange}  
                                        />
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