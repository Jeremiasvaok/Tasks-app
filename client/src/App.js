import './App.css';
import { Route, Routes} from 'react-router-dom'
import CreateTasks from './Components/FormTasks';
import GetTasks from './Components/GetTasks';
import Navbar from './Components/Navbar';
import Error from './Components/Error'

function App() {
  return(
    <div className="App">
       {<Navbar/>}
     <Routes>
        <Route path='/tasks' element={<GetTasks />} />
        <Route path='/create' element={<CreateTasks />}/>
        <Route path='*' element={<Error/>} />
     </Routes>
  </div>
  )
}

export default App;