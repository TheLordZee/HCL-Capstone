import React from 'react'
import { Link } from 'react-router-dom'

const ProjectTask = ({projectTask}) => {
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
                <button className="btn btn-danger ml-4">
                    Delete
                </button>
            </div>
        </div>
    )
}

export default ProjectTask
