import './App.css'
import {Routes, Route} from 'react-router-dom'
import FetchData from './Components/DataFetching'
import InsertData from './Components/InsertData'
import UpdateData from './Components/UpdateData'
import Signup from './Components/Signup'
import Login from './Components/Login'

function App() {

  return (
    <div>
        <Routes>
          <Route path='/' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/record' element={<FetchData/>}></Route>
          <Route path='/insert' element={<InsertData/>}></Route>
          <Route path='/Update/:id' element={<UpdateData/>}></Route>
        </Routes>
    </div>
  )
}

export default App
