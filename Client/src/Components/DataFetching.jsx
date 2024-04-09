import axios from 'axios';
import { useState, useEffect } from 'react';

function FetchData(){

    const [record, setRecord] = useState([])

    useEffect(() => {
        const fetching = async() => {
            try{
                const recordData = await axios.get("http://localhost:3001/get");
                console.log(recordData.data.arrOfdata)
                setRecord(recordData.data.arrOfdata)
            }catch(error){
                console.log("error", error)
            }
        }
        fetching();
    },[])

    return(
        <>
        {
            record.map((item) => {
                console.log("here",record)
                return(
                    <div key={item._id}>
                    <h1>Record Category : {item.Record_category}</h1>
                    <h2>Name : {item.Record_Name}</h2>
                    <h3>Holder Name : {item.Record_Holder_Name}</h3>
                    <img src={item.Record_Picture} alt="img" />
                    <p>Details : {item.Record_Details}</p>
                </div>
                )
                })
        }
        </>
    )
}

export default FetchData;