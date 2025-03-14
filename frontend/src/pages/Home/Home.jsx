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
  const { userDetails, setUserDetails } = useAuth();
  const [fetchList, setFetchList] = useState([]);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    getUserInfo();
    getTaskList();
  }, []);

  const getUserInfo = async () => {
    const response = await fetchUserDetails();
    setUserDetails((prev) => ({ ...prev, name: response }));
  };

  const getTaskList = async () => {
    const response = await fetchTaskList();
    setFetchList(response);
  };
  return (
    <div style={{ width: "100%", height: "100dvh" }}>
      <Header name={userDetails.name} setEditData={setEditData} />
      <TaskInput reloadList={getTaskList} editData={editData} />
      <TaskList
        reloadList={getTaskList}
        TaskListFetch={fetchList}
        editProps={setEditData}
      />
    </div>
  );
};

export default Home;
