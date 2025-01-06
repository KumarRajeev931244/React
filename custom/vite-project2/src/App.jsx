import { useCallback, useEffect, useRef, useState } from "react"
import Card from "./component/Card"
function App() {
  const [color, setColor] = useState('orange')
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()

  // useRef hook
  const passwordRef = useRef(null)


  // useCallback
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for(let i=1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  } , [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  
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
    
   
    // <>
      
    //   <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
    //     <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
    //       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full "><button className="outline-none  px-4 py-1 rounded-lg  " style={{backgroundColor: 'red'  }} onClick={() =>{setColor("red")}}>Red</button></div>

    //       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full "><button className="outline-none  px-4 py-1 rounded-lg  " style={{backgroundColor: 'green' }} onClick={() => {setColor("green")}}>Green</button></div>

    //       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full "><button className="outline-none  px-4 py-1 rounded-lg  " style={{backgroundColor: 'blue' }} onClick={() => setColor("Blue")}>Blue</button></div>

    //       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full "><button className="outline-none  px-4 py-1 rounded-lg  " style={{backgroundColor: 'pink' }} onClick={() => setColor("pink")}>Pink</button></div>
    //     </div>
    //   </div>
    // </>


                      //password generator
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-400">
        <h1 className="text-3xl font-extrabold text-white align-middle ml-10">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        readOnly
        ref={passwordRef}
         />
         <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label className="text-white">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultValue={numberAllowed}  id="numberInput" onChange={() => {setNumberAllowed((prev) => !prev)}}/>
            <label htmlFor="numberInput" className="text-white">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultValue={charAllowed} id="characterInput" onChange={() => {
              setCharAllowed((prev) => !prev)
            }} />
            <label htmlFor="characterInput" className="text-white">character</label>
          </div>
        </div>


      </div>
      
    </>
  ) 
}

export default App
