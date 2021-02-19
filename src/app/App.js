import React from 'react';
import './App.css';
import Table from "../table/table";
import AdditionForm from "../addition-form/addition-form";

const MOCKED_TASKS = [
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

function App() {
  return (
    <>
      <AdditionForm />
      <Table tasks={MOCKED_TASKS} />
    </>
  );
}

export default App;
