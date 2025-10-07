import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){

    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const navigate= useNavigate()

    const handeSubmit= async(e)=>{
        e.preventDefault()

        try {
            await axios.post(
                "http://localhost:5000/api/auth/login",
                {username,password},{
                    withCredentials:true
                }
            )
            navigate("/")
        } catch (error) {
            alert("login fail")
            console.log("server error",error)
        }
    }
    return(
        <div>
            <form onSubmit={handeSubmit}>
                <label>username</label>
                <input type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)} />

                <br />
                <label>password</label>
                <input type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)} />

                <br />
                <button type="submit">login</button>
            </form>
        </div>
    )
}

export default Login