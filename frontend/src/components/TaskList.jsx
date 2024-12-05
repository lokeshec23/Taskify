import "../styles/TaskList.css";
import React from "react";
import EmptyImg from "../assets/EmptyImg.svg";
import { useAuth } from "../context/AuthContext";

const TaskList = ({ TaskListFetch = [], editProps = () => {} }) => {
  // const { TaskListFetch, setTaskListFetch } = useAuth();
  const onClickEdit = (id) => {
    const res = TaskListFetch.filter((a) => a._id === id)[0];
    delete res.__V;
    delete res.id;
    delete res.createdAt;
    editProps(res);
  };

  const getListed = () => {
    return TaskListFetch?.length > 0 ? (
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
          {TaskListFetch?.map((task, index) => (
            <tr key={index}>
              <td>{task.taskName}</td>
              <td>{task.dueDate?.split("T")[0]}</td>
              <td>{task.description}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onClickEdit(task._id)}
                >
                  Edit
                </button>
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
