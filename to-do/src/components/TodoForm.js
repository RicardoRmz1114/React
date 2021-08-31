import React from 'react'
import { useState, useRef, useEffect } from 'react'

const TodoForm = (props) => {

    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const changeHandler = (event) => {
        setInput(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })

        setInput('')
    }

    return (
        <form onSubmit={submitHandler} className="todo-form">
            <input 
            type="text" 
            placeholder="Add a task"
            value={input}
            name="text"
            className="todo-input"
            onChange={changeHandler}
            ref={inputRef}
            />
            <button className="todo-button">Add task</button>
        </form>
    )
}

export default TodoForm
