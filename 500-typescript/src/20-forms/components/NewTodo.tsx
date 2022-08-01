import React from "react"

export default function NewTodo() {
    
    // React.SyntheticEvent is the generic type of event you can use in any event handler; you can also use event types specific to each "onXXXX" React events, e.g. React.MouseEvent for "onClick"
    // A full ist of possible events: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events#list-of-event-types
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault(); 
    }
    
    return (
        <form>
            <label htmlFor="text">New Todo</label>
            <input type="text" id="text" />
            {/* If you use inline handler here, the callback "knows" what onClick will pass to it so the correct event type can be inferred */}
            <button onClick={(event)=>{/* Some handling code */}}>Add by inline handler</button>
            {/* However if we separate the definition to somewhere else, then that function definition needs to know the event type */}
            <button onClick={handleSubmit}></button>
        </form>
    )
}