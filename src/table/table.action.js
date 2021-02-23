import { CHANGE_STATUS, DELETE_TASK, GET_TASKS } from "../consts/actions-types";

export function getTasks (payload, resolve, reject) {
  return { type: GET_TASKS, payload, resolve, reject };
}

export function changeStatus (payload) {
  return { type: CHANGE_STATUS, payload };
}

export function deleteTask (payload) {
  return { type: DELETE_TASK, payload };
}