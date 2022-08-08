import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTasks, getTask} from '../../Redux/Action'
import { useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function CreateTasks(){
  const params = useParams()

  const dispatch = useDispatch()

  let navigate = useNavigate();
    // const[tasks, setTasks] = useState({
    //   title: '',
    //   description: ''
    // })
    const[input, setInput] = useState({
        title: '',
        description: '',
    })

   useEffect(()=>{
    if(params.id){
    dispatch(getTask(params.id))
    setInput({
      title: input.title,
      description: input.description
    })
    }
   }, [])


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
      <h1>{ params.id ? "Edit tasks" : "Create tasks"}</h1>
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