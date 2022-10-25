import './Header.css';
function Header() {
    //Properties------------------------------
    //Hooks-----------------------------------
    //Context---------------------------------
    //Methods---------------------------------
    //View------------------------------------
    return (
        <header>
            <a> 
                <img scr="https://img.icons8.com/ios/50/000000/storytelling.png" alt = "Book Icon"/> 
            </a>
            <a>
                <h1> Homework App</h1>
            </a>
            <div className = "login">
            <p>Hello user</p>
            </div>
        </header> 
    )
}

export default Header;