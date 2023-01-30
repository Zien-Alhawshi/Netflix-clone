import "./Profile.styles.scss"
import { Link } from "react-router-dom"
export const Profile = ({ user, setProfile })=>{
    console.log(user.photoURL)
    return(
        <>
        <Link to="/"><img className="logo" src="/images/misc/logo.svg"alt="Netflix"/> </Link>
        <div className="profile">
            <h1 className="profile-title">
                Who's watching?
            </h1>
            <ul className="profile-list">
                <li className="profile-user" onClick={() => setProfile({
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        })}>
                    <img  alt="" className="profile-picture" src={user.photoURL ? `/images/users/${user.photoURL}.png` :
                        '/images/misc/loading.gif'} />
                    <p className="profile-name">{user.displayName}</p>
                </li>
            </ul>
        </div>
        </>
    )
}