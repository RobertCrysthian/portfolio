import "./Header.css"
import { Link } from 'react-router-dom'



export default function Header(){
    return(
        <header className="header">
            <div className="div_buttons">
                <Link to="/">Home</Link>
                <a>About Me</a>
                <a>Contact</a>
                <a>My projects</a>
            </div>
        </header>
    )
}