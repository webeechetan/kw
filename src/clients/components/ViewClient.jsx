import React from 'react';
import  user_image from '../../assets/images/users/user.jpg'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { Container, Row, Col, Card, Button, Dropdown,Tabs,Tab,Table} from 'react-bootstrap';

const ViewClient = () => {
  return (
      <>
          <Header />
          <div className="main-body">
              <Sidebar />
              <div className="main-body-content">
                    <Container fluid>
                        <div className="main-body-header mb-4">
                                <Row className="align-items-center">
                                    <Col>
                                        <h4 className="main-body-header-title mb-0">ACMA</h4>
                                    </Col>
                                    <Col className="text-end">
                                        <Link to=""><Button>Add Task</Button></Link>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className="tab-view mt-4">
                                        <Tabs defaultActiveKey="second">
                                            <Tab eventKey="first" title="List">
                                               <div className="tab-view-list mt-4">
                                                  <h6 class="main-body-header-title mb-4">Assigned</h6>  
                                                    <Card className='border-0'>
                                                        <Card.Body className='p-0'>
                                                            <Table responsive="sm">
                                                            <thead>
                                                                <tr>
                                                                    <th></th>
                                                                    <th>Task Name</th>
                                                                    <th>Priority</th>
                                                                    <th>Assign</th>
                                                                    <th>Due Date</th>
                                                                    <th>Attachment</th>
                                                                    <th>Edit</th>
                                                                    <th>Delete</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><CheckBoxOutlineBlankOutlinedIcon /></td>
                                                                    <td>acma</td>
                                                                    <td>High</td>
                                                                    <td>Ajay</td>
                                                                    <td>10 June</td>
                                                                    <td><AttachFileOutlinedIcon /></td> 
                                                                    <td><EditOutlinedIcon /></td>
                                                                    <td><DeleteOutlineOutlinedIcon /></td>                                                           
                                                                </tr>
                                                                <tr>
                                                                    <td><CheckBoxOutlineBlankOutlinedIcon /></td>
                                                                    <td>acma</td>
                                                                    <td>High</td>
                                                                    <td>Ajay</td>
                                                                    <td>10 June</td>
                                                                    <td><AttachFileOutlinedIcon /></td>
                                                                    <td><EditOutlinedIcon /></td>
                                                                    <td><DeleteOutlineOutlinedIcon /></td>                                                              
                                                                </tr>
                                                                <tr>
                                                                    <td><CheckBoxOutlineBlankOutlinedIcon /></td>
                                                                    <td>acma</td>
                                                                    <td>High</td>
                                                                    <td>Ajay</td>
                                                                    <td>10 June</td>
                                                                    <td><AttachFileOutlinedIcon /></td>
                                                                    <td><EditOutlinedIcon /></td>
                                                                    <td><DeleteOutlineOutlinedIcon /></td>                                                              
                                                                </tr>
                                                                <tr>
                                                                    <td><CheckBoxOutlineBlankOutlinedIcon /></td>
                                                                    <td>acma</td>
                                                                    <td>High</td>
                                                                    <td>Ajay</td>
                                                                    <td>10 June</td>
                                                                    <td><AttachFileOutlinedIcon /></td>
                                                                    <td><EditOutlinedIcon /></td> 
                                                                    <td><DeleteOutlineOutlinedIcon /></td>                                                             
                                                                </tr>
                                                                                                                    
                                                            </tbody>
                                                            </Table>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                                
                                            </Tab>
                                            <Tab eventKey="second" title="Board">
                                                <Row className='flex-row flex-nowrap scrolling-wrapper mt-4'>
                                                    <Col xs="4" className='mb-4'>
                                                        <h6 class="main-body-header-title mb-0">Assigned</h6>
                                                        <div className="view-task mt-4">
                                                            <Card className="card-style1 h-100 mb-4">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Home Page</div>
                                                                        
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="flex d-flex align-items-center">
                                                                                <span className="text-yellow">Today</span>
                                                                            </div>
                                                                            <div className="d-flex align-items-center">
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                            <Card className="card-style1 h-100 mb-4">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Home Page</div>
                                                                    
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div className="flex d-flex align-items-center">
                                                                            <span className="text-yellow">Today</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                        </div>
                                                                    </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                            <Card className="card-style1 h-100 mb-4">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Home Page</div>
                                                                        
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div className="flex d-flex align-items-center">
                                                                            <span className="text-yellow">Today</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                        </div>
                                                                    </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                            <Card className="card-style1 h-100">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Home Page</div>
                                                                    
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div className="flex d-flex align-items-center">
                                                                            <span className="text-yellow">Today</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                        </div>
                                                                    </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                        </div>
                                                        
                                                    </Col>
                                                    <Col xs="4" className='mb-4'>
                                                        <h6 class="main-body-header-title mb-0">Accepted</h6>
                                                        <div className="view-task mt-4">
                                                            <Card className="card-style1 h-100 mb-4">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Home Page</div>
                                                                        
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="flex d-flex align-items-center">
                                                                                <span className="text-orange">Today</span>
                                                                            </div>
                                                                            <div className="d-flex align-items-center">
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                            <Card className="card-style1 h-100 mb-4">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Home Page</div>
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="flex d-flex align-items-center">
                                                                                <span className="text-orange">Today</span>
                                                                            </div>
                                                                            <div className="d-flex align-items-center">
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                            <Card className="card-style1 h-100 mb-4">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Home Page</div>
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="flex d-flex align-items-center">
                                                                                <span className="text-orange">Today</span>
                                                                            </div>
                                                                            <div className="d-flex align-items-center">
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                            <Card className="card-style1 h-100">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Home Page</div>
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="flex d-flex align-items-center">
                                                                                <span className="text-orange">Today</span>
                                                                            </div>
                                                                            <div className="d-flex align-items-center">
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                        </div>
                                                        
                                                    </Col>
                                                    <Col xs="4" className='mb-4'>
                                                        <h6 class="main-body-header-title mb-0">In Progress</h6>
                                                        <div className="view-task mt-4">
                                                            <Card className="card-style1 h-100 mb-4">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Sleepnation landing Page</div>
                                                                        
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div className="flex d-flex align-items-center">
                                                                            <span className="text-primary">1 June</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                        </div>
                                                                    </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                            <Card className="card-style1 h-100 mb-4">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Acma mailer</div>
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="flex d-flex align-items-center">
                                                                                <span className="text-primary">yesterday</span>
                                                                            </div>
                                                                            <div className="d-flex align-items-center">
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                            <Card className="card-style1 h-100 mb-4">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Home Page</div>
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="flex d-flex align-items-center">
                                                                                <span className="text-primary">Today</span>
                                                                            </div>
                                                                            <div className="d-flex align-items-center">
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                            <Card className="card-style1 h-100 mb-4">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Home Page</div>
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="flex d-flex align-items-center">
                                                                                <span className="text-primary">Today</span>
                                                                            </div>
                                                                            <div className="d-flex align-items-center">
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                            
                                                        </div>
                                                        
                                                    </Col>
                                                    <Col xs="4" className='mb-4'>
                                                        <h6 class="main-body-header-title mb-0">In Review</h6>
                                                        <div className="view-task mt-4">
                                                            <Card className="card-style1 h-100 mb-4">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Sleepnation landing Page</div>
                                                                        
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div className="flex d-flex align-items-center">
                                                                            <span className="text-secondary">1 June</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                        </div>
                                                                    </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                            <Card className="card-style1 h-100 mb-4">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Acma mailer</div>
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="flex d-flex align-items-center">
                                                                                <span className="text-secondary">yesterday</span>
                                                                            </div>
                                                                            <div className="d-flex align-items-center">
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                            <Card className="card-style1 h-100 mb-4">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Home Page</div>
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="flex d-flex align-items-center">
                                                                                <span className="text-secondary">Today</span>
                                                                            </div>
                                                                            <div className="d-flex align-items-center">
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                            <Card className="card-style1 h-100 mb-4">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Home Page</div>
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="flex d-flex align-items-center">
                                                                                <span className="text-secondary">Today</span>
                                                                            </div>
                                                                            <div className="d-flex align-items-center">
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                            
                                                        </div>
                                                        
                                                    </Col>
                                                    <Col xs="4" className='mb-4'>
                                                        <h6 class="main-body-header-title mb-0">Completed</h6>
                                                        <div className="view-task mt-4">
                                                            <Card className="card-style1 h-100 mb-4">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Sleepnation landing Page</div>
                                                                        
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div className="flex d-flex align-items-center">
                                                                            <span className="text-success">1 June</span>
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                        </div>
                                                                    </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                            <Card className="card-style1 h-100 mb-4">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Acma mailer</div>
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="flex d-flex align-items-center">
                                                                                <span className="text-success">yesterday</span>
                                                                            </div>
                                                                            <div className="d-flex align-items-center">
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                            <Card className="card-style1 h-100 mb-4">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Home Page</div>
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="flex d-flex align-items-center">
                                                                                <span className="text-success">Today</span>
                                                                            </div>
                                                                            <div className="d-flex align-items-center">
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                            <Card className="card-style1 h-100 mb-4">
                                                                    <Card.Body>
                                                                        <div className="card-options">
                                                                            <Dropdown align="end">
                                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                                <Dropdown.Menu className="card-options-submenu">
                                                                                <Dropdown.Item ><Link to=""><EditOutlinedIcon />Edit</Link></Dropdown.Item>
                                                                                    <Dropdown.Item><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                        <div className="mb-3 pe-5">Home Page</div>
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="flex d-flex align-items-center">
                                                                                <span className="text-success">Today</span>
                                                                            </div>
                                                                            <div className="d-flex align-items-center">
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                                <div><img className="img-fluid clients-image" src={user_image} alt="Kaykewalk chat User" /></div> 
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        
                                                                    </Card.Body>
                                                            </Card>
                                                            
                                                        </div>
                                                        
                                                    </Col>
                                                </Row>
                                            </Tab>
                                            
                                        </Tabs>
                                    </div>
                                </Row>
                                
                        </div>
                     
                   </Container>
                 
               </div>
          </div>
         
      </>
  )
}

export default ViewClient;