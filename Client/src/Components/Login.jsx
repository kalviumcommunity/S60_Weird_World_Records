import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import workspaceImage from "../assets/Workspace.png"

function Login(){

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState('')
    const [username, setUserName] = useState("")

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleUserName = (event) => {
        setUserName(event.target.value)
    }

    const handleError = () => {
        setErrorMessage("Incorrect user detail")
    }

    const handleLogin = (event) => {
        event.preventDefault()

        axios.post("https://s60-weird-world-records.onrender.com/login", { email, password, username })
        .then(output => {
            console.log(output)
            if(output.data.success === "Login successful"){
                navigate("/record")
                document.cookie = `email = ${email}; expires Fri, 31 Dec 9999 23:59:59 GMT`
                document.cookie = `password = ${output.data.webToken}; expires Fri, 31 Dec 9999 23:59:59 GMT`
                document.cookie = `addedby = ${username}; expires Fri, 31 Dec 9999 23:59:59 GMT`
            }else{
                handleError()
            }
        })
        .catch(error => {
            console.log(error)
            // handleError()
        })
    }

    return(
        <div>
            <div className="out area log">
                <div>
                    <h1>Welcome back !!</h1>
                    <form onSubmit={handleLogin}>
                        <input type="text" placeholder="Username" onChange={handleUserName} required /><br />
                        <input type="text" placeholder="Email" onChange={handleEmail} required /><br />
                        <input type="text" placeholder="Password" onChange={handlePassword} required /><br />
                        <button className="login">Login</button>
                    </form>
                    {errorMessage && <p>{errorMessage}</p>}

                    <p>Dont have an account</p>
                    <Link to="/">
                    <button>Signup</button>
                    </Link>

                </div>
                <div>
                    <img className="wimg" src={workspaceImage} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Login;