import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { fetchUserDetails } from "../../services/Home/getUserDetails";
import Header from "../../components/Header";
import TaskInput from "../../components/TaskInput";
import TaskList from "../../components/TaskList";

const Home = () => {
  const { user, theme, toggleTheme, logout, userDetails, setUserDetails } =
    useAuth();

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await fetchUserDetails();
      setUserDetails((prev) => ({ ...prev, name: response }));
    };
    getUserInfo();
  }, []);

  return (
    <div style={{ width: "100%", height: "100dvh" }}>
      <Header name={userDetails.name} />
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Home;
