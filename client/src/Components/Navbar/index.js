import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <>
         <nav>
            <ul>
            <Link to='/tasks'>tareas</Link>
            
            <Link to='/create'>Crear Tarea</Link>
            </ul>
         </nav>
        </>
    )
}