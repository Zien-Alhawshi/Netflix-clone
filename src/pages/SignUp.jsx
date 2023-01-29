
import { Navbar } from "../components/Navbar/Navbar.component"
import { Footer } from "../components/footer/Footer.component"
import { SignUpForm } from "../components/form/SignUpForm.component"
export const SignUp = ()=>{
    return(
        <>
        <div className="framez">
            <Navbar />
            <SignUpForm />
        </div>
        <Footer />
        </>
    )
}