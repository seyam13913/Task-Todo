import React, { Component } from "react";
import shortid from "shortid";
import Controller from "../controllers/Controller";
import CreateTodo from "../create-todo-form/CreateTodo";
import ListView from "../listView/ListView";
import TableView from "../tableView/TableView";

export default class Todos extends Component {
  state = {
    todos: [
      {
        id: "r2r222r3r",
        text: "wsdfjfjoss f ffwofjofj",
        description: "fsfjljsl fowrj sfjcn sknowf",
        time: new Date(),
        isSelect: false,
        isComplete: false,
      },
      {
        id: "r2ere22r3r",
        text: "wsdfjfjoss f ffwofjofj",
        description: "fsfjljsl fowrj sfjcn sknowf",
        time: new Date(),
        isSelect: false,
        isComplete: false,
      },
    ],
    searchTram: "",
    isOpenTodoForm: false,
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((todo) => todo.id === todoId);
    todo.isSelect = !todo.isSelect;
    this.setState({ todos });
  };

  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((todo) => todo.id === todoId);
    todo.isComplete = !todo.isComplete;
    this.setState({ todos });
  };

  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };
  taskSearchHandler = () => {};

  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isSelect = false;
    todo.isComplete = false;

    const todos = [todo, ...this.state.todos];
    this.setState({
      todos: todos,
    });
    this.toggleForm();
  };

  render() {
    return (
      <>
        <div className=" text-center mb-5">
          <h2>Hello World</h2>
          <Controller
            tram={this.state.searchTram}
            toggleForm={this.toggleForm}
            taskSearchHandler={this.taskSearchHandler}
          />
          <div>
            <ListView
              todos={this.state.todos}
              toggleSelect={this.toggleSelect}
              toggleComplete={this.toggleComplete}
            />
          </div>
          <div>
            <TableView
              todos={this.state.todos}
              toggleSelect={this.toggleSelect}
              toggleComplete={this.toggleComplete}
            />
          </div>
        </div>
        <CreateTodo
          createTodo={this.createTodo}
          modalOpen={this.state.isOpenTodoForm}
        />
      </>
    );
  }
}
