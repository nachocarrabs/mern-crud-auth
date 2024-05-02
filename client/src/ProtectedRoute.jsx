
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./components/useAuth";

export default function ProtectedRoute() {

    const { isAuthenticated, loading } = useAuth()
    console.log(isAuthenticated, loading);

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (!loading && !isAuthenticated) return <Navigate to='/login' replace/>
    
    return (
        <Outlet/>
    )
}
