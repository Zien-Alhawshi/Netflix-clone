import React from "react"
import "./SignIn.styles.scss"
import { Navbar } from "../components/Navbar/Navbar.component"
import { SignInForm } from "../components/form/SignInForm.component"
import { Footer } from "../components/footer/Footer.component"
export const  SignIn = ()=>{
return(
       <>
        <div className="framez">
            <Navbar />
            <SignInForm />
        </div>
       <Footer />
       </>

)
}