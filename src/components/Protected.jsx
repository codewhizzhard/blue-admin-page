import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { setToken } from "../services/auth";


export const Protected = () => {

     const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");

        if (storedToken && !token) {
            dispatch(setToken(storedToken));
        }
        
        // Allow one render cycle for Redux to update
        setLoading(true)

    }, [dispatch, token])

    if (!loading) return null;

    return token ? <Outlet /> : <Navigate to={"/login"} replace />
}