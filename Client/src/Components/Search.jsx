import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Search(){

    const [user, setUser] = useState([])
    const [record, setRecord] = useState([])
    const [store, setStore] = useState("")

    useEffect(() => {
        const fetchUsers = async() => {
            try{
                const dataUsers = await axios.get("http://localhost:3001/signup")
                setUser(dataUsers.data.arrOfUsers)
            }catch(error){
                console.log(error)
            }
        }
        fetchUsers()
    })

    useEffect(() => {
        const fetching = async() => {
            try{
                const recordData = await axios.get("http://localhost:3001/get");
                setRecord(recordData.data.arrOfdata)
            }catch(error){
                console.log("error", error)
            }
        }
        fetching();
    },[])

    const Users = (event) => {
        setStore(event.target.value)
        console.log(event.target.value)
    }

    return(
        <div className="out">
            <Navbar/>
            <div>
                <div>
                    <h2>Search</h2>
                    <select className="options" onChange={Users}>
                        <option value="none">None</option>
                        {
                            user.map((item) => (
                                <option value={item.username} key={item._id}>
                                    {item.username}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    {
                        record.filter((index) => store === index.Added_by)
                            .map((item) => {
                                return(
                                    <div key={item._id}>
                                        <h1>Record Category : {item.Record_category}</h1>
                                        <h2>Name : {item.Record_Name}</h2>
                                        <h3>Holder Name : {item.Record_Holder_Name}</h3>
                                        <img className='img' src={item.Record_Picture} alt="img" />
                                        <p>Details : {item.Record_Details}</p>
                                        {/* <p>{item.Added_by}</p> */}
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default Search;