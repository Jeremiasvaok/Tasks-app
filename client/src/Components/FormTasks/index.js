import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { createTasks, getTask, updateTasks} from '../../Redux/Action'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { Form, Formik } from 'formik'
import swal from 'sweetalert'

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

  return (
    <div>
      <h1>{params.id ? 'Edit tasks': 'Create tasks'}</h1>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={(value, action) => {
          if(params.id){
          dispatch(updateTasks(params.id, value))
          swal({
            title: "Good job!",
            text: "tu tarea fue madificada!",
            icon: "success",
          });
            action.resetForm()// reseta el input cunado se termina de inviar la info NO ANDA
          }else{
            console.log(value)
          dispatch(createTasks(value))
          swal({
            title: "Good job!",
            text: "tu tarea fue creada!",
            icon: "success",
          });
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
            /><br/>
            <label>Description</label>
            <textarea
              type={'text'}
              name='description'
              rows={'3'}
              placeholder='ingrese una descripcion de la tarea'
              onChange={handleChange}
              value={values.description}
            ></textarea><br/>
            <button type={'submit'} disabled={isSubmitting} >
              {isSubmitting ? 'Saving...': 'Save'}
              </button><br/>
             <Link to={'/tasks'}><button>Volver</button></Link>
          </Form>
        )}
      </Formik>
    </div>
  )
}