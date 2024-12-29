import { useState, useContext, useEffect } from "react";
import AuthService from "../services/auth.service";
import { Cookies } from "react-cookie";
import { createContext } from "react";

const cookies = new Cookies;

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getUser);

    const login = (user) => setUser(user);

    const logout = () => {
        AuthService.logout();
        setUser(null);
        AuthService.logoutCookies();
        setUser(null);
    };

    function getUser(){
        const savedUser= cookies.get("user") || null
        return savedUser;
    }

    useEffect(()=>{
        cookies.set("user", JSON.stringify(user), {
            path: "/",
            expires: new Date(Date.now() + 86400),
        });
    }, [user])

    return(
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);