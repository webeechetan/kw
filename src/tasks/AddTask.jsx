import React from 'react';
import { Link } from 'react-router-dom';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

export default function AddTask() {
    return (
        <>
            <div className="AddCanvas">
                <div className="AddTask_head">
                    <div className="AddTask_head_btn_status">
                        <Link className="btn_status"><EventRepeatOutlinedIcon /> In Progress</Link>
                        <Link className="btn_status"><GradingOutlinedIcon /> In Review</Link>
                        <Link className="btn_status"><CheckOutlinedIcon /> Completed</Link>
                    </div>
                </div>
                <div className="AddTask_body">
                    <div className="AddTask_body_overview">
                        <div className="AddTask_title">Header style need to fix and add some reference for user login</div>
                        <div className="AddTask_rulesOverview">
                            <div className="AddTask_rulesOverview_item">
                                <div className="AddTask_rulesOverview_item_name">Assigned to</div>
                                <div className="AddTask_rulesOverview_item_rulesAction">
                                    <div className="team-member-full">
                                        <div className="team-member-full-list">
                                            <span className="team-member"><img src={require("../assets/images/users/user.jpg")} alt="User" /></span>
                                            <span className="team-member_text">Shubham Sharma</span>
                                            <span className="team-member-remove"><CloseOutlinedIcon /></span>
                                        </div>
                                        <div className="team-member-full-list">
                                            <span className="team-member team-member-bg-secondary">AK</span>
                                            <span className="team-member_text">Abhishek Kumar</span>
                                            <span className="team-member-remove"><CloseOutlinedIcon /></span>
                                        </div>
                                        <div className="team-member-full-list">
                                            <span className="team-member team-member-bg-yellow">HS</span>
                                            <span className="team-member_text">Himanshu Sharma</span>
                                            <span className="team-member-remove"><CloseOutlinedIcon /></span>
                                        </div>
                                        <div className="team-member-full-list">
                                            <span className="team-member team-member-bg-orange">AJ</span>
                                            <span className="team-member_text">Ajay</span>
                                            <span className="team-member-remove"><CloseOutlinedIcon /></span>
                                        </div>
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
                                            <span className="team-member-remove"><CloseOutlinedIcon /></span>
                                        </div>
                                        <div className="team-member-full-list">
                                            <span className="team-member team-member-bg-secondary">DK</span>
                                            <span className="team-member_text">Dinesh Kumar</span>
                                            <span className="team-member-remove"><CloseOutlinedIcon /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="AddTask_rulesOverview_item">
                                <div className="AddTask_rulesOverview_item_name">Due Date</div>
                                <div className="AddTask_rulesOverview_item_rulesAction">
                                    <div className="addRules addRules_date">
                                        <span className="addRules_date_icon icon_rounded"><DateRangeOutlinedIcon /></span>
                                        <span className="addRules_date_text text-warning">15 July, 2023</span>
                                        <span className="addRules_date-remove icon_remove"><CloseOutlinedIcon /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="AddTask_rulesOverview_item">
                                <div className="AddTask_rulesOverview_item_name">Project</div>
                                <div className="AddTask_rulesOverview_item_rulesAction">
                                    <div className="addRules addRules_project">
                                        <span className="addRules_project_icon icon_rounded">WS</span>
                                        <span className="addRules_project_text">Webeesocial India</span>
                                        <span className="addRules_project-remove icon_remove"><CloseOutlinedIcon /></span>
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