import { ADD_TASK } from "../consts/actions-types";

export function addTask (payload) {
  return { type: ADD_TASK, payload };
}