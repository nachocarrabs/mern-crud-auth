import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TaskCard from "../components/TaskCard";
import Sidebar from "../components/Sidebar";

function BoardPage() {
    const { id } = useParams();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/boards/${id}/tasks`);
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, [id]);

    return (
        <div className="flex w-screen">
            <Sidebar />
            <div className="p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-2 w-full">
                {tasks.map(task => (
                    <TaskCard key={task._id} task={task} />
                ))}
            </div>
        </div>
    );
}

export default BoardPage;
