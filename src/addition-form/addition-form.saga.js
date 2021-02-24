import { put, call, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_TASK, ADD_TASK_SUCCESS, ADD_TASK_ERROR } from "../consts/actions-types";
import { getTasks } from "../table/table.action";

export function* addTask(action) {
  try {
    yield call(axios.post,'http://127.0.0.1:8080/api/addTask',
      {...action.payload, completed: false});
    yield put(getTasks());
    yield put ({type: ADD_TASK_SUCCESS})
  } catch (error) {
    yield put({ type: ADD_TASK_ERROR, error });
  }
}

export default function* additionFormSagas() {
  yield all([
    takeEvery(ADD_TASK, addTask),
  ]);
}