import axios from 'axios'
export const createTasks = async() => {
 await axios.post('http://localhost:3001/tasks')
}