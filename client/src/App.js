import './App.css';
import { Route, Routes} from 'react-router-dom';
import CreateTasks from './Components/FormTasks';
import GetTasks from './Components/GetTasks/londing';
import Error from './Components/Error';
import Home from './Components/Home';

function App() {
  return(
    <div className="App">
     <Routes>
        <Route exact strict path='/' element={<Home />} />
        <Route path='/tasks' element={<GetTasks />} />
        <Route path='/create' element={<CreateTasks />}/>
        <Route path='/edit/:id' element={<CreateTasks/>} />
        <Route path='*' element={<Error/>} />
     </Routes>
  </div>
  )
}

export default App;