import "./BrowserContainer.styles.scss"
import { useState, useEffect } from "react"
import { Footer } from "../footer/Footer.component"
import { Profile } from "../Profile/Profile.component"
import { BrowseTransferring } from "./BrowseTransferring.component"
import { Loading } from "../Loading/Loading.component"
import { addCollectionAndDocuments } from "../../context/firebase"
import SERIES_DATA from "../../Series"
import FILMS_DATA from "../../Films"
export const BrowserContainer =()=>{
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
//     useEffect(()=>{
//     addCollectionAndDocuments("films",FILMS_DATA )
// },[])
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