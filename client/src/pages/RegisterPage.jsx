import { useForm } from "react-hook-form"
import { useAuth } from "../components/useAuth";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {

    const { register, handleSubmit, formState: {errors} } = useForm()
    const { signup, isAuthenticated, errors: registerErrors } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks')
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values)
        })
    
    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md ">


            {
                registerErrors.map((error, i) => (
                    <div key= {i} className="bg-red-500 p-2 text-white">
                        {error}
                    </div>
                ))
            }

            <h1 className="text-2xl font-bold">Register</h1>
            <form 
                onSubmit={onSubmit}>

                <input type="text"{...register("username", {required: true})} 
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Username"
                    />
                {
                    errors.username && <p className="text-red-500">Username is required</p>
                }

                <input type="email"{...register("email", {required: true})} 
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Email"
                    />
                {
                    errors.email && <p className="text-red-500">Email is required</p>
                }

                <input type="password"{...register("password", {required:true})} 
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Password"
                    />
                {
                    errors.password && <p className="text-red-500">Password is required</p>
                }
                <button className="font-semibold text-orange-400 border border-orange-500 text-orange-500 rounded-md py-2 px-4 transition duration-100 ease-in-out hover:bg-orange-500 hover:text-white  ">
                    Register
                </button>
            </form>

            <p className="flex gap-x-2 justify-between">
                Already have an account? <Link to="/login" className="text-sky-500">Sign in</Link>
            </p>
            </div>
        </div>
    )
}

export default RegisterPage