
import "./Form.styes.scss"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {signInWithGooglePopup,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword} from "../../context/firebase"
import { InputEle,
     FormTitle,
     ErrorEle,
     SubmitBtn,
     FormText,
     SmallFormText } from "./Form-elements/formElements"
export const SignInForm = ()=>{
    const navigate =useNavigate()
    const [error, setError] = useState('')
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const isInvalid= password===""|| emailAddress===""
    const resetForm = ()=>{
        setEmailAddress('');
        setPassword('');
        setError('');
        navigate("/browse");
    }
    const handleSignin =async (event)=>{
        event.preventDefault()
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(emailAddress, password)
         }
         catch(error){
             switch (error.code) {
                 case 'auth/wrong-password':
                   alert('incorrect password for email');
                   break;
                 case 'auth/user-not-found':
                   alert('no user associated with this email');
                   break;
                 default:
                   console.log(error);
               }
 
         }
         resetForm()
    }
    const logGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }
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
                        <button className="btn-submit" onClick={logGoogleUser}>Sign In with google</button>

                        <FormText content="New to Netflix?" to="/signup" linkContent="Sign up now!" />
                        <SmallFormText content="This page is protected by Google reCAPTCHA." />
                </form>

            </div>
        </>
    )
}