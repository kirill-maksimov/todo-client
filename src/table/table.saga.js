import {put, takeEvery, all, call} from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_TASKS, GET_TASKS_SUCCESS, GET_TASKS_ERROR,
  CHANGE_STATUS, CHANGE_STATUS_SUCCESS, CHANGE_STATUS_ERROR,
  DELETE_TASK, DELETE_TASK_SUCCESS, DELETE_TASK_ERROR,
} from "../consts/actions-types";

export function* getTasks(action) {
  try {
    const result = yield call(axios.get('http://127.0.0.1:8080/api/todos').then(response => response.data));
    console.log('+++', result);
    yield put({ type: GET_TASKS_SUCCESS, result });
  } catch (error) {
    yield put({ type: GET_TASKS_ERROR, error });
  }
}

export function* changeStatus(action) {
  try {
    const result = yield call(axios.post('http://127.0.0.1:8080//api/changeStatus'));
    yield put({ type: CHANGE_STATUS_SUCCESS, result });
  } catch (error) {
    yield put({ type: CHANGE_STATUS_ERROR, error });
  }
}

export function* deleteTask(action) {
  try {
    const result = yield call(axios.post('http://127.0.0.1:8080//api/deleteTask'));
    yield put({ type: DELETE_TASK_SUCCESS, result });
  } catch (error) {
    yield put({ type: DELETE_TASK_ERROR, error });
  }
}

export default function* tableSagas() {
  yield all([
    takeEvery(GET_TASKS, getTasks),
    takeEvery(CHANGE_STATUS, changeStatus),
    takeEvery(DELETE_TASK, deleteTask),
  ]);
}