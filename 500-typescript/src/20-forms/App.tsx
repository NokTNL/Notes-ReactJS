import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';

// See Todos.tsx & TodoItem.tsx for defining prop types for components
// See todo.ts for how to instantiate objects with the same type structure using a CLASS

function App() {
  const items = [
    new Todo("Learn A"),
    new Todo("Learn B")
  ]
  return (
    <div>
      <Todos items={items}/>
      {/* vvv Empty items list still works because we set default items = [] */}
      <Todos />
    </div>
  )
}

export default App;
