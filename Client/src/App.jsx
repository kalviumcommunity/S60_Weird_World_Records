import './App.css'
import data from './Components/dummydata'

function App() {

  return (
    <div>
      <p>Record Category : {data.Record_category}</p>
      <p>Record Name : {data.Record_Name}</p>
      <p>Record Holder Name : {data.Record_Holder_Name}</p>
      <img src={data.Record_Picture} alt="" />
      <p>Record  Details : {data.Record_Details}</p>
    </div>
  )
}

export default App
