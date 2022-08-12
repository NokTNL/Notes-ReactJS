import { useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

// see this file for useState, more exmaple in TodoItem.tsx

function App() {
  // For state value INITIALISED with a concrete value, TS can infer the type of the `state` value:
  const [bool, setBool] = useState(false); // `bool` has type `boolean` inferred
  const [arr, setArr] = useState([{id: 0}]); // `arr` has the type `{id: number}[]` inferred
  const [exampleTodos, setExampleTodos] = useState([new Todo("")]); // myTodo has type `Todo[]`
  // For state value initialised with type-uninferrable values, such as `null` and [], TS cannot infer its potential type anymore so you need to state explicitly
  // For []:
  const [todos, setTodos] = useState<Todo[]>([]);
  // For `null`, use union types:
  const [myNum, setMyNum] = useState<number | null>(null)
  // The setState function always have the type React.Dispatch inferred

  const handleAddTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos(prev => prev.concat(newTodo))
  };

  const handleDelete = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <NewTodo handleAddTodo={handleAddTodo} />
      <Todos items={todos} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
