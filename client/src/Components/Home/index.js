import { Link } from 'react-router-dom'
import '../Home/home.css'
import home from '../../image/home.png'

export default function Home() {
    return (
        <main>
            <div className='titulo'>
                <h1 className='tareas-titulo'>TAREAS</h1>
            </div>
            <div className='contendor-img'>
                <img src={home} alt='img' className='img' />
            </div>
            <div className='contenedor_2'>
                <Link to={'/tasks'}>
                    <button className='boton'><p className='letra'>Entrar</p></button>
                </Link>
            </div>
        </main>
    )
}