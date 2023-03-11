import React from "react";
import PropTypes from "prop-types";
import SearchPanel from "./SearchPanel";
import { Col, Row } from "reactstrap";
import FilterController from "./FilterController";
import ViewController from "./ViewController";
import BulkController from "./BulkController";

const Controller = ({
  tram,
  view,
  taskSearchHandler,
  toggleForm,
  taskFilterHandler,
  viewChangeHandler,
  clearSelect,
  clearComplete,
  reset,
}) => {
  return (
    <div>
      <SearchPanel
        tram={tram}
        taskSearchHandler={taskSearchHandler}
        toggleForm={toggleForm}
      />
      <Row className="my-4">
        <Col md={{ size: 4 }} className="me-auto">
          <FilterController taskFilterHandler={taskFilterHandler} />
        </Col>
        <Col md={{ size: 4 }}>
          <ViewController view={view} viewChangeHandler={viewChangeHandler} />
        </Col>
        <Col md={{ size: 4 }} className="d-flex justify-content-between">
          <div className="ms-auto">
            <BulkController
              clearSelect={clearSelect}
              clearComplete={clearComplete}
              reset={reset}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

Controller.propTypes = {
  tram: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  taskSearchHandler: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  taskFilterHandler: PropTypes.func.isRequired,
  viewChangeHandler: PropTypes.func.isRequired,
  clearSelect: PropTypes.func.isRequired,
  clearComplete: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Controller;
