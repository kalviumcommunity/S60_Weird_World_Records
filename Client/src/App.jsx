import './App.css'
import {Routes, Route} from 'react-router-dom'
import FetchData from './Components/DataFetching'
import InsertData from './Components/InsertData'
import UpdateData from './Components/UpdateData'

function App() {

  return (
    <div>
        <Routes>
          <Route path='/' element={<FetchData/>}></Route>
          <Route path='/insert' element={<InsertData/>}></Route>
          <Route path='/Update/:id' element={<UpdateData/>}></Route>
        </Routes>
    </div>
  )
}

export default App
