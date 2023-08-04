import React, { useState, useEffect, Component, forwardRef } from "react";
import { Link } from 'react-router-dom';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Dropdown} from "react-bootstrap";
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import { config } from "../config";
import axios from 'axios';
import Select from 'react-select';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { async } from "q";



export default function AddTask(props) {

    let status = props.status;
    console.log(status);


    const closeAddTask = () => {
        props.handleClose();
    }


    const [users, setUsers] = useState([]);
    const [userOptions, setUserOptions] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState({name:'WS'});
    const [userIds, setUserIds] = useState([]);
    const [notifyIds, setNotifyIds] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const userChangeHandler = e => {

        let ids = [];
        e.map((item) => {
          ids.push(item.value);
        });
        setUserIds(ids);
      };

    const notifyChangeHandler = e => {
        let ids = [];
        e.map((item) => {
            ids.push(item.value);
        });
        setNotifyIds(ids);
    };

    const DatePickerCustomInput = forwardRef(({ value, onClick }, ref) => (
        <div className="addRules addRules_date">
            <span className="addRules_date_icon icon_rounded" onClick={onClick} ref={ref}><DateRangeOutlinedIcon /></span>
            <span className="addRules_date_text text-warning">{value}</span>
        </div>
    ));


    useEffect(() => {
        getUsers();
        getProjects();
    }, []);


    async function getUsers() {
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.api_url}/users`, header);
        setUsers(res.data.data);
        let options = [];

        res.data.data.map((item) => {
            options.push({ value: item.id, label:item.name });
        });
        setUserOptions(options);
        return res;
    }

    async function getProjects() {
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.api_url}/projects`, header);
        setProjects(res.data.data);
        return res;
        
    }

    async function saveTask() {
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.post(`${config.api_url}/tasks`, {   
            name: title,
            description: description,
            project_id: project.id,
            users: userIds,
            notify_to: notifyIds,
            due_date: startDate,
            status: 'assigned'
        }, header);

        if(res.data.success){
            props.handleClose();
        }
        return res;
    }






    return (
        <>
            <div className="AddCanvas">
                <div className="AddTask_head">
                    <div className="AddTask_head_btn_status">
                        <Link className="btn_status"><EventRepeatOutlinedIcon /> In Progress</Link>
                        <Link className="btn_status"><GradingOutlinedIcon /> In Review</Link>
                        <Link className="btn_status"><CheckOutlinedIcon /> Completed</Link>
                    </div>
                    <div onClick={() => {
                        closeAddTask()
                    }} className="AddCanvas_close icon_remove icon_rounded"><CloseOutlinedIcon /></div>
                </div>
                <div className="AddTask_body">
                    <div className="AddTask_body_overview">
                        <input className="form-control add_input_style AddTask_title" onChange={(e)=>{ setTitle(e.target.value) }} type="text" placeholder="Type your task..." />
                        <div className="AddTask_rulesOverview">
                            <div className="AddTask_rulesOverview_item">
                                <div className="AddTask_rulesOverview_item_name">Assigned to</div>
                                <div className="AddTask_rulesOverview_item_rulesAction">
                                    <Select 
                                        options={userOptions} 
                                        isMulti 
                                        onChange={userChangeHandler}
                                        />
                                </div>
                            </div>
                            <div className="AddTask_rulesOverview_item">
                                <div className="AddTask_rulesOverview_item_name">Notify to</div>
                                <div className="AddTask_rulesOverview_item_rulesAction">
                                    <Select options={userOptions} isMulti onChange={notifyChangeHandler} />

                                </div>
                            </div>

                            <div className="AddTask_rulesOverview_item">
                                <div className="AddTask_rulesOverview_item_name">Project</div>
                                <div className="AddTask_rulesOverview_item_rulesAction">
                                    <div className="AddTask_rulesOverview_item_rulesAction_wrap">
                                        <div className="addRules addRules_project">
                                            <span className="addRules_project_icon icon_rounded">WS</span>
                                            <span className="addRules_project_text">Webeesocial India</span>
                                            <span className="addRules_project-remove icon_remove"><CloseOutlinedIcon /></span>
                                        </div>
                                        <NavDropdown title={<span className="addRules_project_icon icon_rounded">{ project.name.slice(0,2)  }</span>} className="dropdown-chat dropdown-menu-end">
                                            <div className="dropdown-menu-items">
                                            {projects.map((project, index) => (
                                                    <NavDropdown.Item onClick={ ()=>{ setProject(project) } }>
                                                        <div>
                                                            <span>{project.name}</span>
                                                            <div className="small text-muted">{project.client.name}</div>
                                                            <div className="small text-muted mt-1"></div>
                                                        </div>
                                                    </NavDropdown.Item>
                                               ))}
                                            </div>
                                        </NavDropdown>
                                        {/* <div className="AddTask_rulesOverview_item_add"><Link className="btn_link">Add Project</Link></div> */}
                                        <Dropdown className="modal_add dropdown-menu-end">
                                            <Dropdown.Toggle className="modal_add-btn">Add Project</Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <div className="modal_add-body">
                                                    <div className="modal_add-search"><input className="form-control" type="text" placeholder="Search..."/></div>
                                                    <div className="modal_add-wrap">
                                                        <div></div>
                                                    </div>
                                                </div>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </div>
                                </div>
                            </div>

                            <div className="AddTask_rulesOverview_item">
                                <div className="AddTask_rulesOverview_item_name">Due Date</div>
                                <div className="AddTask_rulesOverview_item_rulesAction">
                                    <div className="AddTask_rulesOverview_item_rulesAction_wrap">
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            customInput={
                                                <DatePickerCustomInput />
                                            }
                                        />
                                        {/* <div className="AddTask_rulesOverview_item_add"><Link className="btn_link">Add Date</Link></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="AddTask_des">
                            <h4 className="AddTask_rulesOverview_item_name mb-4">Description</h4>
                            <SunEditor 
                                onChange={(content) => { setDescription(content) }}
                            />
                        </div>

                        <button className="btn btn-primary mt-3" onClick={saveTask}>
                            Save
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}
