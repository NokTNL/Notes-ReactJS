import Todo from "../models/todo"

type PropTypes = {
  item: Todo;
  handleDelete: (id: string) => void
}

const TodoItem = ({item, handleDelete}: PropTypes) => {
  return (
      <li onClick={()=>{handleDelete(item.id)}}>
        {item.text}
      </li>
  );
};

export default TodoItem;
