import React from "react";
import PropTypes from "prop-types";
import SearchPanel from "./SearchPanel";

const Controller = ({ tram, taskSearchHandler, toggleForm }) => {
  return (
    <div>
      <SearchPanel
        tram={tram}
        taskSearchHandler={taskSearchHandler}
        toggleForm={toggleForm}
      />
    </div>
  );
};

Controller.propTypes = {
  tram: PropTypes.string.isRequired,
  taskSearchHandler: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default Controller;
