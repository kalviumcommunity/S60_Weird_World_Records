import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InsertData(){

    const navigate = useNavigate()
    const [Record_category, setCategory] = useState('')
    const [Record_Name, setName] = useState('')
    const [Record_Holder_Name, setHolder] = useState('')
    const [Record_Picture, setImage] = useState('')
    const [Record_Details, setDetails] = useState('')

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

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/post", {Record_category, Record_Name, Record_Holder_Name, Record_Picture, Record_Details})
        .then((/*output*/) => {
            // console.log(output)
            navigate("/")
        })
        .catch((err) => {console.log('err', err)})
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="Category" placeholder="Record Category" onChange={handleCategory}/><br/>
            <input type="text" name="Name" placeholder="Record Name" onChange={handleName}/><br/>
            <input type="text" name="HolderName" placeholder="Record Holder Name" onChange={handleHolder}/><br/>
            <input type="text" name="Image" placeholder="Record Image" onChange={handleImage}/><br/>
            <textarea type="text" name="Details" placeholder="Record Details" onChange={handleDetails}></textarea><br/>
            <button>Insert Data</button>
        </form>
    )
}

export default InsertData;