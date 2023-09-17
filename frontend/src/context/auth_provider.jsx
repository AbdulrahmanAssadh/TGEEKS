import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        if (localStorage.getItem("tgeeks_data")) {
            const data = localStorage.getItem("tgeeks_data");
            return JSON.parse(data);
        }
        return null;
    });

    // It happens when the website refreshed / when to load data or user register statae changed
    useEffect(() => {
        if (auth !== null) {
            localStorage.setItem("tgeeks_data", JSON.stringify(auth));
        } else {
            localStorage.setItem("tgeeks_data", "");
        }
    }, [auth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
