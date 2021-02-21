import React, { useEffect } from 'react';
import starIcon from '../utils/star.png';
import trashIcon from '../utils/trash.png';
import './table.css';

// TODO: delete mocked data
const tasks = [
  {
    id: 1,
    title: 'Finish the task by Friday',
    completed: true,
    isImportant: true,
  },
  {
    id: 2,
    title: 'Go to hang out',
    completed: false,
    isImportant: false,
  },
];

function Table(props) {
  const {items, setItems} = props;
  const TABLE_HEAD = ['#', 'Title', 'Completed', 'Important', 'Delete'];

  console.log('table', items);

  useEffect(() => {
    // TODO: rewrite with the GET endpoint
    fetch('/').then(response => setItems(response.json()));
    console.log('useeffect');
  }, []);

  const changeStatus = () => {
    fetch('/').then(response => setItems(response.json()));
  };

  const deleteTask = () => {
    fetch('/').then(response => setItems(response.json()));
  };

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
                  // TODO: rewrite with the POST endpoint (id needed)
                  // onChange={() =>changeStatus(task.id)}
                />
              </td>
              <td>{task.isImportant ? <img src={starIcon} className="icon" alt="star"/> : ''}</td>
              <td>
                <img
                  src={trashIcon}
                  className="icon"
                  alt="delete"
                  // TODO: rewrite with the POST endpoint (id needed)
                  // onClick={deleteTask(task.id)}
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