import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from 'react-redux';
import { deleteTasks, deleteTasksCard } from '../../Redux/Action';
import { useNavigate } from 'react-router-dom';
import '../Card/Card.css'


export default function Card({title, description, done, createdAt, id}){
   
    const dispatch = useDispatch()
    const navegate = useNavigate()
    const handleDelete =  (id) =>{
        dispatch(deleteTasksCard(id))
        dispatch(deleteTasks(id))
    }

    return(
        <div className="card text-white bg-primary mb-3" >
              <div className="card-header">Tarea</div>
              <button onClick={()=> handleDelete(id)}>Delete</button>
              <button onClick={()=> navegate(`/edit/${id}`)}>Edit</button>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <span>{createdAt}</span>
        </div>
    )
}