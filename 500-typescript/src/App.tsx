import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';

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
