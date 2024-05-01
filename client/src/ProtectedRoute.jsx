import { AuthProvider } from './context/AuthContext'
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {

    const { isAuthenticated } = AuthProvider()

    if (!isAuthenticated) return <Navigate to='/login' replace/>
    

    return (
        <Outlet/>
    )
}
