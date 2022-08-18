import axios from 'axios'
export const CREATE_TASKS = 'CREATE_TASKS';
export const GET_TASKS = 'GET_TASKS'
export const DELETE_TASKS = 'DELETE_TASKS'
export const DELETE_TASKS_CARDS = 'DELETE_TASKS_CARDS'
export const UPDATE_TASKS = 'UPDATE_TASKS'
export const GET_TASK = 'GET_TASK'



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
    let {response}= await axios.delete(`http://localhost:3001/taskss/${id}`)
    console.log(response)
    dispatch({
      type: DELETE_TASKS,
      payload: response
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteTasksCard = id => (dispatch) =>{
  try {
    dispatch({
      type: DELETE_TASKS_CARDS,
      payload: id
    })
  } catch (error) {
    console.log(error)
  }
}

export const updateTasks = (id, tasks) => async(dispatch) =>{
  try {
    let {response} = await axios.put(`http://localhost:3001/tasks/${id}`, tasks)
    dispatch({
      type: UPDATE_TASKS,
      payload: response
    })
  } catch (error) {
    console.log(error)
  }
}

export const getTask = (id) => async(dispatch) =>{
  try {
    let {response} = await axios.get(`http://localhost:3001/task/${id}`)
    dispatch({
      type: GET_TASK,
      payload: response
    })
  } catch (error) {
    console.log(error)
  }
}