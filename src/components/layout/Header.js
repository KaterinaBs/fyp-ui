import { Link } from 'react-router-dom';

import './Header.css';
function Header() {
    //Properties------------------------------
    //Hooks-----------------------------------
    //Context---------------------------------
    //Methods---------------------------------
    //View------------------------------------
    return (
        <div className="background-image">
        <header>
            <Link to= "/"> 
                <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/344/external-owl-animals-dreamstale-lineal-dreamstale-1.png" alt = "Book Icon" size=''/> 
            </Link>
            
            <Link to = "/">
                <h1> Homework App</h1>
            </Link>
            <div className = "login">
            <p>Hello user</p>
            </div>
        </header> 
        </div>
    )
}

export default Header;