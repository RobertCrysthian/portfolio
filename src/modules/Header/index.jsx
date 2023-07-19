import logo from './logo.png'
import "./Header.css"


export default function Header(){
    return(
        <header className="header">
            <img src={logo} alt="Page's Icon"/>
            <div className="div_buttons">
                <a>Home</a>
                <a>About Me</a>
                <a>Contact</a>
                <a>My projects</a>
            </div>
        </header>
    )
}