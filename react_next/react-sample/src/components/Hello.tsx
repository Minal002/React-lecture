const Hello = () => {
    const onClick = () => {
        alert('Hello!');
    }
    const text = 'Hello, Vite + React!';

    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
}

export default Hello;