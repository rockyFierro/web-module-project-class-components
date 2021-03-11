import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <fieldset>
            {console.log("src>comp>todolist>",props)}
            <legend><h3>Things you haven't done yet</h3></legend>
            {props.tasks.map(
                todo => {
                    localStorage.getItem('Current state:', todo)
                    return <Todo key={todo.id} id={todo.id} finished={todo.finished} task={todo.task} markFinished={props.markFinished}/>
                }
                )}
                <button onClick={props.clearFinished}>Clear Finished</button>
        </fieldset>
    )
}
export default TodoList;