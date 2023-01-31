import "./BrowserContainer.styles.scss"
import { useState } from "react"
import { Footer } from "../footer/Footer.component"
import { Profile } from "../Profile/Profile.component"
import { BrowseTransferring } from "./BrowseTransferring.component"
export const BrowserContainer =()=>{
    const [category, setCategory] = useState('series');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const user = {
        displayName: "Karl",
        photoURL: "1"
    };
    return(
        <>
            {
                !profile.displayName?
                <>
                            <BrowseTransferring
                            category={category}
                            setCategory={setCategory}
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            user= {user}  />        
                            <Footer />
                    </>: 
                    <>
                        <Profile  user={user} setProfile={setProfile} />
                    </>
            }
        </>
    )
}