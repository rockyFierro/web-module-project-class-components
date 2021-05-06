import React from 'react';


const Todo = props => {
        return (
            <div
            className={ props.finished ? "complete" : "incomplete"}  
            onClick={()=>props.markFinished(props.id)}
            >
                {console.log("src>comp>todo>",props)}
                <legend>{props.task}</legend>
            </div>
        )
}

export default Todo;