import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [newText, setNewText] = useState([]);

  function handleChange(event) {
    const values = event.target.value;

    setText(values);
  }

  function addItem() {
    setNewText(function (prevValue) {
      console.log(prevValue);
      return [...prevValue, text];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={text} onChange={handleChange} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newText.map(function (todoItems) {
            console.log(todoItems);
            return <li>{todoItems}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

// (prevValue) => {
//   return {};
// }
