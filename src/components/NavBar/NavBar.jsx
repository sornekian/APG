import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';
import LogoAPG from '../../assets/images/logo_small.png'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav className="navbar">
            <ul>
                &nbsp;&nbsp;&nbsp;
                Greetings, {user.name}
                &nbsp;
                <Link className='logo' to='/'>
                    <img src={LogoAPG} alt="logo" /></Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/events">Events</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/scholarships">Scholarships</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/donate">Donations</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/jobboard">Job Board</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/signup">Become a Member</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/login">Member Login</Link>
                <button onClick={() => setUser(null)}>Log Out</button>
            </ul>
        </nav>
    )
}