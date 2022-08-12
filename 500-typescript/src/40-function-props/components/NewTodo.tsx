import { useRef } from 'react';

type PropTypes = {
  // A function-type prop has to be pre-defined using the TS function type syntax.
  // Note that the NAME of the PARAMETERS must also be declared
  onAddTodo: (text: string) => void;
} 

const NewTodo = (props: PropTypes) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
