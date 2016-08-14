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
  render() {
    return (
      <div>
        <h1>React Todo</h1>
        <TodosList />
      </div>
    );
  }
}