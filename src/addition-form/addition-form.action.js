import { ADD_TASK } from "../consts/actions-types";

export function addTask (payload) {
  console.log(payload);
  return { type: ADD_TASK, payload };
}