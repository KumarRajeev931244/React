import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

 function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary').then(response => response.json()).then(data => {
    //         console.log(data);
    //         setData(data)           
    //     })
    // }, [])

    return(
        
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">twitter_id: {data.twitter_username}</div>
        <img src={data.avatar_url} alt="" width={300} className="items-center justify-center  rounded-3xl"/>
        </div>


    )
}

export default Github
export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}