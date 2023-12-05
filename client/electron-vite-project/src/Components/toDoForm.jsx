import { useState } from "react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";

// eslint-disable-next-line
function ToDoForm({ handleCreate }) {
  const [newTask, setNewTask] = useState("");

  const onCreate = (e) => {
    e.preventDefault();
    handleCreate(newTask);
    setNewTask("");
  };

  return (
    <div className="main">
      <Form onSubmit={onCreate}>
        <InputGroup>
          <FormControl
            onChange={(e) => setNewTask(e.target.value)}
            type="text"
            placeholder="new task"
            value={newTask}
          ></FormControl>
          <Button type="submit" variant="primary" disabled={!newTask.length}>
            <Plus />
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}

export default ToDoForm;
