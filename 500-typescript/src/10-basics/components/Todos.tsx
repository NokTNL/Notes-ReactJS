// https://github.com/typescript-cheatsheets/react#section-2-getting-started

import Todo from "../models/todo"; 
import TodoItem from "./TodoItem";

/**
 * Prop type
 */
// The props are always passed in as a single object. To make components aware of the expected types of props passed in, you need to tell React the type shape 
// Define the shape of the `props` object using type alias here
type TodosProps = {
    items?: Todo[];
}

// Since you return JSX in the function, TS can infer that `Todos` has the `JSX.Element` type. No need for explicit type!
// Note:        v destructuring
//                      v Default parameter! 
const Todos = ({ items = [] }: TodosProps) => {
    //         ^ You can also do inline object param type: ({ items = [] }: { items?: Todo[] }), just less readable
    // - destructuring inside the component instead may also make things a bit more readable, but then you CAN'T have default props defined
    return <ul>
        {items.map(item => <TodoItem key={item.id} text={item.text}/>)}
    </ul>
}

export default Todos;