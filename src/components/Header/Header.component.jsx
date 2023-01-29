import { Link } from "react-router-dom"
import "./Header.styles.scss"
import { OptForm } from "../opt-form/OptForm.component"
import { Feature } from "../Feature/Feature.component"
import { Navbar } from "../Navbar/Navbar.component"
export const Header = ()=>{
    return(
           <>
           <div className="header-parent">
              <Navbar />
                <Feature />
                <OptForm className="feature"/>
           </div>
            </>
           
       
    )
}
