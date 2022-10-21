import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star';

export default function Task_progress() {
    return (
        <>
            <div className="box-item">
                <h4><b>Your tasks</b></h4>
                <div className="progress-box">
                    <div className="progress-box-title">
                        <span><StarIcon /> Task Progress</span> <span>02/05</span>
                    </div>
                    <div className="progress">
                        <ProgressBar now={60} />
                    </div>
                </div>
                <div className="task-list-body mt-3">
                    <ul id="task-list" className="list-none">
                        <li className="task">
                            <div className="task-container">
                                <span className="task-action-btn task-check">
                                    <span className="action-circle large complete-btn"><i className="bi bi-check2"></i></span>
                                </span>
                                <span className="task-label">Patient appointment booking</span>
                                <span className="task-action-btn task-btn-right">
                                    <span className="action-circle large" title="Assign">
                                        <i className="bi bi-person-plus"></i>
                                    </span>
                                    <span className="action-circle large delete-btn">
                                        <i className="bi bi-x-lg"></i>
                                    </span>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
