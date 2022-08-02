import { CREATE_TASKS, GET_TASKS} from "../Action";

const initialState={
  getTasks: [],
  createTasks:[],
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
        default:
        return state
    }
}
export default rootReducer