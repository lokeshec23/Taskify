import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  fetchUserDetails,
  fetchTaskList,
} from "../../services/Home/getUserDetails";
import Header from "../../components/Header";
import TaskInput from "../../components/TaskInput";
import TaskList from "../../components/TaskList";

const Home = () => {
  const {
    user,
    theme,
    toggleTheme,
    logout,
    userDetails,
    setUserDetails,
    TaskListFetch,
    setTaskListFetch,
  } = useAuth();
  const [fetchList, setFetchList] = useState([]);
  useEffect(() => {
    getUserInfo();
    getTaskList();
  }, []);

  const getUserInfo = async () => {
    const response = await fetchUserDetails();
    setUserDetails((prev) => ({ ...prev, name: response }));
  };

  const getTaskList = async () => {
    debugger;
    const response = await fetchTaskList();
    setFetchList(response);
  };
  return (
    <div style={{ width: "100%", height: "100dvh" }}>
      <Header name={userDetails.name} />
      <TaskInput reloadList={getTaskList} />
      <TaskList TaskListFetch={fetchList} />
    </div>
  );
};

export default Home;
