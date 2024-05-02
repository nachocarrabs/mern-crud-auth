import { createContext, useState, } from "react";
import PropTypes from 'prop-types'
import { createTaskRequest, getTasksRequest } from "../api/tasks";

export const TaskContext = createContext();

export function TaskProvider ( {children} ) {

    const [tasks, setTasks] = useState([])
    const getTasks = async () => {
        try {
            const res = await getTasksRequest()
            setTasks(res.data)
        } catch (error) {
        console.error(error);
        }
    }

    const createTask = async (task) => {
        const res = await createTaskRequest(task)
        console.log(res);
    }

    return (
        <TaskContext.Provider value= {{
            tasks,
            createTask,
            getTasks,
        }}>
            {children}
        </TaskContext.Provider>
    )
}

TaskProvider.propTypes = {
    children: PropTypes.node
};