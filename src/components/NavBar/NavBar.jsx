import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav className="navbar">
            <ul>
                {user && user.name}
                &nbsp;
                <Link to="/">Home</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/signup">Membership</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/orders/new">Events</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/orders">Scholarships</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => setUser(null)}>Log Out</button>
            </ul>
        </nav>
    )
}