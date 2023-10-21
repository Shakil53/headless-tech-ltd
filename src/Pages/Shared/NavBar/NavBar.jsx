import { Link } from "react-router-dom";
import './NavBar.css'
import logo from "../../../assets/images/headless-logo.png"


const NavBar = () => {
    return (
        <>

            <nav className="navContainer">
                <ul className="navItem">
                    <img className="navLogo" src={logo}></img>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='brief'>Brief Task</Link></li>
                    <li><Link to='about'>About</Link></li>
                    <li><Link to='login'>Login</Link></li>
                    <li><Link to='register'>Register</Link></li>
                </ul>

            </nav >

        </>
    );
};

export default NavBar;