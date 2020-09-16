import React, { useState } from 'react';
import './TodoForm.css'

function TodoForm(props) {
    // variables
    const { addTodo } = props;
    const [value, setValue] = React.useState('');

    // methods
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) {
            return;
        }
        addTodo(value);
        setValue('');
    };

    // template
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={value}
                className="input-box"
                type="text" 
                placeholder="Click to add something..."
                onChange={(event) => setValue(event.target.value)}
            />
        </form>
    )
}

export default TodoForm;