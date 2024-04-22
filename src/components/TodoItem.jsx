import styles from "./todoitem.module.css";

export default function TodoItem({ e, todos, listTodos }) {
  function handleDelete(itemToBeDeleted) {
    listTodos(todos.filter((item) => item !== itemToBeDeleted));
  }

  function handleCompletion(e) {
    const newTodos = todos.map((todo) =>
      todo.name === e ? { ...todo, done: !todo.done } : todo
    );
    listTodos(newTodos);
    console.log(todos);
  }

  const taskDone = e.done ? styles.completed : "";
  return (
    <div className={styles.outer}>
      <div className={styles.item}>
        <span className={taskDone} onClick={() => handleCompletion(e.name)}>
          {" "}
          {e.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(e)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.hr} />
    </div>
  );
}
