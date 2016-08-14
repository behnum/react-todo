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
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
        />
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);

    foundTodo.isCompleted = !foundTodo.isCompleted;

    // Refresh the app using setState
    this.setState({ todos: this.state.todos });
  }

  createTask(task) {
    this.state.todos.push({
      task,
      inCompleted: false
    });

    this.setState({ todos: this.state.todos });
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);

    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }
}