// /frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Login from './components/Login'; // Import Login component
import Signup from './components/Signup'; // Import Signup component
import Dashboard from './components/Dashboard'; // Import Dashboard (Placeholder)
import EventDetails from './components/EventDetails'; // Import Login component
import { Navbar } from 'react-bootstrap';


const App = () => {
  return (
    <div>
      <Navbar>
        <div className="App">
          <Routes>
            {/* Define routes for different pages */}
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/EventDetails" element={<EventDetails />} />
          </Routes>
        </div>
      </Navbar>
    </div>
  );
};

export default App;
