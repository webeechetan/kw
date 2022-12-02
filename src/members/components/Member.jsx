import React, {useState, useEffect} from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { Col, Card,Dropdown,} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import config from '../../config';
import axios from 'axios';


export default function Member() {
    const UpdateMember = [
        { name: "Ragini", designation: "UI/UX Designer" },
        { name: "Rajiya",designation: "UI/UX Developer" },
        { name: "Soniya",designation: "Php Developer" },
        { name: "Kamini",designation: "Jr. Python Developer" },
        { name: "Ragini",designation: "UI/UX Designer" },
        { name: "Ragini",designation: "UI/UX Designer" },
        { name: "Ragini",designation: "UI/UX Designer" },
        { name: "Ragini",designation: "UI/UX Designer" },
        { name: "Soniya",designation: "Php Developer" },
    ]

    const [members, setMembers] = useState([]);

    const getMembers = () => {
        axios.get(`${config.config.api_url}/users`,config.config.headers)
        .then((res) => {
            setMembers(res.data.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getMembers();
    }, []);
    const renderMember = (props, index) => {
        return (
            <>         
                <Col md="4" className="mb-4">
	                <Card key={index} className="card-style1">
						<Card.Body>
							<div className="card-options">
								<Dropdown align="end">
									<Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
									<Dropdown.Menu className="card-options-submenu">
									<Dropdown.Item href="#"><EditOutlinedIcon /> Edit</Dropdown.Item>
									<Dropdown.Item href="#"><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
                            <div className='d-flex'>
                                <div className="mb-3"><img className="img-fluid img-member-dp" src={require("../../assets/images/users/user.jpg")} alt="Team DP Logo" width="70" /></div>
                                <div className="ms-4 mt-1">
                                    <Card.Title><a href="#">{props.name }</a></Card.Title>
                                    <Card.Text>{props.designation}</Card.Text>
                                </div>
                            </div>
                            <div className='ms-2'>
                                <p className='mb-0'><CallOutlinedIcon className='pe-2 member-icon'/>070 2860 5375</p>
                                <p className='mb-0 mt-2'><EmailOutlinedIcon className='pe-2 member-icon' />PhyllisGatlin@spy.com</p>
                                <p className='mb-0 mt-2'><PlaceOutlinedIcon className='pe-2 member-icon'/>52 Ilchester MYBSTER 9WX</p>
                            </div>
                        </Card.Body>
                        <div className='btn-group' role="group">
                                    <Link to ="../memberprofile"><button type="button" className='btn btn-outline-light text-turncated'>View Profile</button></Link>
                                    <button type="button" className=' btn btn-outline-light text-turncated'>View Task</button>
                        </div>
					</Card>
                </Col>                            
            </>
);
    };
    return (
        <>
        {UpdateMember.map(renderMember)}
    </>
    )
}
Member.prototype = {
    name: PropTypes.string.isRequired,
    designation: PropTypes.number.isRequired
}

Member.defaultProps = {
  name: 'name',
    designation: ' designation'
}
