import {
  GET_TASKS_SUCCESS, ADD_TASK_SUCCESS, CHANGE_STATUS_SUCCESS, DELETE_TASK_SUCCESS,
} from "../consts/actions-types";

const defaultState = {
  tasks: null,
};

function reducer (state = defaultState, action) {
  switch(action.type) {
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.result,
      }
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
      }
    case CHANGE_STATUS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
      }
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
      }
    default: return state
  }
}

export default reducer;