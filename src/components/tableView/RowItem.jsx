import React from "react";
import PropTypes from "prop-types";
import { Button, Input } from "reactstrap";

const RowItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <tr>
      <td scope="row">
        <Input
          type="checkbox"
          id={todo.id}
          checked={todo.isSelect}
          onChange={() => toggleSelect(todo.id)}
        />
      </td>
      <td>
        <p>{todo.time.toDateString()}</p>
      </td>
      <td>
        <h4>{todo.text}</h4>
      </td>
      <td>
        <Button
          className="ml-auto"
          color={todo.isComplete ? "danger" : "success"}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.isComplete ? "Complete" : "Running"}
        </Button>
      </td>
    </tr>
  );
};

RowItem.propTypes = {
  todo: PropTypes.object.isRequired,
  isSelect: PropTypes.func.isRequired,
  isComplete: PropTypes.func.isRequired,
};

export default RowItem;
