import { Link } from "react-router-dom"
import { useAuth } from "./useAuth"


function Navbar() {

    const { isAuthenticated, logout, user } = useAuth()

    return (
        <nav className="bg-[#1d2125] w-100 h-20 p-6 border-b bordered-box border-b-[#9fadbc29] flex flex-row justify-between">
            <Link to={isAuthenticated ? "/tasks" : "/"} className="flex items-center text-2xl ">
                <h1 className=" font-semibold mx-2" > TaskManager |</h1> 
                <h1 className=" font-light text-base pt-1">Trello Clone</h1> 
            </Link> 
            <ul className="flex gap-x-2">
                
                {isAuthenticated ? (
                        <>
                            <h1 className="content flex ">
                                ¡ Welcome <h1 className=" text-red-600 px-2">{user.username}</h1> !
                            </h1>
                            <li >
                                <Link 
                                    className="font-semibold text-indigo-500 border border-indigo-500 rounded-md py-2 px-4 transition duration-100 ease-in-out hover:bg-indigo-500 hover:text-white  "
                                    to='/add-tasks'
                                    >Add Tasks
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    className="font-semibold text-red-500 border border-red-600 rounded-md py-2 px-4 transition duration-100 ease-in-out hover:bg-red-600 hover:text-white  "
                                    to='/' 
                                    onClick={() => {
                                    logout()
                                    }}>Logout
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link 
                                    to='/login'
                                    className="font-semibold text-orange-400 border border-orange-500 text-orange-500 rounded-md py-2 px-4 transition duration-100 ease-in-out hover:bg-orange-500 hover:text-white  "
                                    >Login
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to='/register'
                                    className="font-semibold text-orange-400 border border-orange-400 text-orange-400 rounded-md py-2 px-4 transition duration-100 ease-in-out hover:bg-orange-400 hover:text-white  "
                                    >Register
                                </Link>
                            </li>
                        </>
                    )}
                
            </ul>
        </nav>
    )
}

export default Navbar