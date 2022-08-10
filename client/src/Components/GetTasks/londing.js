import { lazy, Suspense } from "react";


const Tasks = lazy(()=> import('./index.js'))

export default function GetTasks(){
    return(
        <div>
         <Suspense fallback={<h1>Loading...</h1>}>
         <Tasks />
         </Suspense>
        </div>
    )
}