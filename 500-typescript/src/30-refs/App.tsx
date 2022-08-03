import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

// NewTodo.tsx for refs

function App() {
  const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];

  return (
    <div>
      <Todos items={todos} />
      <NewTodo />
    </div>
  );
}

export default App;
