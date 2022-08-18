import { Link } from "react-router-dom"
import '../Navbar/Navbar.css'

export default function Navbar(){
    return(
        <>
         <nav className="nav">
            <ul>
            <Link to={'/'} className='Link'><h1 className="titulo1">Volver</h1></Link>
            <Link to='/tasks' className='Link'><h1 className="titulo2">Tareas</h1></Link>
            <Link to='/create' className='Link'><h1 className="titulo3">Crear Tarea</h1></Link>
            </ul>
         </nav>
        </>
    )
}