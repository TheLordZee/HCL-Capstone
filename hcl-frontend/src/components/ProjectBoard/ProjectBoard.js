import React, {useEffect, useState} from 'react'
import Backlog from './Backlog'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router';
import {connect} from "react-redux"
import PropTypes from "prop-types";
import { getBacklog } from '../../actions/backlogActions';

const ProjectBoard = ({backlog, getBacklog}) => {
    const {id} = useParams();
    useEffect(() => {
       getBacklog(id); 
    }, [])
    const tasks = backlog.projectTasks;
    console.log(tasks)
    return (
        <div className="container">
            <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
                <i className="fas fa-plus-circle"> Create Project Task</i>
            </Link>
            <br />
            <hr />
            <Backlog/>
        </div>
    )
}

ProjectBoard.propTypes = {
    backlog: PropTypes.object.isRequired,
    getBacklog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    backlog: state.backlog
})

export default connect(mapStateToProps, {getBacklog}) (ProjectBoard)