import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from 'react-redux';
import { deleteTasks } from '../../Redux/Action';
import '../Card/Card.css'

export default function Card({title, description, done, createdAt, id}){
   
     const dispatch = useDispatch()

    const handleDelete = async (id) =>{
       let response = await dispatch(deleteTasks(id))
       console.log(response)
    }

    return(
        <div className="card text-white bg-primary mb-3" >
              <div className="card-header">Tarea</div>
              <button onClick={()=> handleDelete(id)}>Delete</button><button>Edit</button>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <span>{done === 1 ? '✔️' : '🕐' }</span>
              <span>{createdAt}</span>
        </div>
    )
}