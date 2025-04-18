import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import workspaceImage from "../assets/Workspace.png"

function Signup(){

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleName = (event) => {
        setUsername(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSignup = (event) => {
        event.preventDefault()
        navigate("/record")
        axios.post("https://s60-weird-world-records.onrender.com/signup", {username, email, password})
        .then(output => {
            console.log(output)
            document.cookie = `email = ${email}; expires Fri, 31 Dec 9999 23:59:59 GMT`
            document.cookie = `addedby = ${username}; expires Fri, 31 Dec 9999 23:59:59 GMT`
        })
        .catch(error => console.log(error))
    }

    return(
        <div>
            <div className="out area">
                <div>
                    <h1>Hello, Welcome</h1>
                    <form onSubmit={handleSignup}>
                        <input type="text" placeholder="Username" onChange={handleName} required /><br />
                        <input type="text" placeholder="Email" onChange={handleEmail} required /><br />
                        <input type="text" placeholder="Password" onChange={handlePassword} required /><br />
                        <button className="signup" onSubmit={handleSignup}>Sign Up</button><br />
                    </form>
                    <p>If you already have an account</p>
                    <Link to="./login">
                        <button>Login</button>
                    </Link>
                </div>
                <div>
                    <img className="wimg" src={workspaceImage} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Signup;