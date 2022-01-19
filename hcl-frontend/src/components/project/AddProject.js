import React from 'react'
import { useState } from 'react';

const AddProject = () => {
    const INIT_DATA={
        projectName: "",
        projectIdentifier: "",
        description: "",
        startDate: "",
        endDate: ""
    }
    const [formData, setFormData] = useState(INIT_DATA);

    const onChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })    
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newProject = formData;
        console.log(newProject);
    }
    return (
        <div>
            <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create Project form</h5>
                    <hr />
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control form-control-lg " 
                                placeholder="Project Name" 
                                name='projectName'  
                                value={formData.projectName}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                placeholder="Unique Project ID"
                                name="projectIdentifier"
                                value={formData.projectIdentifier}
                                onChange={onChange}
                            />
                        </div>
                        {/* <!-- disabled for Edit Only!! remove "disabled" for the Create operation --> */}
                        <div className="form-group">
                            <textarea 
                                className="form-control form-control-lg" 
                                placeholder="Project Description"
                                name="description"
                                value={formData.description}
                                onChange={onChange}
                            ></textarea>
                        </div>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input 
                                type="date" 
                                className="form-control form-control-lg" 
                                name="startDate" 
                                value={formData.startDate}
                                onChange={onChange}
                            />
                        </div>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input 
                                type="date" 
                                className="form-control form-control-lg" 
                                name="endDate" 
                                value={formData.endDate}    
                                onChange={onChange}
                            />
                        </div>

                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>

        </div>
    )
}

export default AddProject;