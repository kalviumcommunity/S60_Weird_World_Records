import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login(){

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleError = () => {
        setErrorMessage("Incorrect user detail")
    }

    const handleLogin = (event) => {
        event.preventDefault()

        axios.post("http://localhost:3001/login", { email, password})
        .then(output => {
            console.log(output)
            if(output.data === "Login successful"){
                navigate("/record")
                document.cookie = `email = ${email}; expires Fri, 31 Dec 9999 23:59:59 GMT`
                document.cookie = `password = ${password}; expires Fri, 31 Dec 9999 23:59:59 GMT`
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
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Email" onChange={handleEmail} required /><br />
                <input type="text" placeholder="Password" onChange={handlePassword} required /><br />
                <button required >Login</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    )
}

export default Login;