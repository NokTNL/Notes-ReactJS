import React from 'react';

import TodoItem from './TodoItem';
import Todo from '../models/todo';

type PropTypes = {
  items: Todo[];
  handleDelete: (id: string) => void;
}

const Todos = ({items, handleDelete}: PropTypes) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} handleDelete={handleDelete}/>
      ))}
    </ul>
  );
};

export default Todos;
