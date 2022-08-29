import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useAuth = () => {
  
  const { token, setToken } = useContext(AuthContext);

  return { token, setToken };
};
