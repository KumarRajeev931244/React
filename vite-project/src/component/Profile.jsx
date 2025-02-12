import React from "react";
import userContext from "../context/UserContext";
import { useContext } from "react";

function Profile(){
    const {user} = useContext(userContext)
    if(!user) return <div>please Login</div>
     
    return <div>welcome {user.userName} </div>
}

export default Profile