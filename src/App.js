import React from "react";
import { DisplayProvider } from "./DisplayContext";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <DisplayProvider>
        <Header />
        <Dashboard />
      </DisplayProvider>
    </React.Fragment>
  );
}

export default App;
