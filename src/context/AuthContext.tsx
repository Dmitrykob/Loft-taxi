import React, { useState, Children, ReactNode } from "react";

export interface AuthContextInterface {
    login: Function
    logout: Function
    isLoggedIn: Function
}

// export const AuthContext = React.createContext<AuthContextInterface | null>(null)

export const AuthContext = React.createContext<AuthContextInterface>({
    login: Function,
    logout: Function,
    isLoggedIn: Function
});

interface AuthContext {
    children: ReactNode
}

export const AuthProvider: React.FC<AuthContext> = ({children}) => {
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [isAuth, setAuth] = useState(false)

    const login: Function = () => {
        setAuth(true)
    };

    const logout: Function = () => {
        setAuth(false)
    };

    const isLoggedIn: Function = () => {
        return isAuth
    }

    const getProviderValue: Function = () => {
        return {
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn
        }
    }

    return (
        <AuthContext.Provider value = {getProviderValue()}>
            {children}
        </AuthContext.Provider>
    )
};
