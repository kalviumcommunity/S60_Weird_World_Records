import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function InsertData(){

    const navigate = useNavigate()
    const [Record_category, setCategory] = useState('')
    const [Record_Name, setName] = useState('')
    const [Record_Holder_Name, setHolder] = useState('')
    const [Record_Picture, setImage] = useState('')
    const [Record_Details, setDetails] = useState('')
    const [Added_by, setAddedBy] = useState('')

    const handleCategory = (event) => {
        setCategory(event.target.value)
    }

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleHolder = (event) => {
        setHolder(event.target.value)
    }

    const handleImage = (event) => {
        setImage(event.target.value)
    }

    const handleDetails = (event) => {
        setDetails(event.target.value)
    }

    useEffect(() => {
        const storedCookie = document.cookie;
        const splitedCookie = storedCookie.split("; ")
        const cookieCollection = {}
        
        for(const cook of splitedCookie){
            const[prop, value] = cook.split("=")
            cookieCollection[prop] = value
        }

        const Username = cookieCollection["addedby"]
        setAddedBy(Username)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post("https://s60-weird-world-records.onrender.com/post", {Record_category, Record_Name, Record_Holder_Name, Record_Picture, Record_Details, Added_by})
        .then((/*output*/) => {
            // console.log(output)
            navigate("/record")
        })
        .catch((err) => {console.log('err', err)})
    }

    return(
        <div>
            <Navbar/>
            <div className="out in">
                <form onSubmit={handleSubmit}>
                    <h2>The data is added by {Added_by}</h2>
                    <input type="text" name="Category" placeholder="Record Category" onChange={handleCategory} required/><br/>
                    <input type="text" name="Name" placeholder="Record Name" onChange={handleName} required/><br/>
                    <input type="text" name="HolderName" placeholder="Record Holder Name" onChange={handleHolder} required/><br/>
                    <input type="text" name="Image" placeholder="Record Image" onChange={handleImage} required/><br/>
                    <textarea type="text" name="Details" placeholder="Record Details" onChange={handleDetails} required></textarea><br/>
                    <button className="insert">Insert Data</button>
                </form>
            </div>
        </div>
    )
}

export default InsertData;