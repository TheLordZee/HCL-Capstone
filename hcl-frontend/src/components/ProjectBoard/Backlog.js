import React from 'react'
import ProjectTask from './ProjectTasks/ProjectTask'

const Backlog = ({projectTasks}) => {
    const toDoTasks = projectTasks.filter(pt => pt.status === "TO_DO");
    toDoTasks.sort((p1, p2) => p1.status - p2.status);
    const inProgressTasks = projectTasks.filter(pt => pt.status === "IN_PROGRESS");
    inProgressTasks.sort((p1, p2) => p1.status - p2.status);
    const completedTasks = projectTasks.filter(pt => pt.status === "DONE");
    completedTasks.sort((p1, p2) => p1.status - p2.status);
    
    return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-secondary text-white">
                            <h3>TO DO</h3>
                        </div>
                    </div>
                    {toDoTasks.map(pt => { 
                        return <ProjectTask 
                            key={pt.id} 
                            projectTask={pt}
                        />
                    })}
                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-primary text-white">
                            <h3>In Progress</h3>
                        </div>
                        {inProgressTasks.map(pt => { 
                            return <ProjectTask 
                                key={pt.id} 
                                projectTask={pt}
                            />
                        })}
                    </div>

                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-success text-white">
                            <h3>Done</h3>
                        </div>
                        {completedTasks.map(pt => { 
                            return <ProjectTask 
                                key={pt.id} 
                                projectTask={pt}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Backlog
