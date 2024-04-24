import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function UpdateData(){

    const {id} = useParams()
    const navigate = useNavigate()
    const [Record_category, setCategory] = useState("")
    const [Record_Name, setName] = useState("")
    const [Record_Holder_Name, setHolder] = useState("")
    const [Record_Picture, setImage] = useState("")
    const [Record_Details, setDetails] = useState("")

    useEffect(() => {
        const getRecorddata = async() => {
        axios.get("http://localhost:3001/getid/"+id)
        .then(recordData => {
            // console.log(recordData.data)
            setCategory(recordData.data.Record_category)
            setName(recordData.data.Record_Name)
            setHolder(recordData.data.Record_Holder_Name)
            setImage(recordData.data.Record_Picture)
            setDetails(recordData.data.Record_Details)
        })
    }
    getRecorddata()
    }, [])

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
        axios.put("http://localhost:3001/put/"+id, {Record_category, Record_Name, Record_Holder_Name, Record_Picture, Record_Details})
        .then((/*output*/) => {
            // console.log(output)
            navigate("/")
        })
        .catch((err) => {
            console.log('err', err)
        })
    }

    return(
        <div className="out in">
            <form onSubmit={handleSubmit}>
                <h2>Update data</h2>
                <input type="text" name="Category" placeholder="Record Category" value={Record_category} onChange={handleCategory} required/><br/>
                <input type="text" name="Name" placeholder="Record Name" value={Record_Name} onChange={handleName} required/><br/>
                <input type="text" name="HolderName" placeholder="Record Holder Name" value={Record_Holder_Name} onChange={handleHolder} required/><br/>
                <input type="text" name="Image" placeholder="Record Image" value={Record_Picture} onChange={handleImage} required/><br/>
                <textarea type="text" name="Details" placeholder="Record Details" value={Record_Details} onChange={handleDetails} required></textarea><br/>
                <button className="update">Update Data</button>
            </form>
        </div>
    )
}

export default UpdateData;