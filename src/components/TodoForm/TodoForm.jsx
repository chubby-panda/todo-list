import React, { useState } from 'react';


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
                type="text" 
                placeholder="Add to list..."
                onChange={(event) => setValue(event.target.value)}
            />
        </form>
    )
}

export default TodoForm;