import { useEffect, useState } from "react";
import { AuthContext } from "./authContext.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AuthProvder = ({ children }) => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/users/protect",
          { withCredentials: true }
        );
        console.log(response.data.message)
        if (response.data.message === "Protected Content") {
          setAuth(true);
        }
      } catch (error) {
        setAuth(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
