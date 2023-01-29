import React from "react"
import "./SignIn.styles.scss"
import { Navbar } from "../components/Navbar/Navbar.component"
import { Form } from "../components/form/Form.component"

export const  SignIn = ()=>{
return(
        <div className="framez">
            <Navbar />
            <Form />
        </div>
)
}