import "../styles/TaskList.css";
import React from "react";
import EmptyImg from "../assets/EmptyImg.svg";
const TaskList = () => {
  let taskList = [
    {
      taskName: "Tamil exam",
      dueDate: "29/12/2004",
      description: "Prepare for Tamil exam chapters 1 to 5",
      id: "34333",
    },
    {
      taskName: "Math exam",
      dueDate: "30/12/2004",
      description: "Revise algebra and geometry topics",
      id: "34334",
    },
    {
      taskName: "Science project",
      dueDate: "01/01/2005",
      description: "Complete the working model for biology",
      id: "34335",
    },
    {
      taskName: "Tamil exam",
      dueDate: "29/12/2004",
      description: "Prepare for Tamil exam chapters 1 to 5",
      id: "34333",
    },
    {
      taskName: "Math exam",
      dueDate: "30/12/2004",
      description: "Revise algebra and geometry topics",
      id: "34334",
    },
    {
      taskName: "Science project",
      dueDate: "01/01/2005",
      description: "Complete the working model for biology",
      id: "34335",
    },
  ];
  taskList = [];
  const getListed = () => {
    return taskList.length > 0 ? (
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Task Name</th>
            <th>Due Date</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((task) => (
            <tr key={task.id}>
              <td>{task.taskName}</td>
              <td>{task.dueDate}</td>
              <td>{task.description}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <img
        src={EmptyImg}
        alt="emptyImg"
        style={{ height: "75dvh", position: "relative", top: 0, left: "25%" }}
      />
    );
  };

  return (
    <div className="task-list-container">
      {/* <h2 className="text-center">Task List</h2> */}
      <div className={"task-list-scroll"}>{getListed()}</div>
    </div>
  );
};

export default TaskList;
