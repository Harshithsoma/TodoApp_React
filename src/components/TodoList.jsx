import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, listTodos }) {
  const sortedTodos = todos.sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.todoItems}>
      {sortedTodos.map((e) => (
        <TodoItem key={e.name} e={e} todos={todos} listTodos={listTodos} />
      ))}
    </div>
  );
}
