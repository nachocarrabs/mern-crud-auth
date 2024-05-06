import { createContext, useState, } from "react";
import PropTypes from 'prop-types'
import { createTaskRequest, getTasksRequest, deleteTaskRequest } from "../api/tasks";

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

    const deleteTask = async (id) => {
        try {
            const res = await deleteTaskRequest(id)
            if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id)) 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TaskContext.Provider value= {{
            tasks,
            createTask,
            getTasks,
            deleteTask,
        }}>
            {children}
        </TaskContext.Provider>
    )
}

TaskProvider.propTypes = {
    children: PropTypes.node
};