import React from 'react';
import './App.css';
import {SideBar} from "./components/SideBar";
import {TasksBar} from "./components/TasksBar";

function App() {
  return (
    <div className="App container">
        <SideBar/>
        <TasksBar/>
    </div>
  );
}

export default App;
