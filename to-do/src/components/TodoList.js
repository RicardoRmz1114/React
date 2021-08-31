import React, { useState } from 'react';
import Todo from './Todo';

import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos,setTodos] = useState([]);

    const addTask = todo => {
        if(!todo.text || /^\s*$/.test(todo.text) ){
            return
        }

        const newTodos = [todo,...todos];
        setTodos(newTodos);
    }

    const updateTodo = (id,newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text) ){
            return
        }

        setTodos(prev => prev.map(item => (item.id === id ? newValue : item)))
        
    }


    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }


    return (
        <div>
            <h1>Test Text</h1>
            <TodoForm onSubmit={addTask} />
            <Todo 
                todos={todos} 
                completeTodo={completeTodo} 
                removeTodo={removeTodo}
                updateTodo={updateTodo}
                 />
        </div>
    )


}

export default TodoList