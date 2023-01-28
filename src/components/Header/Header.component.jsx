import { Link } from "react-router-dom"
import "./Header.styles.scss"
import { OptForm } from "../opt-form/OptForm.component"
import { Feature } from "../Feature/Feature.component"
export const Header = ()=>{
    return(
           <>
           <div className="header-parent">
                <div className="frame">
                    <Link  to="/">
                        <img src="../images/misc/logo.svg" alt="Netflix" className="logo" />
                    </Link>
                
                    <Link   to="/signin">
                        <button className="btn-link">Sign in</button>
                    </Link>
                </div>
                <Feature />
                <OptForm className="feature"/>
           </div>
            </>
           
       
    )
}
