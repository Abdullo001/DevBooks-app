import { useEffect } from "react";
import { createContext,useState } from "react";

export const AuthContext=createContext()

export const AuthProvider=({children})=>{

  const [token,setToken]=useState(JSON.parse(window.localStorage.getItem("token"))||"")

  useEffect(()=>{
    
    if(token){
      localStorage.setItem("token",JSON.stringify(token))
    }else{
      localStorage.removeItem("token")
    }
  },[token])

  return(
    <AuthContext.Provider value={{token,setToken}}>
      {children}
    </AuthContext.Provider>
  )
}