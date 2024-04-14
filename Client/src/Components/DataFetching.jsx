import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
        navigate("/");
    }
    
    return(
        <div>
            <Link to='./insert'>
                <button className='Insert'>Insert</button>
            </Link>
            <button onClick={Logout}>Logout</button>
            <div>
                {
                record.map((item) => {
                    // console.log("here",record)
                    return(
                        <div key={item._id}>
                            <h1>Record Category : {item.Record_category}</h1>
                            <h2>Name : {item.Record_Name}</h2>
                            <h3>Holder Name : {item.Record_Holder_Name}</h3>
                            <img className='img' src={item.Record_Picture} alt="img" />
                            <p>Details : {item.Record_Details}</p>
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