import React, { useState } from "react";
import LoginForm from "./login_form";
import SignForm from "./signForm";
import { RegisterContainerTheme } from "../../styles/register_components";

export default function RegisterContainer () {
    const [loginState, setLoginState] = useState(true);     // A state to determine which form to appear

    return (
        <RegisterContainerTheme>
            <div className="p-3 mt-6 bg-white border">
                { (loginState) ? <LoginForm fun={setLoginState} /> : <SignForm fun={setLoginState} /> }
            </div>
        </RegisterContainerTheme>
    )
}