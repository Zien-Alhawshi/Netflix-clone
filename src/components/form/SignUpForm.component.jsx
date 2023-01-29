import "./Form.styes.scss"
import { useState } from "react";
import { InputEle,
    FormTitle,
    ErrorEle,
    SubmitBtn,
    FormText,
    SmallFormText } from "./Form-elements/formElements"
export const SignUpForm  = ()=>{
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = firstName === '' || password === '' || emailAddress === '';
    
    const handleSignup = (event) => {
        event.preventDefault();
    }
    return(
        <>
        <div className="container-formz">
               <FormTitle title="Sign Up" />
               {error && <ErrorEle errorItem={error}/>}
               <form action="" className="form-base" onSubmit={handleSignup}>
               <InputEle
                    placeholder="First Name"
                     type="text"
                       value={firstName}
                       change = {({target})=> setFirstName(target.value)}
                       />
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
                       change = {({target})=> setPassword(target.value)}
                       />
                       <SubmitBtn validValue={isInvalid}  type="submit" content="Sign Up" />
                       <FormText content="Already a user?" to="/signin" linkContent="Sign in now!" />
                       <SmallFormText content="This page is protected by Google reCAPTCHA." />


               </form>

       </div>
   </>
    )
}