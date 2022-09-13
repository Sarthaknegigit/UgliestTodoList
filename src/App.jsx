import { useState } from "react";

let globalID = 0;

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function createTodo(e) {
    e.preventDefault();
    setTodos((oldTodos) => {
      setTask(""); // to clear the field after creation
      return [...oldTodos, { todo: task, id: globalID++ }];
    });
  }

  function deleteItem(itemID) {
    setTodos((oldTodos) => oldTodos.filter((item) => item.id !== itemID));
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
          {todos.map((item) => {
            return (
              <div className="task">
                <li>
                  ({item.id})&nbsp; {item.todo} {""} &nbsp;
                  <button onClick={() => deleteItem(item.id)}>Remove</button>
                </li>
                <br />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
