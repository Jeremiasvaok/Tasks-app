
export default function Card({title, description}){
    return(
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
              <div class="card-header">Tarea</div>
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
        </div>
    )
}