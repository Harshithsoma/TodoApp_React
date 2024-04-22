import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, listTodos }) {
  const [todo, saveTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    listTodos([...todos, todo]);
    saveTodo({ name: "", done: false });
  }
  return (
    <form className={styles.formStyle} onSubmit={handleSubmit}>
      <div className={styles.topContainer}>
        <input
          className={styles.inputStyle}
          onChange={(e) => saveTodo({ name: e.target.value, done: false })}
          type="text"
          placeholder="Enter task here"
          value={todo.name}
        ></input>
        <button className={styles.formButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
