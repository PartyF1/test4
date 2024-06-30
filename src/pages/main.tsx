import { RolesList } from "./rolesList/rolesList";
import { useState } from "react";
import { SignUp } from "./signUp/SignUp";
import { GetCode } from "./getCode/GetCode";
import { SetStatus } from "./setStatus/SetStatus";

export function Main() {
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');

    return (
        <main>
            <RolesList setRole={setRole} choosenRole={role}/>
            {role? <SignUp role={role} setEmail={setEmail}/> : <></>}  
            {email? <GetCode email={email} setToken={setToken}/> : <></>}   
            {token? <SetStatus token={token}/> : <></>}   
        </main>
    )
}