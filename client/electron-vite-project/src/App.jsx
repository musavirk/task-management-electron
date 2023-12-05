import "./App.css";
import ToDoList from "./Components/toDoList";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <ToDoList />
      </Container>
    </>
  );
}

export default App;
