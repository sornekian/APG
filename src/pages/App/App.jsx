import './App.css';
import './footer.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { events } from "../../data.js";
import NavBar from '../../components/NavBar/NavBar';
import Home from '../Home/Home';
import AuthPage from '../AuthPage/AuthPage';
import EventsPage from '../EventsPage/EventsPage';
import EventsDetailPage from "../EventsDetailPage/EventsDetailPage";
import LoginForm from '../../components/LoginForm/LoginForm';
import Scholarships from '../Scholarships/Scholarships';
import NewsList from '../../components/NewList/NewList';
import JobBoard from '../JobBoard/JobBoard';

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<EventsPage events={events} />} />
              <Route path="/events/:eventName" element={<EventsDetailPage events={events} />} />
              <Route path="/news" element={<NewsList />} />
              <Route path="/jobs" element={<JobBoard />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </>
          :
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/scholarships" element={<Scholarships />} />
              <Route path="/signup" element={<AuthPage setUser={setUser} />} />
              <Route path="/login" element={<LoginForm setUser={setUser} />} />
            </Routes>
          </>
        // :
        // <AuthPage setUser={setUser} />
      }

      <footer>APG 2020, SarvHye LLC</footer>
    </main>
  );
}
