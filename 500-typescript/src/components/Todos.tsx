// https://github.com/typescript-cheatsheets/react#section-2-getting-started

import Todo from "../models/todo"; 

// Define the shape of the `props` object first
type TodosProps = {
    items?: Todo[];
}

// Since you return JSX in the function, TS can infer that `Todos` has the `JSX.Element` type. No need for explicit type!
// Note:        v destructuring
//                      v Default parameter!
const Todos = ({items = []}: TodosProps) => {
    return <ul>
        {items.map(item => <li>{item.text}</li>)}
    </ul>
}

export default Todos;