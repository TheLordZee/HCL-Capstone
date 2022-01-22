import React from 'react'
import { Link } from 'react-router-dom'
import { deleteProjectTask } from '../../../actions/backlogActions';
import PropTypes from "prop-types"
import {connect} from "react-redux"

const ProjectTask = ({projectTask, deleteProjectTask}) => {
    const {projectSequence, priority, summary, acceptanceCriteria, projectIdentifier} = projectTask;
    let priorityString;
    let priorityClass;
    switch (priority) {
        case 1:
            priorityClass="bg-danger text-light";
            priorityString="HIGH";
            break;
        case 2:
            priorityClass="bg-warning text-light";
            priorityString="MEDIUM"
            break;
        case 3:
            priorityClass="bg-info text-light";
            priorityString="LOW"
            break;
        default:
            break;
    }

    const onDelete=(backlog_id, pt_id)=>{
        deleteProjectTask(backlog_id, pt_id);
    }

    return (
        <div className="card mb-1 bg-light">
            <div className={"card-header text-primary " + priorityClass}>
                ID: {projectSequence} -- Priority: {priorityString}
            </div>
            <div className="card-body bg-light">
                <h5 className="card-title">{summary}</h5>
                <p className="card-text text-truncate ">
                    {acceptanceCriteria}
                </p>
                <Link to={`/updateProjectTask/${projectIdentifier}/${projectSequence}`} className="btn btn-primary">
                    View / Update
                </Link>
                <button className="btn btn-danger ml-4" onClick={()=>onDelete(projectIdentifier, projectSequence)}>
                    Delete
                </button>
            </div>
        </div>
    )
}

ProjectTask.propTypes = {
    deleteProjectTask: PropTypes.func.isRequired
}

export default connect(null, {deleteProjectTask}) (ProjectTask)