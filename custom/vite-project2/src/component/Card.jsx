import React from "react";

function Card( {username, content, image}){
    console.log(content);
    
    
    
    return(
        <div className="h-500 ml-10 mt-20 w-52 bg-orange-400 rounded-xl">
          <h1 className="bg-green-500 rounded-xl text-3xl font-extrabold text-center">Tailwind Test</h1>          
          <img src= {image } />
          
          <p>{content}</p>       
             
      </div>                            
    )
}
export default Card