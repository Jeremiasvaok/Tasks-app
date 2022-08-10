import { CREATE_TASKS, GET_TASKS, DELETE_TASKS, DELETE_TASKS_CARDS, GET_TASK, } from "../Action";

const initialState={
  getTasks: [],
  createTasks:{},
  deleteTasks:[],
  getTask:[],

};
function rootReducer(state= initialState, action){
    switch (action.type) {
        case CREATE_TASKS:
            return{
                ...state,
            createTasks: action.payload
            }
        case GET_TASKS:
            return{
                ...state,
            getTasks: action.payload
            }
        case DELETE_TASKS:
            return{
                ...state,
                deleteTasks: action.payload
            }
        case DELETE_TASKS_CARDS:
             return{
                ...state,
            getTasks: state.getTasks.filter(t => t.id !== action.payload)
             }
        case GET_TASK:
            return{
                ...state,
              getTask: action.payload
            }
        default:
        return state
    }
}
export default rootReducer