import { Link } from "react-router-dom"
import { useAuth } from "./useAuth"


function Navbar() {

    const { isAuthenticated, logout, user } = useAuth()

    return (
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
            <h1 className="text-2xl font-bold">
                <Link to='/'>TaskManager</Link> 
            </h1>
            <ul className="flex gap-x-2">
                
                {isAuthenticated ? (
                        <>
                            <h1>
                                ¡ Welcome {user.username} !
                            </h1>
                            <li>
                                <Link to='/add-tasks'>Add Tasks</Link>
                            </li>
                            <li>
                                <Link to='/' onClick={() => {
                                    logout()
                                }}>Logout</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link 
                                    to='/login'
                                    className="font-semibold text-orange-400 border border-orange-500 text-orange-500 rounded-md py-2 px-4 transition duration-100 ease-in-out hover:bg-orange-500 hover:text-white  "
                                >Login</Link>
                            </li>
                            <li>
                                <Link 
                                    to='/register'
                                    className="font-semibold text-orange-400 border border-orange-500 text-orange-500 rounded-md py-2 px-4 transition duration-100 ease-in-out hover:bg-orange-500 hover:text-white  "
                                >Register</Link>
                            </li>
                        </>
                    )}
                
            </ul>
        </nav>
    )
}

export default Navbar