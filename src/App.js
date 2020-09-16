import React, { useState } from 'react'
import TodoItem from './components/TodoItem/TodoItem'
import TodoForm from './components/TodoForm/TodoForm'
import "./App.css"


function App() {
    // variables
    const [todos, setTodos] = React.useState([
        { text: 'Clean kitchen', isCompleted: false }
    ])

    // methods
    const addTodo = (text) => {
        const newTodos = [...todos, { text }]
        setTodos(newTodos)
    }

    const completeTodo = (index) => {
        const newTodos = [...todos]
        if (newTodos[index].isCompleted) {
            newTodos[index].isCompleted = false
        } else {
            newTodos[index].isCompleted = true
        }
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