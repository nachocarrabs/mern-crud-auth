import { createContext, useState, } from "react";
import PropTypes from 'prop-types'
import { createTaskRequest } from "../api/tasks";

export const TaskContext = createContext();

export function TaskProvider ( {children} ) {


    const [tasks, setTasks] = useState([])

    const createTask = async (task) => {

        const res = await createTaskRequest(task)
        console.log(res);
    }

    return (
        <TaskContext.Provider value= {{
            tasks,
            createTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}

TaskProvider.propTypes = {
    children: PropTypes.node
};