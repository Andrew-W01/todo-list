import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue("");
  };
  const toggleCompletion = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  return (
    <div className="app-container">
      <h1>To-Do List</h1>

      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new to-do"
          className="todo-input"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <span className="todo-text" onClick={() => toggleCompletion(index)}>
              {todo.text}
            </span>

            {todo.completed && <span className="checkmark">✔</span>}
            <button onClick={() => deleteTodo(index)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
