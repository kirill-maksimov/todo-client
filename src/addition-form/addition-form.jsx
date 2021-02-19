import React from 'react';
import './addition-form.css';

function AdditionForm() {
  return (
    <form>
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