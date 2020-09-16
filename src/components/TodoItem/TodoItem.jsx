import React from 'react'
import "./TodoItem.css"

function TodoItem(props) {
    const { todo, index, completeTodo, removeTodo } = props
    return (
        <div className={`todo ${todo.isCompleted ? 
        "complete" : ""}`}>{todo.text}
            <div>
                <button className="button" onClick={() => completeTodo(index)}>{todo.isCompleted ? "Undo" : "Done"}</button>
                <button className="button" onClick={() => removeTodo(index)}>X</button>
            </div>
        </div>
    )
}

export default TodoItem
