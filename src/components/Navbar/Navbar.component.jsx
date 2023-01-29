import "./Navbar.styles.scss"
import { Link } from "react-router-dom"
export const Navbar = ()=>{
    return(
        <div className="frame">
            <Link  to="/">
                <img src="../images/misc/logo.svg" alt="Netflix" className="logo" />
            </Link>
        
            <Link   to="/signin">
                <button className="btn-link">Sign in</button>
            </Link>
        </div>
    )
}