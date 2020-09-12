import React, { useState } from 'react';
import TodoItem from './components/TodoItem';


function App() {
    // variables
    const [todos, setTodos] = React.useState([
        'Finish plus project', 
        'Go grocery shopping',
        'Bake carrot cake', 
        'Exercise',
    ])

    // template
    return (
        <div>
            <h1>My To-Do List</h1>
            {todos.map((todo, index) => (
                <TodoItem todo={todo} key={index} />
            ))}
        </div>
    );
}

export default App;