import { createContext, useState, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import PropTypes from 'prop-types'
import Cookies from "js-cookie";

export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout( () => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer) 
        }
    }, [errors])

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data)
            setIsAuthenticated(true);
        } catch (error) {
            setErrors(error.response.data);
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            setIsAuthenticated(true)
            setUser(res.data)
            
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }
    }


    useEffect(() => {
        async function checkLogin () {
            const cookies = Cookies.get()

        if (!cookies.token) {
            setIsAuthenticated(false)
            setLoading(false)
            setUser(null)
            return
            }

            try {
                const res = await verifyTokenRequest(cookies.token)
                console.log(res);
                if (!res.data) {
                    setIsAuthenticated(false)
                    setLoading(false)
                    
                    return
                } 
                setIsAuthenticated(true)
                setUser(res.data)
                
            } catch (error) {
                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)
            }
        }
        checkLogin()
    }, [])
    

    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            isAuthenticated,
            loading,
            errors,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node
};