import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getTasks } from "../../Redux/Action"
import Navbar from "../Navbar"
import Card from "../Card"
import img from '../../image/Vector.png'
import '../GetTasks/GetTasks.css'

export default function GetTasks(){
    let dispatch = useDispatch()
    let tasks = useSelector(state => state.getTasks)

    useEffect(() =>{
    dispatch(getTasks())
    }, [dispatch])
    return(
        <div>
            <Navbar />
        {!tasks.length > 0 ? (<div>
           <h1>No hay tareas pendientes</h1>
        </div>) :
            tasks && tasks.map((e)=>{
                return (
            <div key={e.id}>
                <Card
                id={e.id}
                title={e.title}
                description={e.description}
                done={e.done}
                createdAt={e.createdAt}
                />
            </div>  
        )})
    }
</div>
)
}