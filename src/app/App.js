import React, { useState } from 'react';
import './App.css';
import Table from "../table/table";
import AdditionForm from "../addition-form/addition-form";

function App() {
  const [items, setItems] = useState([]);
  return (
    <>
      <AdditionForm items={items} setItems={setItems} />
      <Table items={items} setItems={setItems} />
    </>
  );
}

export default App;
