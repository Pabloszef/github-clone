import {createContext, useContext, useEffect, useState} from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const checkUserLoggedIn = async () => {
            try {
                const res = await fetch("api/auth/check", {credentials: "include"});
                const data = await res.json()
                setAuthUser(data.user); // null or auth user object
            } catch (error) {
                setLoading(false)
                toast.error(error.message || "Check user authentication failed")
            } finally {
                setLoading(false)
            }
        }
        checkUserLoggedIn()
    }, []);
    return (
        <AuthContext.Provider value={{authUser, setAuthUser, loading}}>
            {children}
        </AuthContext.Provider>
    )
}