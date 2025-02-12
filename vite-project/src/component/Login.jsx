import React from "react";
import userContext from "../context/UserContext";
import { useState } from "react";
import { useContext } from "react";

function login(){
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }

    return(
        <div>
            <h2>login</h2>
            <input 
            type="text" 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder= 'username'
            />
            <h2>password</h2>
            <input 
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            />

            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}