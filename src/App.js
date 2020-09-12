import React, { useState } from 'react'
import TodoItem from './components/TodoItem/TodoItem'
import TodoForm from './components/TodoForm/TodoForm'
import "./App.css"

function App() {
    // variables
    const [todos, setTodos] = React.useState([
        { text: 'Finish plus project', isCompleted: false }, 
        { text: 'Go grocery shopping', isCompleted: false },
        { text: 'Bake carrot cake', isCompleted: false }, 
        { text: 'Exercise', isCompleted: false },
    ])

    // methods
    const addTodo = (text) => {
        const newTodos = [...todos, { text }]
        setTodos(newTodos)
    }

    const completeTodo = (index) => {
        const newTodos = [...todos]
        newTodos[index].isCompleted = true
        setTodos(newTodos)
    }

    const removeTodo = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    // template
    return (
        <div className="app">
            <div className="todo-list">
                <h1>To do list</h1>
                {todos.map((todo, index) => (
                    <TodoItem 
                        todo={todo} 
                        key={index} 
                        index={index} 
                        completeTodo={completeTodo} 
                        removeTodo={removeTodo}
                    />
                ))}
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    );
}

export default App