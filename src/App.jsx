import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["Sarthak", "Aryan", "Mudit"]);
  const [task, setTask] = useState("");

  function createTodo() {
    setTodos((oldTodos) => {
      setTask(""); // to clear the field after creation
      return [...oldTodos, task];
    });
  }

  function detectEnter(event) {
    if (event.keyCode === 13) {
      createTodo();
    }
  }

  return (
    <div className="App">
      <div className="title">
        <h1>Ugliest Todo List Ever</h1>
      </div>
      <div className="inputTodo">
        <input
          onKeyDown={detectEnter}
          type="text"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <button onClick={createTodo}>Create</button>

        <ul>
          {todos.map((todo) => {
            return <li>{todo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
