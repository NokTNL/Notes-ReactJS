import { createContext, PropsWithChildren, useState } from "react";
import Todo from '../models/todo';

// Typically you can create a context like just with null value:
const NullContext = createContext(null)

// Or initialise with dummy inital values and hook real objects to it later on, which has the advantage of telling the shape of the context object in advance (e.g. for IDE auto-completion):
const InitialContext = createContext({
  items: [], // <-- TS cannot infer the type here, because you can't decalre an empty Todo[] array here
  addTodo: (todoText: string) => {}, // TS cannot infer what type will be returned
})

// If you do not provide concrete initial values, TS cannot infer all the required type
// Therefore the simplest way of initialising is to tell the type in advance (that also accepts null value), and then initialise with an empty object with that type using `as`
// This is called TYPE ASSERTION, which tells TS you are sure that it WILL have that type later on (we are sure about that as we always initialise the context value in the provider with that type)

type TodosContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext({} as TodosContextType);

// Most of the time you will make your own provider wrapper component that renders `children`. You must tell TS that children is a prop!
// React has a handy type for using children in props, `PropsWithChildren`, that has this definition:
/* 
    type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };
*/
// Therefore, you can extend this type with:
//  - providing the GENERIC <P>, e.g. (props: PropsWithChildren<{extraProp: string}>)
//  - TYPE INTERSECTION, e.g. PropsWithChildren & {extraProp: string}
const TodosContextProvider = (props: PropsWithChildren<{extraProp?: string}>) => {
  //                          ^ Alternative: ({children, ...props}: PropsWithChildren<{extraProp?: string}>)
  //                          `props` will now receive the REMAINING type {extraProp?: string}
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  // Context.Provider has a prop called `children` as well
  // since `props` has the strucutre {children: ReactNode}, `...props` will pass the children for you like magic!
  return <TodosContext.Provider value={contextValue} {...props} />
}

export default TodosContextProvider;