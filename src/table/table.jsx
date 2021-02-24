import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import starIcon from '../utils/star.png';
import trashIcon from '../utils/trash.png';
import { getTasks, changeStatus, deleteTask } from './table.action';
import './table.css';

function Table() {
  const TABLE_HEAD = ['#', 'Title', 'Completed', 'Important', 'Delete'];

  const tasks = useSelector(state => state.tasks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            {
              TABLE_HEAD.map((h,i) => <th key={i} scope="col">{h}</th>)
            }
          </tr>
        </thead>
        <tbody>
        {
          tasks && tasks.map((task, i) => (
            <tr key={task.id} className={task.completed ? "completed" : ''}>
              <th scope="row">{++i}</th>
              <td>{task.title}</td>
              <td>
                <input
                  className="form-check-input"
                  type="checkbox" value=""
                  id="flexCheckChecked"
                  checked={task.completed}
                  onChange={() =>dispatch(changeStatus(task.id))}
                />
              </td>
              <td>{task.isImportant ? <img src={starIcon} className="icon" alt="star"/> : ''}</td>
              <td>
                <img
                  src={trashIcon}
                  className="icon"
                  alt="delete"
                  onClick={() => dispatch(deleteTask(task.id))}
                />
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}

export default Table;