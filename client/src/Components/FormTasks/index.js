import {Formik, Form} from 'formik'
// import { useDispatch } from 'react-redux'
// import { createTasks } from '../../Redux/Action'
import { createTasks } from '../../api'

export default function CreateTasks(){
    // const dispatch = useDispatch()
    return(
        <div>
        <Formik
        initialValues={{
            title:'',
            description: '',
         }}
         onSubmit={ async (value)=>{
            // dispatch(createTasks(value))
            // console.log(value)
            try {
             const response =  await createTasks(value)
             console.log(response)
            } catch (error) {
             alert('puto',error)
            }
         }}
         >   
         {({handleChange, handleSubmit})=>( 
         <Form onSubmit={handleSubmit}>
             <label>Title</label>
                 <input 
                  type="text" 
                  name='title' 
                  placeholder='inserte un titulo'
                  onChange={handleChange}
                  /><br/>
                <label>description</label>
                 <input 
                  type='text' 
                  name='description' 
                  placeholder='incerte una descripcion'
                  rows="3"
                  onChange={handleChange}
                  /><br/>
                <button type='submit'>Enviar</button>
            </Form>
         )}
        </Formik>
        </div>
    )
}