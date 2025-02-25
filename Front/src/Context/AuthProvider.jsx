/* eslint-disable react/prop-types */
import {createContext, useEffect, useState, useContext} from "react"
import instance from "../axiosConfig";

const AuthContext=createContext(null);

function AuthProvider({children}) {
const [isUserLoggedIn, setIsUserLoggedIn]=useState(false);

useEffect(()=>{
    checkAuth();
},[])

async function checkAuth(){
    const response=await instance.get("/auth/check",{
        withCredentials:true,
    })
    if(response.status===200) setIsUserLoggedIn(true)
}

function login(){
    setIsUserLoggedIn(true)
}

async function logout(){
    const response=await instance.post("/logoutUser",{withCredentials:true})
    if(response.status===200){
        setIsUserLoggedIn(false)
    }
}

    return (
    
        <AuthContext.Provider value={{isUserLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
  )
}

export function useAuth(){
    return useContext(AuthContext);
}

export default AuthProvider


