import React, {useState, useEffect} from 'react'
import ProjectTask from './ProjectTasks/ProjectTask'

const Backlog = ({projectTasks, refreshBacklog}) => {
    const [tdTasks, setTdTasks] = useState([]);
    const [ipTasks, setIpTasks] = useState([]);
    const [cTasks, setCTasks] = useState([]);

    useEffect(() => {
        const toDoTasks = projectTasks.filter(pt => pt.status === "TO_DO");
        toDoTasks.sort((p1, p2) => p1.status - p2.status);
        setTdTasks(toDoTasks);

        const inProgressTasks = projectTasks.filter(pt => pt.status === "IN_PROGRESS");
        inProgressTasks.sort((p1, p2) => p1.status - p2.status);
        setIpTasks(inProgressTasks);

        const completedTasks = projectTasks.filter(pt => pt.status === "DONE");
        completedTasks.sort((p1, p2) => p1.status - p2.status);
        setCTasks(completedTasks)
    }, [projectTasks])

    const moveTask = (from, to, task) => {
        if(to === from){
            return;
        }
        const lists = {
            toDo: {
                list: tdTasks,
                setState: setTdTasks
            },
            inProgress: {
                list: ipTasks,
                setState: setIpTasks
            },
            done: {
                list: cTasks,
                setState: setCTasks
            }
        }

        const fromList = lists[from].list.filter(pt => pt.projectSequence !== task.projectSequence)
        lists[from].setState(fromList);
        const toList = [...lists[to].list, task].sort((p1, p2) => p1.status - p2.status);
        lists[to].setState(toList);
    }

    return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-secondary text-white" id='to-do-list'>
                            <h3>TO DO</h3>
                        </div>
                    </div>
                    {tdTasks.map(pt => { 
                        return <ProjectTask 
                                    key={pt.id} 
                                    projectTask={pt}
                                    moveTask={(to, task) => moveTask("toDo", to, task)}
                                    refreshBacklog={refreshBacklog}
                                />
                    })}
                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-primary text-white" id="in-progress-list">
                            <h3>In Progress</h3>
                        </div>
                    </div>
                    {ipTasks.map(pt => { 
                        return <ProjectTask 
                                key={pt.id} 
                                projectTask={pt}
                                moveTask={(to, task) => moveTask("inProgress", to, task)}
                                refreshBacklog={refreshBacklog}
                            />
                    })}

                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-success text-white" id="done-list">
                            <h3>Done</h3>
                        </div>
                    </div>
                    {cTasks.map(pt => { 
                        return <ProjectTask 
                                key={pt.id} 
                                projectTask={pt}
                                moveTask={(to, task) => moveTask("done", to, task)}
                                refreshBacklog={refreshBacklog}
                            />
                    })}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Backlog
