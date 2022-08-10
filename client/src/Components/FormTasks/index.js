import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createTasks, getTask, updateTasks} from '../../Redux/Action'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { Form, Formik } from 'formik'

export default function CreateTasks() {
  const taks = useSelector((state) => state.getTask)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const params = useParams()
  const [ task, setTask] = useState({
        title:'',
        description:''
  })
  
  useEffect(()=>{
    const loadTasks = async()=>{
  if(params.id){
   dispatch(getTask(params.id))
      setTask({
        title: task.title,
        description: task.description
      })
    }
  }
  loadTasks()
  }, [])


  // const handleChange =(e) =>{
  //   e.preventDefault();
  //     setInput(prev => ({...prev, [e.target.name]: e.target.value})) 
  // }

  //   const handleSubmit=(e)=>{
  //     e.preventDefault();
  //       if(input.title && input.description){
  //       dispatch(createTasks(input))
  //       setInput({
  //         title:'',
  //         description:''
  //       })
  //       alert('Tu tarea fue creada con exito')
  //       navigate("/tasks")
  //       }else{
  //        alert('No se puede completar la solisitud')
  //       }
  //     }
  return (
    <div>
      <h1>{params.id ? 'Edit tasks': 'Create tasks'}</h1>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={(value, action) => {
          if(params.id){
          dispatch(updateTasks(params.id, value))
          alert('Tu tarea fue modificada con exito')
            action.resetForm()// reseta el input cunado se termina de inviar la info NO ANDA
          }else{
            console.log(value)
          dispatch(createTasks(value))
           alert('Tu tarea fue creada con exito')
           action.resetForm()// reseta el input cunado se termina de inviar la info NO ANDA
          }

          navigate("/tasks")
        }}
      >

        {({ handleChange, handleSubmit, values, isSubmitting}) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              placeholder='ingrese un titulo'
              type={'text'}
              name='title'
              onChange={handleChange}
              value={values.title} // es para limpiar el input NO ANDA
            />
            <label>Description</label>
            <textarea
              type={'text'}
              name='description'
              rows={'3'}
              placeholder='ingrese una descripcion de la tarea'
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <button type={'submit'} disabled={isSubmitting} >
              {isSubmitting ? 'Saving...': 'Save'}
              </button> 
          </Form>
        )}
      </Formik>
    </div>
  )
}