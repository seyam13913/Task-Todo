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
        text: "good f ffwofjofj",
        description: "fsfjljsl fowrj sfjcn sknowf",
        time: new Date(),
        isSelect: false,
        isComplete: false,
      },
    ],
    searchTram: "",
    isOpenTodoForm: false,
    view: "list",
    filter: "All",
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

  taskSearchHandler = (value) => {
    this.setState({
      searchTram: value,
    });
  };

  searchTodos = () => {
    return this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.searchTram.toLowerCase())
    );
  };

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

  viewChangeHandler = (e) => {
    this.setState({
      view: e.target.value,
    });
  };

  taskFilterHandler = (value) => {
    this.setState({ filter: value });
  };

  filterTodo = (todos) => {
    const { filter } = this.state;
    if (filter === "complete") {
      return todos.filter((todo) => todo.isComplete);
    } else if (filter === "running") {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };

  clearSelect = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelect);
    this.setState({
      todos,
    });
  };

  clearComplete = () => {
    const todos = this.state.todos.filter((todo) => !todo.isComplete);
    this.setState({
      todos,
    });
  };

  reset = () => {
    this.setState({
      searchTram: "",
      isOpenTodoForm: false,
      view: "list",
      filter: "All",
    });
  };

  render() {
    let todos = this.searchTodos();
    todos = this.filterTodo(todos);
    return (
      <>
        <div className="mb-5">
          <h2 className="text-center">Hello World</h2>
          <Controller
            tram={this.state.searchTram}
            toggleForm={this.toggleForm}
            taskSearchHandler={this.taskSearchHandler}
            view={this.state.view}
            viewChangeHandler={this.viewChangeHandler}
            taskFilterHandler={this.taskFilterHandler}
            clearSelect={this.clearSelect}
            clearComplete={this.clearComplete}
            reset={this.reset}
          />
          <div>
            {this.state.view === "list" ? (
              <ListView
                todos={todos}
                toggleSelect={this.toggleSelect}
                toggleComplete={this.toggleComplete}
              />
            ) : (
              <TableView
                todos={todos}
                toggleSelect={this.toggleSelect}
                toggleComplete={this.toggleComplete}
              />
            )}
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
