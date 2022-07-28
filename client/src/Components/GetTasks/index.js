import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getTasks } from "../../Redux/Action"
import Card from "../Card"

export default function GetTasks(){
    let dispatch = useDispatch()
    let tasks = useSelector(state => state.getTasks)

    useEffect(() =>{
    dispatch(getTasks())
    }, [dispatch])
    return(
        <div>
            <h1>hello</h1>
        {
            tasks && tasks?.map((e)=>{
                return (
                  <div>
                  <Card  
                   key={e.id}
                   title={e.title}
                   description={e.description}
                  />
                </div>  
                )})
        }
        </div>)
}