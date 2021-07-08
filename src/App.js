import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
      super();
      this.state = {
        todos: [
          {
            task: 'Make Breakfast',
            id: 1,
            completed: false,
          },
          {
            task: 'Do Laundey',
            id: 2,
            completed: false,
          },
          {
            task: 'Grocery Shopping',
            id: 3,
            completed: false,
          },
          {
            task: 'Make Lunch',
            id: 4,
            completed: false,
          },
          {
            task: 'Clean Out Garage',
            id: 5,
            completed: false,
          },
        ]
      }
    }
 

addItem = (taskName) => {
  const newTodo = {
    task: taskName,
    id: new Date(),
    completed: false,
  };
  this.setState({
    todos: [...this.state.todos, newTodo],
  })
}

toggleItem = (id) => {
  this.setState({
    todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo, completed: !todo.completed
        }
      } 
      else {
        return todo
      }
    })
  })
}

clearCompleted = event => {
  event.preventDefault();
  this.setState({
    todos: this.state.todos.filter(todo => !todo.completed) 
  })
}

render() {
    return (
      <div>
          <h2>Chores</h2>
          <TodoList todos = {this.state.todos} toggleItem = {this.toggleItem} />
          <TodoForm addItem = {this.addItem} />
          <button onClick = {this.clearCompleted}> Finished </button>
      </div>
    )
}
}

export default App;
