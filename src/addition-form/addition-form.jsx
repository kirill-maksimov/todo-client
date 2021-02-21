import React from 'react';
import './addition-form.css';

function AdditionForm(props) {
  const { items, setItems } = props;
  const addTask = (data) => {
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    });
    console.log("addition");
  };

  return (
    // TODO: rewrite addTask with the POST endpoint
    <form onSubmit={addTask()}>
      <div className="mb-3">
        <label htmlFor="inputTitle" className="form-label">{'Add ToDo Title'}</label>
        <input type="text" className="form-control" id="inputTitle" />
        <div id="titleHelp" className="form-text">Please, describe here your task</div>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="check1" />
          <label className="form-check-label" htmlFor="check1">Does your task have important status?</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default AdditionForm;