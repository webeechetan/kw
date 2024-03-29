import React, { useState, useEffect, Component, forwardRef } from "react";
import { Link } from 'react-router-dom';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { Row, Col } from "react-bootstrap";

import { config } from "../config";
import axios from 'axios';
import Select from 'react-select';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { async } from "q";
import { Update } from "@mui/icons-material";
import moment from "moment/moment";

import Skeleton from '@mui/material/Skeleton';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';



export default function EditTask(props) {

    const closeEditk = () => {
        props.handleEditClose(true);
    }

    const [users, setUsers] = useState([]);
    const [userOptions, setUserOptions] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState({name:'WSS'});
    const [userIds, setUserIds] = useState([]);
    const [notifyIds, setNotifyIds] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [task, setTask] = useState({});
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [selectedNotifyUsers, setSelectedNotifyUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [editor, setEditor] = useState(false);
    const [projectOptions, setProjectOptions] = useState([]);
    const [selectedProject, setSelectedProject] = useState([]);
    const [loading, setLoading] = useState(true);

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

    const projectChangeHandler = e => {
        setProject(e.value);
    }

    const DatePickerCustomInput = forwardRef(({ value, onClick }, ref) => (
        <div className="addRules addRules_date">
            <span className="addRules_date_icon icon_rounded" onClick={onClick} ref={ref}><DateRangeOutlinedIcon /></span>
            <span className="addRules_date_text text-warning">{value}</span>
        </div>
    ));

    async function getTask() {
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.api_url}/tasks/${props.id}`, header);
        setTask(res.data.data);
        console.log(res.data.data);
        res.data.data.users.map((item) => {
            let user = {
                value: item.id,
                label: item.name,
                image : item.image,
            }
            userIds.push(item.id);
            selectedUsers.push(user);
        });
        setUserIds(userIds);
        setSelectedUsers(selectedUsers);
        setTitle(res.data.data.name);
        setDescription(res.data.data.description);
        setProject(res.data.data.project.id);
        setStartDate(new Date(res.data.data.due_date));
        let selected_project = {
            value: res.data.data.project.id,
            label: res.data.data.project.name,
        }
        selectedProject.push(selected_project);
        setSelectedProject(selectedProject);
        return res;
    }


    useEffect(() => {
        getTask();
        getUsers();
        getProjects();
        getComments();
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
            options.push({
                value: item.id,
                label: item.name,
                image : item.image,
            });
        });
        setUserOptions(options);
        setLoading(false);
        return res;
    }

    async function getProjects() {
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.api_url}/projects`, header);
        let options = [];
        res.data.data.map((item) => {
            options.push({
                value: item.id,
                label: item.name,
            });
        }
        );
        setProjectOptions(options);
        setLoading(false);
        return res;
        
    }

    async function UpdateTask() {
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        
        const res = await axios.put(`${config.api_url}/tasks/${props.id}`, {   
            name: title,
            description: description,
            project_id: project,
            users: userIds,
            notify_to: notifyIds,
            due_date: startDate
        }, header);
        console.log(res);

        if(res.data.success){
            closeEditk();
            props.handleEditClose();
        }
        return res;
    }


    async function getComments(){
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.api_url}/tasks/${props.id}/comments`, header);
        console.log(res);
        setComments(res.data.data);
        return res;
    }

    async function addComment(){
        let __token = localStorage.getItem('__token');
        const header = {
            headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.post(`${config.api_url}/tasks/${props.id}/comments`, {
            comment: comment
        }, header);
        console.log(res);
        if(res.data.success){
            getComments();
            setComment('');
        }
        return res;
    }

    return (
        <>
            <div className="AddCanvas">
                <div className="AddTask_head">
                    <Row>
                        <Col>
                            <Tooltip title="Single Task View" placement="bottom-start" arrow>
                                <Link className="btn-border" onClick={UpdateTask}><CropFreeOutlinedIcon /></Link>
                            </Tooltip>
                        </Col>
                        <Col>
                            <Stack direction="row" justifyContent="end" spacing={2}>
                                <Tooltip title="Save Task" arrow>
                                    <Link className="btn-border btn-border-primary" onClick={UpdateTask}><CheckOutlinedIcon /></Link>
                                </Tooltip>
                                <Tooltip title="Close" arrow>
                                    <Link onClick={() => {
                                            closeEditk()
                                        }} className="btn-border"><CloseOutlinedIcon />
                                    </Link>
                                </Tooltip>
                            </Stack>
                        </Col>
                    </Row>
                </div>
                <div className="AddTask_body AddTask_body-edit">
                    <div className="AddTask_body_overview">
                    {loading && 
                        <div>
                            <Skeleton height={10} />
                            <Skeleton animation="wave" height={10} />
                            <Skeleton animation={false} height={10} />
                        </div>
                    }
                        <input className="form-control form-control-typeStyle AddTask_title" onChange={(e)=>{ setTitle(e.target.value) }} type="text" defaultValue={task.name} placeholder="Type your task..." />
                        <div className="AddTask_rulesOverview">
                            <div className="AddTask_rulesOverview_item">
                                <div className="AddTask_rulesOverview_item_name">Assigned to</div>
                                <div className="AddTask_rulesOverview_item_rulesAction">
                                    {loading && 
                                    <Row>
                                        <Col>
                                            <div className="Skeleton-avatarName">
                                                <Skeleton variant="circular" width={30} height={30} />
                                                <Skeleton animation="wave" height={15} />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="Skeleton-avatarName">
                                                <Skeleton variant="circular" width={30} height={30} />
                                                <Skeleton animation="wave" height={15} />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="Skeleton-avatarName">
                                                <Skeleton variant="circular" width={30} height={30} />
                                                <Skeleton animation="wave" height={15} />
                                            </div>
                                        </Col>
                                    </Row>
                                    }
                                    <Select 
                                        options={userOptions} 
                                        isMulti 
                                        onChange={userChangeHandler}
                                        defaultValue={selectedUsers}
                                        formatOptionLabel={
                                            ({ value, label, image }) => (
                                                <div className="add_assignee">
                                                    <div className="add_assignee-img">
                                                        <img src={image} alt={label} />
                                                    </div>
                                                    <div className="add_assignee-name">
                                                        {label}
                                                    </div>
                                                </div>
                                            )
                                        }
                                    />
                                </div>
                            </div>
                            <div className="AddTask_rulesOverview_item">
                                <div className="AddTask_rulesOverview_item_name">Notify to</div>
                                <div className="AddTask_rulesOverview_item_rulesAction">
                                    <Select 
                                        options={userOptions} 
                                        isMulti 
                                        onChange={notifyChangeHandler}
                                        defaultValue={selectedUsers}
                                        formatOptionLabel={
                                            ({ value, label, image }) => (
                                                <div className="add_assignee">
                                                    <div className="add_assignee-img">
                                                        <img src={image} alt={label} />
                                                    </div>
                                                    <div className="add_assignee-name">
                                                        {label}
                                                    </div>
                                                </div>
                                            )
                                        }
                                        />

                                </div>
                            </div>
                            <div className="AddTask_rulesOverview_item">
                                <div className="AddTask_rulesOverview_item_name">Project</div>
                                <div className="AddTask_rulesOverview_item_rulesAction">
                                    <Select
                                        isMulti
                                        defaultValue={selectedProject}
                                        options={projectOptions}
                                        onChange={projectChangeHandler}
                                    />
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
                            
                            {/* Description */}
                            <div className="AddTask_rulesOverview_item">
                                <div className="AddTask_rulesOverview_item_name">Description</div>
                                <div className="AddTask_rulesOverview_item_rulesAction">
                                    <div className="AddTask_rulesOverview_item_rulesAction_wrap">
                                        {!editor && <div className="AddTask_des_text" onClick={() => { setEditor(true) }}> <span 
                                        dangerouslySetInnerHTML={{ __html: description }}></span></div>}

                                        {editor && <SunEditor
                                            onChange={(content) => { setDescription(content) }}
                                            setContents={description}
                                            setOptions={{
                                                height: 100,
                                                buttonList: [
                                                    ['undo', 'redo'],
                                                    [ 'fontSize'],
                                                    ['bold', 'underline', 'italic', 'strike'],
                                                    ['fontColor'],
                                                    ['align', 'horizontalRule', 'list'],
                                                    ['link'],
                                                ],
                                            }}
                                        />}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Activity */}
                        <h5 className="mt-5">Activity</h5>
                        <div className="mt-4">
                            {comments.map((comment, index) => (
                                <div className="d-flex mt-3" key={"comment"+comment.id}>
                                    <div className="me-3">
                                        <img src={comment.user.image} className="rounded-circle" width="40" alt="..." />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="mb-2">
                                            <strong>{comment.user.name}</strong> commented on <strong>{
                                                moment(comment.created_at).format('MMMM Do YYYY')
                                            }</strong>
                                        </div>
                                        <div dangerouslySetInnerHTML={{ __html: comment.comment }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Comments */}
                <div className="custComment">
                        <div className="custComment-wrap">
                            <div className="custComment-editor">
                                <SunEditor 
                                    onChange={(content) => { setComment(content) }}
                                    setContents={comment}
                                    setOptions={{
                                        height: 100,
                                        buttonList: [
                                            ['undo', 'redo'],
                                            [ 'fontSize'],
                                            ['bold', 'underline', 'italic', 'strike'],
                                            ['fontColor'],
                                            ['align', 'horizontalRule', 'list'],
                                            ['link'],
                                        ],
                                    }}
                                />
                            </div>
                            <button className="btn-sm btn-primary custComment-btn" onClick={ ()=>{ addComment() } }>Comment <SendOutlinedIcon/></button>
                        </div>
                    </div>
            </div>
        </>
    )
}
