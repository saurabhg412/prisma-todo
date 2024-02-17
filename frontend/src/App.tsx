import { TodoList } from "../components/TodoList";
import { Todo } from "../components/Todo";
import { useEffect, useState } from "react";
function App() {
  const [todos, setTodos] = useState([])
  useEffect(function () {
    fetch("http://localhost:3000/todo")
    .then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
    })
  }, []);

  return (
    <div>
      <TodoList></TodoList>
      <Todo todos={todos}></Todo>
    </div>
  )
}

export default App;