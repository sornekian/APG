import './App.css';
import './footer.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import { events } from "../../data.js"
import NavBar from '../../components/NavBar/NavBar'
import Home from '../Home/Home';
import AuthPage from '../AuthPage/AuthPage';
import EventsPage from '../EventsPage/EventsPage';
import EventsDetailPage from "../EventsDetailPage/EventsDetailPage";
import LoginForm from '../../components/LoginForm/LoginForm';


export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<AuthPage setUser={setUser} />} />
            <Route path="/events" element={<EventsPage events={events} />} />
            <Route path="/events/:eventName" element={<EventsDetailPage events={events} />} />
            <Route path="/login" element={<LoginForm setUser={setUser} />} />
          </Routes>
        </>

      }
      <footer>APG 2020, SarvHye LLC</footer>
    </main>
  );
}

