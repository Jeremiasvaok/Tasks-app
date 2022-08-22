import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { createTasks, getTask, updateTasks} from '../../Redux/Action'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { Form, Formik } from 'formik'
import swal from 'sweetalert'
import '../FormTasks/FormTasks.css'

export default function CreateTasks() {
  const taks = useSelector((state) => state.getTask)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const params = useParams()
  const [ task, setTask] = useState({
        title:'',
        description:''
  })
  console.log(task.title)
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
      <>
      <h1 className='tituloh1'>{params.id ? 'Edit tasks': 'Create tasks'}</h1>
      <div className='contenedor-from'>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={(value, action) => {
          if(params.id && value.title && value.description){
          dispatch(updateTasks(params.id, value))
          swal({
            title: "Buen tarabajo!",
            text: "Tu tarea fue madificada!",
            icon: "success",
          });
          navigate("/tasks")
          } else if(params.id && !value.title && !value.description){
            swal({
              title: "Error!",
              text: "Tu tarea no pudo ser modificada por falta de informacion!",
              icon: "warning",
          })
          navigate("/tasks")
        }else if(value.title && value.description){
            console.log(value.title)
            dispatch(createTasks(value))
           swal({
            title: "Buen trabajo!",
            text: "Tu tarea fue creada!",
            icon: "success",
          });
          navigate("/tasks")
          }else{
            swal({
              title: "Error!",
              text: "Tu tarea no pudo ser creada por falta de informacion!",
              icon: "warning",
          })
          navigate("/tasks")
      }
    }}
      >

        {({ handleChange, handleSubmit, values}) => (
          <Form onSubmit={handleSubmit}>
            <h1 className='label-title'>Title:</h1>
            <input
              placeholder='ingrese un titulo'
              className='input-title'
              type={'text'}
              name='title'
              onChange={handleChange}
              value={values.title} // es para limpiar el input NO ANDA
            /><br/>
            <h1 className='label-description'>Description:</h1>
            <textarea
              type={'text'}
              className='input-descripction'
              name='description'
              rows={'3'}
              placeholder='ingrese una descripcion de la tarea'
              onChange={handleChange}
              value={values.description}
            ></textarea><br/>
            <div className='contenedor-botoness'>
            <button className='boton-save' type={'submit'} >Save</button><br/>
             <Link to={'/tasks'} className='LINKK'><button className='boton-volver'>Volver</button></Link>
             </div>
          </Form>
        )}
      </Formik>
    </div>
    </>
  )
}