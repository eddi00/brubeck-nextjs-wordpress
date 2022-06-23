import jwtDecode from "jwt-decode";
import React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { Layout } from "./Dashboard.styles";
import Resume from "./Resume/Resume.component";
import Settings from "./Settings/Settings.component";

const Dashboard = props => {
  const [activeTab, setActiveTab] = useState("resume");

  const render = tab => {
    switch (tab) {
      case "resume":
        return <Resume {...props} />;
      case "settings":
        return <Settings {...props} />;
    }
  };

  return (
    <Layout>
      {/* <h2>Dashboard</h2> */}
      <ul>
        <li onClick={() => setActiveTab("resume")}>Обзор</li>
        <li onClick={() => setActiveTab("settings")}>Настройки</li>
      </ul>
      {render(activeTab)}
    </Layout>
  );
};

export default Dashboard;
