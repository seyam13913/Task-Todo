import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";

class CreateTodo extends Component {
  state = {
    text: "",
    description: "",
    isOpen: this.props.toggle,
  };

  taskChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  taskSubmitHandler = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state);
    this.setState({
      text: "",
      description: "",
    });
    e.target.reset();
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      isOpen: nextProps.modalOpen,
    });
  }

  render() {
    return (
      <Modal isOpen={this.state.isOpen}>
        <ModalHeader toggle={() => this.setState({ isOpen: false })}>
          <h5 style={{ color: "#f47437" }}>Create New Todo Item</h5>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={this.taskSubmitHandler}>
            <FormGroup>
              <Label>Enter Task</Label>
              <Input
                type="text"
                name="text"
                placeholder="Enter Your Task"
                value={this.state.text}
                onChange={this.taskChangeHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label>Enter Description</Label>
              <Input
                type="textarea"
                name="description"
                placeholder="Enter Your Task Desc"
                value={this.state.description}
                onChange={this.taskChangeHandler}
              />
            </FormGroup>
            <Button type="submit">Create Task</Button>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}

CreateTodo.propTypes = { createTodo: PropTypes.func.isRequired };

export default CreateTodo;
