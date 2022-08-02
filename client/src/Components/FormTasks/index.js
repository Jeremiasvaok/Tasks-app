import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTasks } from '../../Redux/Action'
import { useNavigate} from "react-router-dom";


export default function CreateTasks(){
  const dispatch = useDispatch()
  let navigate = useNavigate();
    const[input, setInput] = useState({
        title: '',
        description: '',
    })

const handleChange =(e) =>{
  e.preventDefault();
    setInput(prev => ({...prev, [e.target.name]: e.target.value})) 
}

  const handleSubmit=(e)=>{
    e.preventDefault();
      if(input.title && input.description){
      dispatch(createTasks(input))
      setInput({
        title:'',
        description:''
      })
      alert('Tu tarea fue creada con exito')
      navigate("/tasks")
      }else{
       alert('No se puede completar la solisitud')
      }
    }

  return(
    <div>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <label>Title</label>
         <input 
         placeholder='ingrese un titulo'
         type={'text'}
         name='title'
         onChange={(e)=> handleChange(e)}
         />
         <label>Description</label>
         <input 
          type={'text'}
          name='description'
          onChange={(e)=> handleChange(e)}
         />
         <input  type={'submit'} placeholder='Create!'/>
      </form>
    </div>
  )
}