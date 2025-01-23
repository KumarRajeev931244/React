import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import About from './component/About/About'
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact'
import User from './component/User/User';
import Github, { gitHubInfoLoader } from './component/Github/Github'

        // method 1 for routing 
        

// const router = createBrowserRouter([
//   {
//     path: '/',       //it is top level nesting or it is home page.
//     element: <Layout/>,    // we bring the layout.
//     children: [
//       {
//         path: "",
//         element: <Home/>

//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

                        // second method of routing

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element = {<Home/>}/>
      <Route path='about' element = {<About/>}/>
      <Route path='contact' element = {<Contact/>}/>
      <Route path='user/:userid' element = {<User/>}/>
      <Route 
          // loader is used for fetching the api call when the cursor point on.
        loader= {gitHubInfoLoader}
        path='github' 
        element = {<Github/>}/>

       
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* routerProvider take router otherwise it will not work. */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
