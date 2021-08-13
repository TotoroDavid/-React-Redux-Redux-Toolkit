//components
import ChangeColor from "./components/ChangeColor"
import Login from "./components/Login"
import Profile from "./components/Profile"

const App = () => {
  return (
    <div className='container'>
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  )
}

export default App
