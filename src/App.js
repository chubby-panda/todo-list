import React from 'react';
import TodoItem from './components/TodoItem';


function App() {
    return (
        <div>
            <h1>My To-Do List</h1>
            <TodoItem todo="Finish plus project"/>
            <TodoItem todo="Grocery shopping"/>
            <TodoItem todo="Bake carrot cake"/>
            <TodoItem todo="Exercise"/>
        </div>
    );
}

export default App;