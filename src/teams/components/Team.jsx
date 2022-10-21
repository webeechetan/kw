import React from 'react';
import { Card, Col, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export default function Team() {
    const UpdateTeamName = [
        { TeamName: "Tech Team" },
        { TeamName: "CS Team" },
        { TeamName: "Social Media Team" },
        { TeamName: "Design Team" },
        { TeamName: "Media Team" }
    ];
    const renderTeam = (props, index) => {
        return (
            <Col md="6" xl="4" className="mb-4">
                <Card key={index} className="card-style1 h-100">
                    <Card.Body>
                        <div className="card-options">
                            <Dropdown align="end">
                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                <Dropdown.Menu className="card-options-submenu">
                                    <Dropdown.Item href="#"><EditOutlinedIcon/> Edit</Dropdown.Item>
                                    <Dropdown.Item href="#"><DeleteOutlineOutlinedIcon/> Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="mb-3"><img className="img-fluid img-team-dp" src={require("../../assets/images/users/user.jpg")} alt="Team DP Logo" width="200" /></div>
                        <Card.Title><a href="#">{props.TeamName}</a></Card.Title>
                        <Card.Text className="mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        <div className="team-member-group">
                            <span className="team-member">RK</span>
                            <span className="team-member"><img src={require("../../assets/images/users/avatar1.jpg")} alt="User" /></span>
                            <span className="team-member">JK</span>
                            <span className="team-member"><img src={require("../../assets/images/users/avatar2.jpg")} alt="User" /></span>
                            <span className="team-member"><a href="#">+49</a></span>
                        </div>
                        {/* <div className="btn-action d-flex justify-content-center mt-4">
                            <a href="javascript:void(0);" className="btn btn-sm btn-edit"><EditOutlinedIcon/></a>
                            <a href="javascript:void(0);" className="btn btn-sm btn-delete"><DeleteOutlineOutlinedIcon/></a>                      
                        </div> */}
                    </Card.Body>
                </Card>
            </Col>
        );
      };
    return (
        <>
            {UpdateTeamName.map(renderTeam)}
        </>
    )
}

Team.prototype = {
    TeamName: PropTypes.string.isRequired,
    TeamMemberCount: PropTypes.number.isRequired
}

Team.defaultProps = {
    TeamName: 'Team name',
    TeamMemberCount: 'Team members count'
}
