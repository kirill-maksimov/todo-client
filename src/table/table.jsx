import React from 'react';
import starIcon from '../utils/star.png';
import trashIcon from '../utils/trash.png';
import './table.css';

function Table(props) {
  const TABLE_HEAD = ['#', 'Title', 'Completed', 'Important', 'Delete'];
  const { tasks } = props;

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
                  onChange={() => console.log("request")}
                />
              </td>
              <td>{task.isImportant ? <img src={starIcon} className="icon" alt="star"/> : ''}</td>
              <td><img src={trashIcon} className="icon" alt="delete"/></td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}

export default Table;