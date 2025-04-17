import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png"

function Navbar() {

    const navigate = useNavigate();

    const Logout = () => {
        document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "addedby=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
        navigate("/");
    }

  return (
    <div>
        <nav className='navbar'>
            <img height="60px" width="200px" src={Logo} onClick={() => navigate("/record")} alt="" />
            <button onClick={() => navigate("/insert")} className='Insert'>Insert</button>
            <button onClick={() => navigate("/search")} className='Search'>search</button>
            <button onClick={Logout} className='Logout'>Logout</button>
        </nav>
    </div>
  )
}

export default Navbar