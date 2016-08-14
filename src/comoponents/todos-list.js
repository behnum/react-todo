import _ from 'lodash';
import React from "react";
import TodosListHeader from "./todos-list-header";
import TodosListItem from "./todos-list-item.js";

export default class TodosList extends React.Component {
  renderItems() {
    // ~~~~ ES6 Way
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} />);

    // return _.map(this.props.todos, function(todo, index) {
    //  <TodosListItem key={index} {...todo} />);
    // } 
  }

  render() {
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
