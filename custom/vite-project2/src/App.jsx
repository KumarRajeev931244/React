import { useState } from "react"
import Card from "./component/Card"
function App() {
  const [color, setColor] = useState('orange')
  
  return (
    // <>
    //                 {/* card wala code */}
    //    <div className="flex">
    //    <Card  image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYDmYNyRzoZheVVmDPUWynWSVrjmftv8wfg&s"} content = "“Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design,and the build size is tiny." />'
    //    <Card  image={"https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} content="JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user. " />
    //    <Card image={"https://t3.ftcdn.net/jpg/07/17/33/40/360_F_717334058_zZu41aMmrR0CvBxI3WLbWRjrqFyLAdW1.jpg"} content=" Notice how <li> has a key attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings. Usually, a key should be coming from your data, such as a database ID. "/>
    //    <Card content= "“Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design,and the build size is tiny." image={"https://img.freepik.com/premium-photo/charming-white-cat-with-pink-hat-featuring-heart-embellishment_922357-40796.jpg"}/>
    //    </div>
    // </>

                      // Background changer
    
   
    <>
      
      {/* <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full "><button className="outline-none  px-4 py-1 rounded-lg  " style={{backgroundColor: 'red'  }} onClick={() =>{setColor("red")}}>Red</button></div>

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full "><button className="outline-none  px-4 py-1 rounded-lg  " style={{backgroundColor: 'green' }} onClick={() => {setColor("green")}}>Green</button></div>

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full "><button className="outline-none  px-4 py-1 rounded-lg  " style={{backgroundColor: 'blue' }} onClick={() => setColor("Blue")}>Blue</button></div>

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full "><button className="outline-none  px-4 py-1 rounded-lg  " style={{backgroundColor: 'pink' }} onClick={() => setColor("pink")}>Pink</button></div>
        </div>
      </div> */}

                          {/* project-3 */}
    </>
  ) 
}

export default App
