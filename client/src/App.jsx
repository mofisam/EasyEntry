import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import CreateEvent from './components/CreateEvent';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import BookTickets from './components/BookTickets';
import ManageBookings from './components/ManageBookings';
import ManageEvents from './components/ManageEvents';
import Payment from './components/Payment';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/CreateEvent" element={<CreateEvent />} />
        <Route path="/EventList" element={<EventList />} />
        <Route path="/EventDetails" element={<EventDetails />} />
        <Route path="/BookTickets" element={<BookTickets />} />
        <Route path="/ManageBookings" element={<ManageBookings />} />
        <Route path="/Manage" element={<ManageEvents />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default App;
