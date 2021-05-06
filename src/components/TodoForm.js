
import React from 'react';
class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: ""
        };
    }
    handleChange = event => {
        this.setState({
            ...this.state,
            newTask: event.target.value
        });
    }
    handleSubmit = (event) => {
        
        this.props.addTask(event, this.state.newTask);
        this.setState({
            newTask: ""
        });
    }
    render() {
        return (
            <fieldset>
                <legend>
                    <h2>
                        New Task
                    </h2>
                </legend>

                <input
                    placeholder="Enter Task"
                    value={this.state.newTask}
                    onChange={this.handleChange}
                    name="newTask"
                    type="text" />
                <button onClick={this.handleSubmit}>Add Additional Task</button>
            </fieldset>
        )
    };
}
export default TodoForm;