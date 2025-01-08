// we have make context provider in jsx

import React, { useState } from "react";
import UserContext from "./UserContext";


// step2: Here we have create UserContextProvider
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider