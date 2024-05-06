import { createContext, useState, } from "react";
import PropTypes from 'prop-types'
import { createTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest } from "../api/tasks";

export const TaskContext = createContext();

export function TaskProvider ( {children} ) {

    const [tasks, setTasks] = useState([])
    const getTasks = async (id) => {
        try {
            const res = await getTasksRequest(id)
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

    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id)
            return res.data
        } catch (error) {
            console.error(error)
        }
    }

    const updateTask = async (id, task) => {
        try {
            await updateTaskRequest(id, task);
        } catch (error) {
            console.error(error);
        }
        };

    return (
        <TaskContext.Provider value= {{
            tasks,
            createTask,
            getTasks,
            deleteTask,
            getTask,
            updateTask,
        }}>
            {children}
        </TaskContext.Provider>
    )
}

TaskProvider.propTypes = {
    children: PropTypes.node
};