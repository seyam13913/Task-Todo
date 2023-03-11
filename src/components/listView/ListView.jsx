import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "reactstrap";
import ListItem from "./ListItem";

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          toggleSelect={toggleSelect}
          toggleComplete={toggleComplete}
        />
      ))}
    </ListGroup>
  );
};

ListView.propTypes = {
  todos: PropTypes.array.isRequired,
  isSelect: PropTypes.func.isRequired,
  isComplete: PropTypes.func.isRequired,
};

export default ListView;
