import { useEffect } from "react";
import { useTasks } from "../components/useTasks";
import TaskCard from "../components/TaskCard";
import Sidebar from "../components/Sidebar";


function TasksPage() {
    const { getTasks, tasks } = useTasks()
    
    useEffect(() => {
        getTasks()
    }, [getTasks])

    if (tasks.length === 0) {
        return <h1>No tasks</h1>
    }

    return (
            <div className="flex w-screen">
                <Sidebar/>
                <div className= " p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-2 w-full">
                {tasks.map((task) => (
                    <TaskCard task={task} key={task._id} />
                ))}
                </div>
            </div>
    )
}

export default TasksPage