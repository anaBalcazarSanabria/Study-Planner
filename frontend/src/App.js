import React, { Component } from "react";
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <h1>Study Planner</h1>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tasklist">TaskList</Link>
              </li>
              <li>
                <Link to="/addtask">AddTask</Link>
              </li>
            </ul>
          </nav>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasklist" element={<TaskList />} />
              <Route path="/addtask" element={<AddTask />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;