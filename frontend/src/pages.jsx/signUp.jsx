import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignUp(){

    const [fullname,setFullname]= useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const navigate= useNavigate()

    const handleSubmit= async(e)=>{
        e.preventDefault()
        try {
            const res=await axios.post(
                "http://localhost:5000/api/auth/signup",{
                    fullname,username,password
                },{
                    withCredentials:true
                }
            )
            alert("successful signup")
            navigate("/")

        } catch (error) {
            alert("failed ")
            console.log("server error",error)

        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>

                <label>fullname</label>
                <input type="text"
                value={fullname} 
                onChange={(e)=>setFullname(e.target.value)}/>

                <br />
                 <label>username</label>
                <input type="text"
                value={username} 
                onChange={(e)=>setUsername(e.target.value)}/>

                <br />
                 <label>password</label>
                <input type="password"
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}/>

                <br />
                <button type="submit">signup</button>

            </form>
        </div>
    )
}
export default SignUp