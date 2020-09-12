import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';


function App() {
    // variables
    const [todos, setTodos] = React.useState([
        'Finish plus project', 
        'Go grocery shopping',
        'Bake carrot cake', 
        'Exercise',
    ])

    const addTodo = (text) => {
        const newTodos = [...todos, text];
        setTodos(newTodos);
    };

    // template
    return (
        <div>
            <h1>To do list</h1>
            {todos.map((todo, index) => (
                <TodoItem todo={todo} key={index} />
            ))}
            <TodoForm addTodo={addTodo} />
        </div>
    );
}

export default App;