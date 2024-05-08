import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTasks } from "../components/useTasks";
import { useNavigate, useParams } from "react-router-dom";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
dayjs.extend(utc);




function TasksFormPage() {

    const { register, handleSubmit, setValue } = useForm();
    const { createTask, getTask, updateTask } = useTasks()
    const navigate = useNavigate()
    const { id } = useParams()
    
    const onSubmit = handleSubmit((data) => {

        const dataValid = {
            ...data,
            date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
        } 

        if (id) {
            updateTask(id, {
                ...data,
            dataValid,
        })
        } else {
            createTask(dataValid)
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
            setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"))
            } 
        };
        loadTask();
        }, [id, getTask, setValue]);

    
    return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div className=" bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" placeholder='Title' 
                    {...register('title')}
                    autoFocus
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    />
                <label htmlFor="description">Description</label>

                <textarea rows="3" placeholder='Description'
                    {...register('description')}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    >
                </textarea>
                <label htmlFor="date">Date</label>
                <input type="date"                     
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        {...register('date')}
                />
                <button className="bg-indigo-500 px-3 py-2 rounded-md ">
                    Save
                </button>
            </form>
        </div>
    </div>
    )
}

export default TasksFormPage