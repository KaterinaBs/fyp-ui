import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
     //Properties------------------------------
    //Hooks-----------------------------------
    //Context---------------------------------
    //Methods---------------------------------

    const getLinkStyle = ({isActive})=> (isActive ? 'navSelected' : null);
    //View------------------------------------
    return (
        <nav>
            <div className = "navItem">
                <NavLink to='/' className={getLinkStyle}> My modules </NavLink>
            </div>
            <div className = 'navItem'>
                <NavLink to='/myaccount' className={getLinkStyle}> My Account </NavLink>
            </div>
            
        </nav>
    )
}

export default NavBar;
