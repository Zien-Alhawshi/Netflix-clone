import "./BrowserContainer.styles.scss"
import { useState, useEffect } from "react"
import { Footer } from "../footer/Footer.component"
import { Profile } from "../Profile/Profile.component"
import { BrowseTransferring } from "./BrowseTransferring.component"
import { Loading } from "../Loading/Loading.component"
import { Films } from "../Content/Films.component"
import { Series } from "../Content/Series.component"

export const BrowserContainer =({films, series})=>{
    const [category, setCategory] = useState('series');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const user = {
        displayName: "Karl",
        photoURL: "1"
    };
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [user])
    return(
        <>
            {
                !profile.displayName?
                <>
                      {loading ? <Loading src={user.photoURL} /> :
                      <>
                            <BrowseTransferring
                                category={category}
                                setCategory={setCategory}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                user= {user}  />  
                                {category === "series"? <Series series={series}/>:category === "films"?<Films films={films} />:""}      
                                <Footer />
                      </>}
                            
                    </>: 
                    <>
                        <Profile  user={user} setProfile={setProfile} />
                    </>
            }
        </>
    )
}