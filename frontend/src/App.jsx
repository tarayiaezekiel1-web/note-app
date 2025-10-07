
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages.jsx/home.jsx"
import Login from "./pages.jsx/login.jsx"
import SignUp from "./pages.jsx/signUp.jsx"
import toast, {Toaster} from "react-hot-toast"
import CreateNote from "./pages.jsx/createnote.jsx"
function App() {
  

  return (
   <BrowserRouter>
      <Toaster position="top" reverseOrder={false} />
      <div data-theme="forest"/>

   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/create" element={<CreateNote/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
