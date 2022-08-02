import 'bootstrap/dist/css/bootstrap.css';
import '../Card/Card.css'

export default function Card({title, description}){
    return(
        <div className="card text-white bg-primary mb-3" >
              <div className="card-header">Tarea</div>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
        </div>
    )
}