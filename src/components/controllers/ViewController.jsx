import React from "react";
import PropTypes from "prop-types";
import { Input, Label } from "reactstrap";

const ViewController = ({ view, viewChangeHandler }) => {
  return (
    <div className="d-flex">
      <Label for="list-view" className="me-4">
        <Input
          className="me-2"
          type="radio"
          id="list-view"
          name="list"
          value="list"
          onChange={viewChangeHandler}
          checked={view === "list"}
        />
        List View
      </Label>
      <Label for="table-view" className="me-4">
        <Input
          className="me-2"
          type="radio"
          id="table-view"
          name="table"
          value="table"
          onChange={viewChangeHandler}
          checked={view === "table"}
        />
        Table View
      </Label>
    </div>
  );
};

ViewController.propTypes = {
  view: PropTypes.string.isRequired,
  viewChangeHandler: PropTypes.func.isRequired,
};

export default ViewController;
