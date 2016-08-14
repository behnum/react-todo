import React from 'react';
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
        <TodosList todos={this.state.todos}/>
      </div>
    );
  }
}