import { Col, Container, Row } from "reactstrap";
import "./App.css";
import Todos from "./components/todos/Todos";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Todos />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
