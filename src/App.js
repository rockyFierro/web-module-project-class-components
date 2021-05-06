
import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';
class App extends React.Component {
  //took out the constructor and we're still in business!
  state = {
    todos: []
  }


  //method to handle the button, get's passed into the form to retrieve input
  addTask = (event, task) => {// addTask(arguments = the event it's attatched to and the text input taken)
    event.preventDefault();//since it's attatched onto the submit event; prevent refresh
    console.log("arf>app>todoform>addTask:", task); //check whats added
    const addTask = { //shape of the object that will be added to state array
      task: task,
      id: Date.now(),
      finished: false
    };
    //add data to local storage
    localStorage.setItem(String(addTask.id), JSON.stringify(addTask))

    this.setState({ //set the state 
      ...this.state,//copy previous state
      todos: [...this.state.todos, addTask]//copy previous todos state and add new object to the array
    })
  };//end 

  markFinished = (taskID) => {
    console.log("marking finished:", taskID);
    this.setState({
      ...this.state,
      todos: this.state.todos.map(
        (task) => {
          if (task.id === taskID) {
            localStorage.removeItem(String(task.id))
            return {
              ...task,
              finished: !task.finished
            };
          } else {
            return task;
          }
        }
      )
    })
  }

  clearFinished = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((task) =>{
        return !task.finished
        })
    });
    

  };

  render() {
    console.log(localStorage)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList tasks={this.state.todos}
          clearFinished={this.clearFinished}
          markFinished={this.markFinished} />
      </div>
    );
  }
}

export default App;
