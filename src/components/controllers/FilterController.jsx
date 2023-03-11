import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "reactstrap";

const FilterController = ({ taskFilterHandler }) => {
  return (
    <ButtonGroup>
      <Button onClick={() => taskFilterHandler("All")}>All</Button>
      <Button onClick={() => taskFilterHandler("running")}>Running</Button>
      <Button onClick={() => taskFilterHandler("complete")}>Completed</Button>
    </ButtonGroup>
  );
};

FilterController.propTypes = {
  taskFilterHandler: PropTypes.func.isRequired,
};

export default FilterController;
