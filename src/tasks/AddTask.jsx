import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import { WithContext as ReactTags } from 'react-tag-input';
import { config } from "../config";
import axios from 'axios';

export default function AddTask(props) {

    

    const closeAddTask = () => {
        props.handleClose();
    }

    const [users, setUsers] = useState([]);
    const [userSuggestions, setUserSuggestions] = useState([]);
    const [tags, setTags] = React.useState([]);

    const KeyCodes = {
    comma: 188,
    enter: 13
    };
    
    const delimiters = [KeyCodes.comma, KeyCodes.enter];
      

    const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = tag => {
    setTags([...tags, tag]);
    };

    const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
    };

    const handleTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
    };



    useEffect(() => {
        getUsers();
    }, []);

    async function getUsers(){
        let __token = localStorage.getItem('__token');
        const header = {
        headers: { Authorization: `Bearer ${__token}` }
        };
        const res = await axios.get(`${config.api_url}/users`, header);
        setUsers(res.data.data);
        let suggestions = [];
        res.data.data.map((item) => {
            suggestions.push({ id: item.id.toString(), text: item.name });
        });
        setUserSuggestions(suggestions);
        console.log(userSuggestions);
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
                    <div  onClick={ ()=>{ 
                        closeAddTask()
                     } }  className="AddCanvas_close icon_remove icon_rounded"><CloseOutlinedIcon /></div>
                </div>
                <div className="AddTask_body">
                    <div className="AddTask_body_overview">
                        <input className="form-control add_input_style AddTask_title" type="text" placeholder="Type your task..." />
                        <div className="AddTask_rulesOverview">
                            <div className="AddTask_rulesOverview_item">
                                <div className="AddTask_rulesOverview_item_name">Assigned to</div>
                                <div className="AddTask_rulesOverview_item_rulesAction">
                                <ReactTags
                                    suggestions={userSuggestions}
                                    delimiters={delimiters}
                                    handleDelete={handleDelete}
                                    handleAddition={handleAddition}
                                    handleDrag={handleDrag}
                                    handleTagClick={handleTagClick}
                                    inputFieldPosition="bottom"
                                    autocomplete
                                    className="form-control"
                                    name="tags"
                                    placeholder="Type to add members"
                                    classNames={{
                                        tags: 'tagsClass',
                                        tagInput: 'tagInputClass',
                                        tagInputField: 'form-control',
                                        selected: 'selectedClass',
                                        tag: 'tagClass',
                                        remove: 'removeClass',
                                        suggestions: 'suggestionsClass',
                                        activeSuggestion: 'activeSuggestionClass',
                                        editTagInput: 'editTagInputClass',
                                        editTagInputField: 'editTagInputField',
                                        clearAll: 'clearAllClass',
                                      }}
                                    />
                                    <div className="team-member-full mt-3">
                                        {tags.map((tag, index) => (
                                            <div className="team-member-full-list" key={'tag_'+index}>
                                                <span className="team-member"><img src={require("../assets/images/users/user.jpg")} alt="User" /></span>
                                                <span className="team-member_text">{tag.text}</span>
                                                <span className="team-member-remove icon_remove" onClick={ () => {handleDelete(index);} }><CloseOutlinedIcon /></span>
                                            </div>
                                        ))}
                                        {/* <div className="AddTask_rulesOverview_item_add"><Link className="btn_link">Add More</Link></div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="AddTask_rulesOverview_item">
                                <div className="AddTask_rulesOverview_item_name">Notify to</div>
                                <div className="AddTask_rulesOverview_item_rulesAction">
                                    <div className="team-member-full">
                                        <div className="team-member-full-list">
                                            <span className="team-member"><img src={require("../assets/images/users/user.jpg")} alt="User" /></span>
                                            <span className="team-member_text">Rakesh Kumar</span>
                                            <span className="team-member-remove icon_remove"><CloseOutlinedIcon /></span>
                                        </div>
                                        <div className="team-member-full-list">
                                            <span className="team-member team-member-bg-secondary">DK</span>
                                            <span className="team-member_text">Dinesh Kumar</span>
                                            <span className="team-member-remove icon_remove"><CloseOutlinedIcon /></span>
                                        </div>
                                        <div className="AddTask_rulesOverview_item_add"><Link className="btn_link">Add More</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="AddTask_rulesOverview_item">
                                <div className="AddTask_rulesOverview_item_name">Due Date</div>
                                <div className="AddTask_rulesOverview_item_rulesAction">
                                    <div className="AddTask_rulesOverview_item_rulesAction_wrap">
                                        <div className="addRules addRules_date">
                                            <span className="addRules_date_icon icon_rounded"><DateRangeOutlinedIcon /></span>
                                            <span className="addRules_date_text text-warning">15 July, 2023</span>
                                            <span className="addRules_date-remove icon_remove"><CloseOutlinedIcon /></span>
                                        </div>
                                        <div className="AddTask_rulesOverview_item_add"><Link className="btn_link">Add Date</Link></div>
                                    </div>
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
                                        <div className="AddTask_rulesOverview_item_add"><Link className="btn_link">Add Project</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="AddTask_des">
                            <h4 className="AddTask_rulesOverview_item_name mb-4">Description</h4>
                            <textarea className="form-control add_input_style" placeholder="Type Description..." name="" id="" cols="30" rows="5"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}