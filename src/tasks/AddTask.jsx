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
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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

    let galleryImages = [
        {
          "albumId": 1,
          "id": 1,
          "title": "accusamus beatae ad facilis cum similique qui sunt",
          "url": "https://via.placeholder.com/600/92c952",
          "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
          "albumId": 1,
          "id": 2,
          "title": "reprehenderit est deserunt velit ipsam",
          "url": "https://via.placeholder.com/600/771796",
          "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
          "albumId": 1,
          "id": 3,
          "title": "officia porro iure quia iusto qui ipsa ut modi",
          "url": "https://via.placeholder.com/600/24f355",
          "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        },
        {
          "albumId": 1,
          "id": 4,
          "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
          "url": "https://via.placeholder.com/600/d32776",
          "thumbnailUrl": "https://via.placeholder.com/150/d32776"
        },
        {
          "albumId": 1,
          "id": 5,
          "title": "natus nisi omnis corporis facere molestiae rerum in",
          "url": "https://via.placeholder.com/600/f66b97",
          "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
        },
    ];


    const [users, setUsers] = useState([]);
    const [userOptions, setUserOptions] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState({name:'WS'});
    const [userIds, setUserIds] = useState([]);
    const [notifyIds, setNotifyIds] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [editor, setEditor] = useState(false);

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
        <div className="addRules addRules-date">
            <span className="icon_rounded " ><DateRangeOutlinedIcon /></span>
            <Link className="addRules_text text-warning">{value}</Link>
            <Link className="addRules_text btn_link" onClick={onClick} ref={ref}>
                
                Add Date
            </Link>
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
                    <Stack direction="row" justifyContent="end" spacing={2}>
                        <Tooltip title="Save Task" arrow>
                            <Link className="btn-border btn-border-primary"><CheckOutlinedIcon /></Link>
                        </Tooltip>
                        <Tooltip title="Close" arrow>
                            <Link onClick={() => {
                                    closeAddTask()
                                }} className="btn-border"><CloseOutlinedIcon />
                            </Link>
                        </Tooltip>
                    </Stack>
                </div>
                <div className="AddTask_body">
                    <div className="AddTask_body_overview">
                        <input className="form-control add_input_style AddTask_title" onChange={(e)=>{ setTitle(e.target.value) }} type="text" placeholder="Type your task here..." />
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
                                    onChange={notifyChangeHandler} 
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
                                    <div className="AddTask_rulesOverview_item_rulesAction_wrap">
                                        <div className="addRules addRules_project">
                                            <span className="addRules_project_icon icon_rounded">{ project.name.slice(0,2)  }</span>
                                            <span className="addRules_text">{ project.name }</span>
                                            <span className="addRules_remove icon_remove"><CloseOutlinedIcon /></span>
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
                                    </div>
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="AddTask_des">
                            <h4 className="AddTask_rulesOverview_item_name mb-4">Description</h4>
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
                                        ['font', 'fontSize', 'formatBlock'],
                                        ['paragraphStyle', 'blockquote'],
                                        ['bold', 'underline', 'italic', 'strike'],
                                        ['fontColor', 'hiliteColor', 'textStyle'],
                                        ['outdent', 'indent'],
                                        ['align', 'horizontalRule', 'list', 'lineHeight'],
                                        ['link', 'image'], // You must add the 'katex' library at options to use the 'math' plugin.
                                        /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
                                        ['fullScreen', 'showBlocks', 'codeView'],
                                        [ 'print'],
                                    ],
                                }}
                                imageUploadUrl={`${config.api_url}/uploadImage`}
                                onImageUpload={handleImageUpload}
                            />
                            )}
                        </div>
                        <div className="item_submit"><button className="btn btn-primary" onClick={saveTask}>Submit</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}
