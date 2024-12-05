import React, { useState } from "react";
import AlertMessage from "../components/AlertMessage";
import "../styles/TaskInput.css"; // Import custom styling

const TaskInput = () => {
  const Initi_Task = { name: "", description: "", dueDate: "" };
  const Initi_Error = {
    name: {
      isError: false,
      message: "",
    },
    dueDate: {
      isError: false,
      message: "",
    },
  };
  const [task, setTask] = useState(Initi_Task);
  const [error, setError] = useState(Initi_Error);

  const handleTaskSubmit = () => {
    try {
      console.log("Task", task);
      debugger;
      if (!task.name) {
        setError((prev) => ({
          ...prev,
          name: {
            isError: true,
            message: "Task name should not be empty.",
          },
        }));
        return;
      } else if (!task.dueDate) {
        setError((prev) => ({
          ...prev,
          dueDate: {
            isError: true,
            message: "Due date should not be empty.",
          },
        }));
        return;
      }
    } catch (ex) {
      console.log("Error in submit", ex);
    }
  };

  const handleReset = () => {
    try {
      setTask(Initi_Task);
    } catch (ex) {
      console.log("error in reset", ex);
    }
  };

  const handleChange = (e) => {
    try {
      setError((prev) => ({
        ...prev,
        [e.target.name]: {
          isError: false,
          message: "",
        },
      }));
      setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    } catch (Ex) {
      console.log("Error in handleChange", Ex);
    }
  };

  return (
    <div className="task-input-container">
      <div className="task-input-box p-4 rounded shadow">
        <form>
          {/* Task Name and Due Date Row */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="taskName" className="form-label">
                Task Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="taskName"
                className="form-control"
                placeholder="Enter task name"
                name="name"
                value={task.name}
                onChange={handleChange}
              />
              {error?.name?.isError && (
                <AlertMessage
                  type="error"
                  message={error?.name?.message}
                  style={{ margin: 0 }}
                />
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="dueDate" className="form-label">
                Due Date<span className="text-danger">*</span>
              </label>
              <input
                type="date"
                id="dueDate"
                className="form-control"
                name="dueDate"
                value={task.dueDate}
                onChange={handleChange}
              />
              {error?.dueDate?.isError && (
                <AlertMessage
                  type="error"
                  message={error?.dueDate?.message}
                  style={{ margin: 0 }}
                />
              )}
            </div>
          </div>

          {/* Description and Buttons Row */}
          <div className="d-flex align-items-center gap-3 mb-3">
            <div className="flex-grow-1">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <input
                  type="text"
                  id="description"
                  className="form-control"
                  placeholder="Enter task description"
                  name="description"
                  value={task.description}
                  onChange={handleChange}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "10px",
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-primary mb-2 taskInput-add-btn"
                    onClick={handleTaskSubmit}
                  >
                    Add
                  </button>
                  <button
                    type="reset"
                    className="btn btn-secondary"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskInput;
