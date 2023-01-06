import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import './NavBar.css';
import './Header.css';


function Header() {

    //Properties------------------------------
    //Hooks-----------------------------------
    //Context---------------------------------
    //Methods---------------------------------
    //View------------------------------------
    return (
        
        <header>
            <ul>
                <li><NavLink to='/' className='active'> My Modules </NavLink></li>
                <li><Link>Announcements</Link></li>
                <li><NavLink to='/myaccount'> My Account </NavLink></li>
                <li><Link className="logout"> Log Out </Link></li>

            </ul>
            <div>
            <Link to='/'  className='logo'> <h1>HomeworkApp </h1></Link>
            </div>
        </header>
       

    )
}

export default Header;