import React from "react";
import PropTypes from "prop-types";
import { Table } from "reactstrap";
import RowItem from "./RowItem";

const TableView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Time</th>
          <th>Todo</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <RowItem
            key={todo.id}
            todo={todo}
            toggleSelect={toggleSelect}
            toggleComplete={toggleComplete}
          />
        ))}
      </tbody>
    </Table>
  );
};

TableView.propTypes = {
  todos: PropTypes.array.isRequired,
  isSelect: PropTypes.func.isRequired,
  isComplete: PropTypes.func.isRequired,
};

export default TableView;
