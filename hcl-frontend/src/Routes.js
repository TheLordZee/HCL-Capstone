import React from 'react'
import { useHistory } from 'react-router';
import {Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import Landing from './components/layout/Landing';
import AddProject from './components/project/AddProject';
import UpdateProject from './components/project/UpdateProject';
import ProjectBoard from './components/ProjectBoard/ProjectBoard';
import AddProjectTask from './components/ProjectBoard/ProjectTasks/AddProjectTask';
import UpdateProjectTask from './components/ProjectBoard/ProjectTasks/UpdateProjectTask';
import Login from './components/UserRoutes/Login';
import Register from './components/UserRoutes/Register';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

const Routes = ({security}) => {
    const history = useHistory();
    return (
        <>
        <Header security={security}/>
        <div>
            <Route exact path="/">
                <Landing security={security}/>
            </Route>
            <Route exact path="/register">
                <Register history={history} security={security}/>
            </Route>
            <Route exact path="/login">
                <Login history={history} security={security}/>
            </Route>
            
            <Route exact path="/dashboard">
                <Dashboard security={security}/>
            </Route>
            <Route exact path="/addProject">
                <AddProject history={history} security={security}/>
            </Route>
            <Route exact path="/updateProject/:id">
                <UpdateProject history={history} security={security}/>
            </Route>
            <Route exact path="/projectBoard/:id">
                <ProjectBoard security={security}/>
            </Route>
            <Route exact path="/addProjectTask/:id">
                <AddProjectTask history={history} security={security}/>
            </Route>
            <Route exact path="/updateProjectTask/:backlog_id/:pt_id">
                <UpdateProjectTask history={history} security={security}/>
            </Route>
        </div>    
        </>
        
    )
}

Routes.propTypes = {
    security: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    security: state.security
})

export default connect(mapStateToProps, {})(Routes);
