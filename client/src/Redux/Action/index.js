import axios from 'axios'
export const  CREATE_TASKS = 'CREATE_TASKS';
export const GET_TASKS = 'GET_TASKS'
export const DELETE_TASKS = 'DELETE_TASKS'

export const createTasks = (tasks) => async(dispatch) => {
    try {
        let response = await axios.post('http://localhost:3001/tasks', tasks)
        return dispatch({
           type: CREATE_TASKS,
           payload: response.data
        })   
    } catch (error) {
        console.log(error)
    }
}

export const getTasks = () => async(dispatch)=>{
  try{
    let response = await axios.get('http://localhost:3001/tasks')
    return dispatch({
        type: GET_TASKS,
        payload: response.data
    })
  }catch(error){
    console.log(error)
  }
}

export const deleteTasks = (id) => async (dispatch) =>{
  try {
    let {response} = await axios.delete(`http://localhost:3001/taskss/${id}`)
    dispatch({
      type: DELETE_TASKS,
      payload: response
    })
  } catch (error) {
    console.log(error)
  }
}