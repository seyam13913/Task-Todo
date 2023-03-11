import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "reactstrap";

const BulkController = ({ clearSelect, clearComplete, reset }) => {
  return (
    <ButtonGroup>
      <Button color="danger" onClick={clearSelect}>
        Clear Select
      </Button>
      <Button color="danger" onClick={clearComplete}>
        Clear Complete
      </Button>
      <Button color="danger" onClick={reset}>
        Reset
      </Button>
    </ButtonGroup>
  );
};

BulkController.propTypes = {
  clearSelect: PropTypes.func.isRequired,
  clearComplete: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default BulkController;
