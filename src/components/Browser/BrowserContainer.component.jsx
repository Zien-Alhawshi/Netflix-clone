import "./BrowserContainer.styles.scss"
import { useState } from "react"
import { Footer } from "../footer/Footer.component"
import { Profile } from "../Profile/Profile.component"
export const BrowserContainer =()=>{
    const [profile, setProfile] = useState({})
    const user = {
        displayName: "Karl",
        photoURL: "1"
    };
    
    return(
        <>
            {
                profile.displayName?
                    <>
                        <p>Browse Container</p>
                        <Footer />
                    </>:
                    <>
                        
                        <Profile  user={user} setProfile={setProfile} />
                    </>
            }
        </>
    )
}