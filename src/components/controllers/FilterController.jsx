import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "reactstrap";

const FilterController = ({ allTask, runningTask, completedTask }) => {
  return (
    <ButtonGroup>
      <Button onClick={() => allTask("all")}>All</Button>
      <Button onClick={() => runningTask("running")}>Running</Button>
      <Button onClick={() => completedTask("complete")}>Completed</Button>
    </ButtonGroup>
  );
};

FilterController.propTypes = {};

export default FilterController;
