import React, {useEffect,useState} from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Team from './components/Team';
import { Container, Row, Col, Card, Button, Dropdown , Spinner} from 'react-bootstrap';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../config';

export default function Teams(props) {

    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getTeams()
        .then((res) => {
            setTeams(res.data.data);
            console.log(res.data.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        });
    }, []);


    async function getTeams(){
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.config.api_url}/teams`,header);
        return res;
    }

    async function deleteTeam(id){
        setLoading(true);
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.delete(`${config.config.api_url}/teams/${id}`,header);
        const index = teams.findIndex((team) => team.id === id);
        teams.splice(index, 1);
        setTeams([...teams]);
        setLoading(false);
        return res;
    }
    
    const randomUsers = function(obj){
        let random = Math.floor(Math.random() * obj.length);
        return obj[random];
    };
    return (
        <>
        <Header />
        <div className="main-body">
            <Sidebar />
            <div className="main-body-content">
            { loading === true ?
                <Col md="12" className='text-center mt-4'>
                    <Spinner as="span" animation="border" size="lg" role="status" aria-hidden="true" />
                </Col>
            : 
                <Container fluid>
                    <div className="main-body-header">
                        <Row className="align-items-center">
                            <Col>
                                <h3 className="main-body-header-title mb-0">Teams</h3>
                            </Col>
                            <Col className="text-end">
                                <Link to="../createteam"><Button>Create Team</Button></Link>
                            </Col>
                        </Row>
                    </div>
                    {/* Users */}
                    <Card className="main-body-card">
                        <Card.Body>
                            <Row>
                                <Col md="4">
                                    <h4 className="text-center title-style"><span>Town Hall</span></h4>
                                    <Card className="card-style1">
                                        <Card.Body>
                                            <div className="mb-3"><img className="img-fluid img-townhall-logo" src={require("../assets/images/team/town-hall-logo.png")} alt="Town Hall Logo" /></div>
                                            <div className="mb-3"><img className="img-fluid img-townhall-dp" src={require("../assets/images/users/user.jpg")} alt="Team DP Logo" width="200" /></div>
                                            <Card.Title><a href="#">Webeesocial</a></Card.Title>
                                            <Card.Text className="mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                            <div className="team-member-group">
                                                <span className="team-member">RK</span>
                                                <span className="team-member"><img src={require("../assets/images/users/avatar1.jpg")} alt="User" /></span>
                                                <span className="team-member">JK</span>
                                                <span className="team-member"><img src={require("../assets/images/users/avatar2.jpg")} alt="User" /></span>
                                                <span className="team-member"><a href="#">+49</a></span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md="8">
                                    <Row>
                                        <Col md="12">
                                            <h4 className="text-center title-style"><span>My Teams</span></h4>
                                        </Col>
                                        {teams.map((team) => (
                                        <Col md="6" className="mb-4" key={team.id}>
                                            <Card className="card-style1 h-100">
                                                <Card.Body>
                                                    <div className="card-options">
                                                        <Dropdown align="end">
                                                            <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                            <Dropdown.Menu className="card-options-submenu">
                                                                <Dropdown.Item ><EditOutlinedIcon/> Edit</Dropdown.Item>
                                                                <Dropdown.Item onClick={() => { deleteTeam(team.id) }}><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                    <div className="mb-3"><img className="img-fluid img-team-dp" src={team.image } alt="Team DP Logo" width="200" /></div>
                                                    <Card.Title><a href="#">{team.name}</a></Card.Title>
                                                    <Card.Text className="mb-3">{team.description}</Card.Text>
                                                    <div className="team-member-group">
                                                        {
                                                        team.users.slice(0,4).map((user,i) => (
                                                            user.image=='http://localhost:8000/members/default.png' ? 
                                                            <span className="team-member" key={user.id}>{ user.name[0] }</span>
                                                            :
                                                            <span className="team-member" key={user.id}><img src={user.image} alt="User" /></span>
                                                            
                                                        ))}
                                                        <span className="team-member"><a href="#">+{ team.users.length < 4 ? '0' : team.users.length - 4 }</a></span> 
                                                        
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        ))}
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
                }
            </div>
        </div>
        </>
    )
}