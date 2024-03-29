import React, { useState, useEffect, Component, forwardRef } from "react";
import { Link } from 'react-router-dom';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Dropdown, Row, Col, Form, ListGroup } from "react-bootstrap";
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import RepeatIcon from '@mui/icons-material/Repeat';
import { FormControl, InputLabel, MenuItem, FormHelperText } from '@mui/material';
import { Select as SelectMaterial } from '@mui/material';
import { Cron } from 'react-js-cron';
import 'react-js-cron/dist/styles.css';
import { converter } from 'react-js-cron';

import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';


import { config } from "../config";
import axios from 'axios';
import Select from 'react-select';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { async } from "q";



export default function AddTask(props) {

    const closeAddTask = () => {
        props.handleClose();
    }

    const [cron, setCron] = useState('30 5 * * 1,6')

    const [users, setUsers] = useState([]);
    const [userOptions, setUserOptions] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState({name:'WS'});
    const [userIds, setUserIds] = useState([]);
    const [notifyIds, setNotifyIds] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [editor, setEditor] = useState(false);
    const [projectOptions, setProjectOptions] = useState([]);
    const [isRecurring, setIsRecurring] = useState(false);

    const handleCronChange = (e) => {
        console.log(e);
        setCron(e);
    }

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
        <div className="addRules addRules-date">
            <span className="icon_rounded " ><DateRangeOutlinedIcon /></span>
            <Link className="addRules_text btn_link" onClick={onClick} ref={ref}>Add Date</Link>
            <Link className="addRules_text text-warning">{value}</Link>
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

        // res.data.data.map((item) => {
        //     options.push({ value: item.id, label:item.name });
        // });

        res.data.data.map((item) => {
            options.push({
                value: item.id,
                label: item.name,
                image: item.image,
                email: item.email
            });
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
        let options = [];
        res.data.data.map((item) => {
            options.push({ value: item.id, label: item.name });
        });
        setProjectOptions(options);
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
            project_id: project,
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

    const handleImageUpload = (targetImgElement, index, state, imageInfo, remainingFilesCount) => {
        console.log(targetImgElement, index, state, imageInfo, remainingFilesCount);
        let header = {
            headers: { Authorization: `Bearer ${localStorage.getItem('__token')}` },
            'Content-Type': 'multipart/form-data'
        }
        let formData = new FormData();
        formData.append('image', JSON.stringify(imageInfo));
        axios.post(`${config.api_url}/uploadImage`, formData, header)
            .then(res => {
                console.log(res.data.data);
                let editorState = state;
                editorState[index].src = res.data.data;
                setEditor(editorState);
            }
            )
            .catch(err => console.log(err))

    }

    return (
        <>
            <div className="AddCanvas">
                <div className="AddTask_head">
                    <Row>
                        <Col>
                            <Tooltip title="Single Task View" placement="bottom-start" arrow>
                                <Link className="btn-border"><CropFreeOutlinedIcon /></Link>
                            </Tooltip>
                        </Col>
                        <Col>
                            <Stack direction="row" justifyContent="end" spacing={2}>
                                <Tooltip title="Save Task" arrow>
                                    <Link className="btn-border btn-border-primary" onClick={saveTask}><CheckOutlinedIcon /></Link>
                                </Tooltip>
                                <Tooltip title="Close" arrow>
                                    <Link onClick={() => {
                                            closeAddTask()
                                        }} className="btn-border"><CloseOutlinedIcon />
                                    </Link>
                                </Tooltip>
                            </Stack>
                        </Col>
                    </Row>
                </div>
                <div className="AddTask_body">
                    <div className="AddTask_body_overview">
                        <input className="form-control form-control-typeStyle AddTask_title" onChange={(e)=>{ setTitle(e.target.value) }} type="text" placeholder="Type your task here..." />
                        <div className="AddTask_rulesOverview">
                            <div className="AddTask_rulesOverview_item">
                                <div className="AddTask_rulesOverview_item_name">Assigned to</div>
                                <div className="AddTask_rulesOverview_item_rulesAction">
                                    <Select 
                                        options={userOptions} 
                                        isMulti 
                                        onChange={userChangeHandler}
                                        formatOptionLabel={
                                            ({ value, label, image, email }) => (
                                                <div className="add_assignee">
                                                    <div className="add_assignee-img">
                                                        <img src={image} alt={label} />
                                                    </div>
                                                    <div className="add_assignee-name">
                                                        {label} <span>{email}</span>
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
                                        onChange={userChangeHandler}
                                        formatOptionLabel={
                                            ({ value, label, image, email }) => (
                                                <div className="add_assignee">
                                                    <div className="add_assignee-img">
                                                        <img src={image} alt={label} />
                                                    </div>
                                                    <div className="add_assignee-name">
                                                        {label} <span>{email}</span>
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
                                        options={projectOptions}
                                        onChange={projectChangeHandler}
                                    />
                                </div>
                            </div>

                            <div className="AddTask_rulesOverview_item">
                                <div className="AddTask_rulesOverview_item_name">Due Date</div>
                                <div className="AddTask_rulesOverview_item_rulesAction">
                                    <div className="AddTask_rulesOverview_item_rulesAction_wrap">
                                        <div className="AddTask_rulesOverview_item_add">
                                            <div className="addRules">
                                                <DatePicker
                                                    selected={startDate}
                                                    onChange={(date) => setStartDate(date)}
                                                    customInput={
                                                        <DatePickerCustomInput />
                                                    }
                                                />
                                                <Checkbox  
                                                    checked={isRecurring}
                                                    onChange={(e)=>{ setIsRecurring(e.target.checked) }}
                                                    icon={<RepeatOneIcon />}
                                                    checkedIcon={<RepeatIcon />}
                                                />
                                                <button id="rec_pop" className="cus_popover-btn"></button>
                                                <div className="cus_popover repeatTaskCalender cus_popover-end">
                                                    <div className="cus_popover-wrap">
                                                        <div className="cus_popover-header">

                                                        </div>
                                                        <div className="cus_popover-body">
                                                            
                                                        </div>
                                                        <div className="cus_popover-footer">
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="AddTask_rulesOverview_item">
                                <div className="AddTask_rulesOverview_item_name">Description</div>
                                <div className="AddTask_rulesOverview_item_rulesAction">
                                    <div className="AddTask_rulesOverview_item_rulesAction_wrap">
                                        <div onClick={ ()=>{ setEditor(true) } }>
                                            { !description && <div className="text-muted"> { !editor && <span>Add more detailed description...</span> }</div> }
                                        </div>
                                        {editor && (
                                        <SunEditor 
                                            onChange={(content) => { setDescription(content) }}
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
                                            imageUploadUrl={`${config.api_url}/uploadImage`}
                                            onImageUpload={handleImageUpload}
                                        />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="AddTask_rulesOverview_item">
                                <div className="AddTask_rulesOverview_item_name">Recurring</div>
                                <div className="AddTask_rulesOverview_item_rulesAction">
                                    <div className="AddTask_rulesOverview_item_rulesAction_wrap">
                                        <div className="AddTask_rulesOverview_item_add">
                                            <div className="addRules">
                                                    <Checkbox  
                                                        checked={isRecurring}
                                                        onChange={(e)=>{ setIsRecurring(e.target.checked) }}
                                                        icon={<RepeatIcon />}
                                                        checkedIcon={<RepeatOneIcon />}
                                                    />
                                            </div>
                                            { isRecurring && 
                                                <div className="addRules">
                                                        <Cron 
                                                        value={cron} 
                                                        setValue={setCron} 
                                                        onChange={(e)=>{ setCron(e) }}
                                                        /> 
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="req_calender">
                                <div className="req_calender-wrap">
                                    <div className="req_calender-header">
                                        <div className="req_calender-header-item">
                                            <Tooltip title="Start Date" arrow>
                                                <Link className="req_calender-header-item-date req_calender-header-item-date-primary">
                                                    <span><DateRangeOutlinedIcon /></span> Start Date
                                                </Link>
                                            </Tooltip>
                                            <Tooltip title="Due Date" arrow>
                                                <Link className="req_calender-header-item-date req_calender-header-item-date-secondary">
                                                    <span><DateRangeOutlinedIcon /></span> Due Date
                                                </Link>
                                            </Tooltip>
                                        </div>
                                    </div>
                                    <div className="req_calender-body">
                                        <div className="req_calender-repeats">
                                            <div className="req_calender-label">Repeats</div>
                                            <div>
                                                <Form.Select className="planHoverStyle" aria-label="Weekly">
                                                    <option value="1">Daily</option>
                                                    <option value="2">Weekly</option>
                                                    <option value="3">Monthly</option>
                                                    <option value="4">Custom</option>
                                                </Form.Select>
                                            </div>
                                        </div>
                                        {/* Weekly */}
                                        <div className="req_calender-repeats-weekly d-none">
                                            <h4 className="req_calender-repeats-lable">On These Days</h4>
                                            <Stack className="req_calender-repeats-weekly-day_select" direction="row" spacing={2}>
                                                <Avatar>S</Avatar>
                                                <Avatar className="active">M</Avatar>
                                                <Avatar>T</Avatar>
                                                <Avatar>W</Avatar>
                                                <Avatar>T</Avatar>
                                                <Avatar>F</Avatar>
                                                <Avatar>S</Avatar>
                                            </Stack>
                                        </div>
                                        {/* Monthly */}
                                        <div className="req_calender-repeats-monthly">
                                            <div className="req_calender-repeats-monthly">
                                                <div className="req_calender-repeats-monthly-item">
                                                    <div>
                                                        <Link className="req_calender-repeats-monthly-opt active">
                                                            <span><AdjustOutlinedIcon /></span> On The
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <div className="req_calender-repeats-monthly-onThe-r">
                                                            <Form.Select className="planHoverStyle" aria-label="Monthly">
                                                                <option value="1">1st</option>
                                                                <option value="2">2nd</option>
                                                                <option value="3">3rd</option>
                                                                <option value="4">4th</option>
                                                                <option value="5">Last</option>
                                                            </Form.Select>
                                                            <Form.Select className="planHoverStyle" aria-label="Monthly">
                                                                <option value="1">Sunday</option>
                                                                <option value="2">Monday</option>
                                                                <option value="3">Tuesday</option>
                                                                <option value="4">Wednesday</option>
                                                                <option value="5">Thursday</option>
                                                                <option value="5">Firday</option>
                                                                <option value="5">Suterday</option>
                                                            </Form.Select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="req_calender-repeats-monthly-item mt-4">
                                                    <div>
                                                        <Link className="req_calender-repeats-monthly-opt">
                                                            <span><CircleOutlinedIcon /></span> On Day
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Form.Select className="planHoverStyle" aria-label="Monthly">
                                                            <option value="1">1st</option>
                                                            <option value="2">2nd</option>
                                                            <option value="3">3rd</option>
                                                            <option value="4">4th</option>
                                                            <option value="5">Last</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="req_calender-repeats-info">Every Monday of the week</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
