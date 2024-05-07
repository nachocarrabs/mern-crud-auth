import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTasks } from "../components/useTasks";
import { useNavigate, useParams } from "react-router-dom";



function TasksFormPage() {

    const { register, handleSubmit, setValue } = useForm();
    const { createTask, getTask, updateTask } = useTasks()
    const navigate = useNavigate()
    const { id } = useParams()
    
    const onSubmit = handleSubmit((data) => {
        if (id) {
            updateTask(id, data)
        } else {
            createTask(data)
        }
        navigate('/tasks')
    })

    useEffect(() => {
        const loadTask = async () => {
            console.log(id);
            if (id) {
            const task = await getTask(id);
            setValue("title", task.title);
            setValue("description", task.description);
            } 
        };
        loadTask();
        }, [id, getTask, setValue]);

    
    return (
        <div className=" bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <form onSubmit={onSubmit}>

                <input type="text" placeholder='Title' 
                    {...register('title')}
                    autoFocus
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                />
                <textarea rows="3" placeholder='Description'
                    {...register('description')}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                >
                </textarea>
                <button>
                    Save
                </button>
            </form>
        </div>
    )
}

export default TasksFormPage