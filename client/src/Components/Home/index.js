import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <>
        <div className="contenedor_1">
           <h1 className='letra'>TAREA</h1>
            <Link to={'/tasks'}>
             <button className='boton'><p className='letra'>Entrar</p></button>
            </Link>
        </div>
        <div className='contenedor_2'>
     
        </div>
        </>
    )
}