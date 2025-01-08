import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

// jaha value lene hai
function Profile(){
    const {user} = useContext(UserContext)

    if(!user) return <div>please login</div>
    return <div>welcome {user.username} and password {user.password}</div>
}

export default Profile