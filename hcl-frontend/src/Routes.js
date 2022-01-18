import React from 'react'
import {Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import AddProject from './components/project/AddProject';

const Routes = () => {
    return (
        <>
        <Header/>
        <div>
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/addProject">
                <AddProject />
            </Route>
        </div>    
        </>
        
    )
}

export default Routes;
