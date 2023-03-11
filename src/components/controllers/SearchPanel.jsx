import React from "react";
import PropTypes from "prop-types";
import { Button, Input } from "reactstrap";

const SearchPanel = ({ tram, taskSearchHandler, toggleForm }) => {
  return (
    <div className="d-flex">
      <Input
        className="mx-3"
        placeholder="Enter Search tram"
        value={tram}
        onChange={(e) => taskSearchHandler(e.target.value)}
      />
      <Button color="success" onClick={toggleForm}>
        New
      </Button>
    </div>
  );
};

SearchPanel.propTypes = {
  tram: PropTypes.string.isRequired,
  taskSearchHandler: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default SearchPanel;
