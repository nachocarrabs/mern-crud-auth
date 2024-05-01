
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./components/useAuth";

export default function ProtectedRoute() {

    const { isAuthenticated } = useAuth()

    if (!isAuthenticated) return <Navigate to='/login' replace/>
    
    return (
        <Outlet/>
    )
}
