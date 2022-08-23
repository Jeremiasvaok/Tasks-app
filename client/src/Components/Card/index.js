import { useDispatch } from 'react-redux';
import { deleteTasks, deleteTasksCard } from '../../Redux/Action';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import '../Card/Card.css'


export default function Card({ title, description, createdAt, id }) {

  const dispatch = useDispatch()
  const navegate = useNavigate()
  const handleDelete = (id) => {
    swal({
      title: " ¿Estás seguro? ",
      text: "¡ Una vez eliminado, no podrá recuperar este tarea! ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal(" ¡Puf ! ¡Tu tarea ha sido eliminado! ", {
            icon: "success",
          });
          dispatch(deleteTasksCard(id))
          dispatch(deleteTasks(id))
        } else {
          swal(" ¡Tu tarea está a salvo! ");
        }
      });
  }

  return (
    <>
      <div className="card" >
        <div className='contenedor-botones'>
          <button type='submit' onClick={() => handleDelete(id)} className='botonn1'>Delete</button>
          <button type='submit' onClick={() => navegate(`/edit/${id}`)} className='botonn2'>Edit</button>
        </div>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <span>{createdAt}</span>
      </div>
   </>
  )
}