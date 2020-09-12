import React from 'react'
import "./TodoItem.css"

function TodoItem(props) {
    const { todo, index, completeTodo, removeTodo } = props
    return (
        <div className={`todo ${todo.isCompleted ? 
        "complete" : ""}`}>{todo.text}
            <div>
                <button class="button" onClick={() => completeTodo(index)}>✓</button>
                <button class="button" onClick={() => removeTodo(index)}>X</button>
            </div>
        </div>
    )
}

export default TodoItem
