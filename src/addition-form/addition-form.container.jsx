import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "./addition-form.action";
import './addition-form.css';

function AdditionFormContainer() {
  const [title, setTitle] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const dispatch = useDispatch();

  const handleText = event => setTitle(event.target.value);
  const handleCheckboxImportant = event => setIsImportant(event.target.checked);
  const handleSubmit = event => {
    event.preventDefault();
    return dispatch(addTask({title, isImportant}));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="inputTitle" className="form-label">{'Add ToDo Title'}</label>
        <input
          type="text"
          className="form-control"
          id="inputTitle"
          onChange={handleText}
        />
        <div id="titleHelp" className="form-text">Please, describe here your task</div>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="check1"
          onChange={handleCheckboxImportant}
        />
        <label className="form-check-label" htmlFor="check1">Does your task have important status?</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default AdditionFormContainer;