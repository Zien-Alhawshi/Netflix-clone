


import "./Form.styes.scss"
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from "../../context/firebase"


import { InputEle,
    FormTitle,
    ErrorEle,
    SubmitBtn,
    FormText,
    SmallFormText } from "./Form-elements/formElements"
export const SignUpForm  = ()=>{
    const navigate  =  useNavigate()
    const [displayName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = displayName === '' || password === '' || emailAddress === '';
    const resetForm = ()=>{
        setEmailAddress('');
        setPassword('');
        setError('');
        navigate("/browse");
    }
    const handleSignup = async (event) => {
        event.preventDefault();
        try{
            const  {user}= await createAuthUserWithEmailAndPassword(
                emailAddress,
                password
              );
              console.log(user)            
              await createUserDocumentFromAuth(user, {displayName})
           
        }
        catch(error){
            console.log(error)
            

        }
        resetForm()
    
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
                       value={displayName}
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