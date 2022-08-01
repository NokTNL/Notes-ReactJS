type propType = {
    text: string;
}

//                               v or inline: `{text}: {text: string}`
export default function TodoItem({text}: propType) {
    return (
        <li>{text}</li>
    )
}