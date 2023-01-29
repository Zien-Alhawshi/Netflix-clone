
import "./Form.styes.scss"
import { useState } from "react"
import { InputEle,
     FormTitle,
     ErrorEle,
     SubmitBtn,
     FormText,
     SmallFormText } from "./Form-elements/formElements"
export const SignInForm = ()=>{
    const [error, setError] = useState('')
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const isInvalid= password===""|| emailAddress===""
    const handleSignin = (event)=>{
        event.preventDefault()
    }
    console.log(emailAddress)
    return(
        <>
            <div className="container-formz">
                <FormTitle title="Sign In" />
                {error && <ErrorEle errorItem={error}/>}
                <form action="" className="form-base" onSubmit={handleSignin}>
                    <InputEle
                     placeholder="Email address"
                      type="text"
                        value={emailAddress}
                        change = {({target})=> setEmailAddress(target.value)}
                        />
                    <InputEle 
                      placeholder="Password"
                      type="password"
                      value={password}
                      change ={({target})=> setPassword(target.value)} />
                        <SubmitBtn validValue={isInvalid}  type="submit" content="Sign In" />
                        <FormText content="New to Netflix?" to="/signup" linkContent="Sign up now!" />
                        <SmallFormText content="This page is protected by Google reCAPTCHA." />
                </form>
            </div>
        </>
    )
}