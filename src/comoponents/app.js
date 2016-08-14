import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './Todos-list';

const todos = [
{
  task: 'Create an app',
  isCompleted: false
},
{
  task: 'Eat Cake',
  isCompleted: true
}
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    }
  }

  render() {
    return (
      <div>
        <h1>React Todo</h1>
        <CreateTodo createTask={this.createTask.bind(this)} />
        <TodosList
          todos={this.state.todos}
        />
      </div>
    );
  }

  createTask(task) {
    this.state.todos.push({
      task,
      inCompleted: false
    });

    this.setState({ todos: this.state.todos });
  }
}