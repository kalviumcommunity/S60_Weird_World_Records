import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../assets/Logo.png"

function FetchData(){

    const [record, setRecord] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const fetching = async() => {
            try{
                const recordData = await axios.get("http://localhost:3001/get");
                // console.log(recordData.data.arrOfdata)
                setRecord(recordData.data.arrOfdata)
            }catch(error){
                console.log("error", error)
            }
        }
        fetching();
    },[])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/delete/${id}`);
            setRecord(prevRecords => prevRecords.filter(item => item._id !== id));
            console.log("Data deleted successfully");
        } catch(error) {
            console.log("Error deleting data:", error);
        }
    };

    const Logout = () => {
        document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "addedby=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
        navigate("/");
    }
    
    return(
        <div>
            <nav className='navbar'>
                <img height="60px" width="200px" src={Logo} alt="" />
                <button onClick={() => navigate("/insert")} className='Insert'>Insert</button>
                <button onClick={() => navigate("/search")} className='Search'>search</button>
                <button onClick={Logout} className='Logout'>Logout</button>
            </nav>
            <div className="seperate">
                {
                record.map((item) => {
                    // console.log("here",record)
                    return(
                        <div className='items' key={item._id}>
                            <h2>{item.Record_category}</h2>
                            <h2>{item.Record_Name}</h2>
                            <h3>Record Holder Name : {item.Record_Holder_Name}</h3>
                            <img className='img' src={item.Record_Picture} alt="img" />
                            <p><b>Details :</b>  {item.Record_Details}</p>
                            {/* <p>{item.Added_by}</p> */}
                            <div className='btns'>
                                <Link to={`/Update/${item._id}`}>
                                    <button className='Update'>Update</button>
                                </Link>
                                <button onClick={() => handleDelete(item._id)} className='delete'>Delete</button>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default FetchData;