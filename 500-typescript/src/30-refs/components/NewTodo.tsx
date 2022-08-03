import { useRef } from 'react';

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks#useref

const NewTodo = () => {
  // const todoTextInputRef = useRef();
  // ^ This will throw TS error when we try to work with the ref, e.g. when you want to assign it as a prop of an <input> element below
  // The simple explanation is that TS infer its type from the mutable object returned from useRef(), but that object can be ANYTHING really. You need to tell TS what it will be used for.
  //
  // In the TypeScript version, `useRef` is an overloaded function and what type's returned depends on what you pass in
  // This is one of the form:
  //    function useRef<T>(initialValue: T|null): RefObject<T>
  // The type definition of RefObject:
  //    interface RefObject<T> {
  //      readonly current: T | null;
  //    }

  // The correct type <T> bases on what HTML element you are using that ref for, and it is exactly the DOM node object type (NOT React specific!). You can typically find this info in e.g. MDN docs
  // Also, the ref prop requires you to assign `null` to the ref as the inital value:
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // The IDE is sure that there's a `current` property in the type, but not sure if `value` exists under `current`
    // This is because `current` have the UNION TYPE of `T | null`
    // If it is <T>, then TS knows that `current.value` has the type "string"
    // If it is `null`, then `current.value` be of the type `undefined`
    // Therefore, the IDE will auto-complete `current?.value` for you
    //    const enteredText = todoTextInputRef.current?.value
    
    // If you are sure that you it can't be null thou (which we are since only the HTML element can trigger this callback), you can tell TS to neglect possibly null value by `currernt!`, or `current!.value` in full.
    // This is called 'non-null assertion': https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
    // Now `enteredText` will only be of type 'string'
    const enteredText = todoTextInputRef.current!.value
    console.log(enteredText);
    

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
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
