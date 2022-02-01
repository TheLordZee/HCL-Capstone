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


const Routes = () => {
    const history = useHistory();
    return (
        <>
        <Header/>
        <div>
            <Route exact path="/">
                <Landing/>
            </Route>
            <Route exact path="/register">
                <Register history={history}/>
            </Route>
            <Route exact path="/login">
                <Login history={history}/>
            </Route>
            
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/addProject">
                <AddProject history={history}/>
            </Route>
            <Route exact path="/updateProject/:id">
                <UpdateProject history={history}/>
            </Route>
            <Route exact path="/projectBoard/:id">
                <ProjectBoard/>
            </Route>
            <Route exact path="/addProjectTask/:id">
                <AddProjectTask history={history}/>
            </Route>
            <Route exact path="/updateProjectTask/:backlog_id/:pt_id">
                <UpdateProjectTask history={history}/>
            </Route>
        </div>    
        </>
        
    )
}

export default Routes;
