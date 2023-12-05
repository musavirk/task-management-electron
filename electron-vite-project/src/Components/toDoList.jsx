import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Col } from "react-bootstrap";
import { Pen, Trash } from "react-bootstrap-icons";
import "../App.css";
import ToDoForm from "./toDoForm";

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      await axios
        .get("http://localhost:5000/v1/tasks")
        .then((data) => setTasks(data.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreate = async (newTask) => {
    await axios.post("http://localhost:5000/v1/tasks", {
      heading: newTask,
    });
    fetchData();
  };

  const handleDelete = async (id) => {
    if (id) {
      console.log(id);
      await axios.delete(`http://localhost:5000/v1/tasks/${id}`);
      fetchData();
    } else {
      console.log("id is undefined");
    }
  };

  const handleEdit = async (id) => {
    await axios.put(`http://localhost:2001/api/items/${id}`, {
      completed: true,
    });
    fetchData();
  };
  return (
    <>
      <div>
        <ToDoForm handleCreate={handleCreate} />
        <div>
          {tasks.map((task) => {
            return (
              <div className="main">
                <div className="heading">{task.heading}</div>
                <div>
                  <>
                    <Button onClick={() => handleEdit(task._id)}>
                      <Pen />
                    </Button>
                  </>
                  <>
                    <Button onClick={() => handleDelete(task._id)}>
                      <Trash />
                    </Button>
                  </>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ToDoList;
