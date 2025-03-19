/* eslint-disable react/prop-types */

import { createContext, useEffect, useState, useContext } from "react";
import instance from "../../axiosConfig";

const AdminAuth=createContext(null);

function AdminAuthProvider({children}){
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [loggedInAdmin, setLoggedInAdmin] = useState({});

useEffect(()=>{
checkAuthAdmin();
},[])

// admin auth
async function checkAuthAdmin() {
    try {
      const response=await instance.get("/admin/check", {
        withCredentials: true,
      });
      if(response.status===200){
          setIsAdminLoggedIn(true);
        setLoggedInAdmin(response.admin);
      }

    } catch (error) {
      console.log(error);
      setIsAdminLoggedIn(false);
      setLoggedInAdmin({})
    }
  }

  async function logout() {
    try {
        await instance.post(
            "/admin/logout",
            {},
            {
              withCredentials: true,
            }
          );
          setIsAdminLoggedIn(false);
          checkAuthAdmin();
      } 
      catch (error) {
      console.log(error);
    }
  }
  return (
    <AdminAuth.Provider value={{logout,isAdminLoggedIn,checkAuthAdmin,loggedInAdmin}}>{children}</AdminAuth.Provider>
  );
}

export function useAdminAuth(){
    return useContext(AdminAuth);
}

export default AdminAuthProvider;