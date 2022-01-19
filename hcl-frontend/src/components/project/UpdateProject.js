import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { getProject } from '../../actions/projectActions';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from 'classnames';

const UpdateProject = ({getProject, project, history, errors}) => {
    const {id} = useParams();

    useEffect(() => {
        getProject(id, history);
    }, [])
    const [currProject, setCurrProject] = useState({})
    useEffect(() => {
        setCurrProject(project.project)
    }, [project])

    console.log(currProject)
    return (
        <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Edit Project form</h5>
                    <hr />
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg " placeholder="Project Name" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" placeholder="Project Description"></textarea>
                        </div>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="start_date" />
                        </div>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="end_date" />
                        </div>

                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>

    )
}

UpdateProject.propTypes = {
    getProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    project:state.project,
    errors:state.errors
})

export default connect(mapStateToProps, {getProject}) (UpdateProject)