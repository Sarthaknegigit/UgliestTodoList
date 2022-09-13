import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["Sarthak", "Aryan", "Mudit"]);
  const [task, setTask] = useState("");

  function createTodo(e) {
    e.preventDefault();
    setTodos((oldTodos) => {
      setTask(""); // to clear the field after creation
      return [...oldTodos, task];
    });
  }

  return (
    <div className="App">
      <div className="title">
        <h1>Ugliest Todo List Ever</h1>
      </div>
      <div className="inputTodo">
        <form onSubmit={createTodo}>
          <input
            type="text"
            value={task}
            onChange={(event) => {
              setTask(event.target.value);
            }}
          />
          <button type="submit">Create</button>
        </form>

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
