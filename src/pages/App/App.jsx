import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import NavBar from '../../components/NavBar/NavBar'
import Home from '../Home/Home';
import AuthPage from '../AuthPage/AuthPage';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

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
            {/* <Route path="/orders/new" element={<NewOrderPage />} /> */}
            {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
          </Routes>
        </>

      }
    </main>
  );
}


