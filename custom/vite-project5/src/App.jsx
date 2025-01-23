
import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  

  return (
    // we can import userContext provider inside the app.jsx or main.jsx
    <UserContextProvider>
      <h1>Hello Rajeev</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
