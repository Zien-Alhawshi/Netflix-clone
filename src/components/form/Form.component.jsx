
import "./Form.styes.scss"
import { useState } from "react"
import { Link } from "react-router-dom"
export const Form = ()=>{
    const [error, setError] = useState('')
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const handleSignin = (event)=>{
        event.preventDefault()
    }
    return(
        <>
            <div className="container-formz">
                <h1 className="form-title">Sign In</h1>
                {error && <div className="form-error">{error}</div>}
                <form action="" className="form-base" onSubmit={handleSignin}>
                    <input
                     placeholder="Email address"
                      type=""
                       className="form-input"
                       value={emailAddress}
                       onChange = {({target})=> setEmailAddress(target.value)} />

                    <input
                     placeholder="Password"
                      type=""
                       className="form-input"
                       value={password}
                       onChange = {({target})=> setPassword(target.value)} />
                       <button  disabled={false} className="btn-submit" type="submit"> Sign In</button>
                       <h1 className="form-text">  New to Netflix? <Link className="form-link" to="/signup">Sign up now!</Link> </h1>
                       <h2 className="form-textSmall">This page is protected by Google reCAPTCHA.</h2>
                </form>
            </div>
        </>
    )
}