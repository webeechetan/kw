import React from 'react';
import { Card, Col, Dropdown, Row, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function Notice() {
    const UpdateNoticeName = [
        { NoticeName: "John Cena" },
        { NoticeName: "Rock Johnson" },
        { NoticeName: "Batista" },
        { NoticeName: "Edge Mark" },
        { NoticeName: "Brock Lesnar" }
    ];
    const renderNotice = (props, index) => {
        return (
            <Row>
                <Col>
                    <div className="card-top">
                        <div className="card-options">
                            <Dropdown align="end">
                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                <Dropdown.Menu className="card-options-submenu">
                                    <Dropdown.Item href="#"><EditOutlinedIcon/> Edit</Dropdown.Item>
                                    <Dropdown.Item href="#"><DeleteOutlineOutlinedIcon/> Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="card-user">
                            <img className="img-fluid" src={require("../../assets/images/users/user.jpg")} alt="User" />
                        </div>
                        <div className="card-right">
                            <div className="notice-name mb-3">{props.NoticeName} <span className="d-flex"><small>2 mins ago</small></span></div>
                            <h5>Something new is brewing</h5>
                            <Card.Text className="mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </div>
                    </div>
                    <Row className="align-items-center">
                        <Col>
                            <ListGroup as="ul" className="card-icons-group">
                                <ListGroup.Item as="li"><a href="#"><BookmarkBorderOutlinedIcon /></a></ListGroup.Item>                                                        
                                <ListGroup.Item as="li"><a href="#"><ChatBubbleOutlineOutlinedIcon /></a></ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <div className="team-member-group justify-content-end">
                                <span className="team-member">RK</span>
                                <span className="team-member"><img src={require("../../assets/images/users/avatar1.jpg")} alt="User" /></span>
                                <span className="team-member">JK</span>
                                <span className="team-member"><img src={require("../../assets/images/users/avatar2.jpg")} alt="User" /></span>
                                <span className="team-member"><a href="#">+49</a></span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
      };
    return (
        <>
            {UpdateNoticeName.map(renderNotice)}
        </>
    )
}

Notice.prototype = {
    NoticeName: PropTypes.string.isRequired
}
