import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

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
        axios.post("http://localhost:3001/signup", {username, email, password})
        .then(output => console.log(output))
        .catch(error => console.log(error))

        // const Userdata = {
        //     username : username,
        //     email : email,
        //     password : password
        // }

        // const Jsondata = JSON.stringify(Userdata)

        // document.cookie = `Userdata = ${Jsondata} expires=Fri, 31 Dec 9999 23:59:59 GMT`
    }

    return(
        <div>
            <form onSubmit={handleSignup}>
                <input type="text" placeholder="Username" onChange={handleName} required /><br />
                <input type="text" placeholder="Email" onChange={handleEmail} required /><br />
                <input type="text" placeholder="Password" onChange={handlePassword} required /><br />
                    <button onSubmit={handleSignup}>Sign Up</button>
                <br />
            </form>
            <p>If you already have an account</p>
            <Link to="./login">
                <button>Login</button>
            </Link>
        </div>
    )
}

export default Signup;