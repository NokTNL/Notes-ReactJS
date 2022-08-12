import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

// go to NewTodo.tsx

function App() {
  const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];

  const addTodoHandler = (todoText: string) => {
    // Some code to handle the changes
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
