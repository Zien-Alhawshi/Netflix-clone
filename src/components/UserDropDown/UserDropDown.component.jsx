import "./UserDropDown.styles.scss"
import { SignOutUser } from "../../context/firebase"
export const UserDropDown = ({user})=>{
return(
    <div className="userDropDown">
        <img src={`/images/users/${user.photoURL}.png`} alt="" className="header-picture" />
        <div className="drop-down">
            <div className="group group-sec">
                <img src={`/images/users/${user.photoURL}.png`} alt="" className="header-picture" />
                <p className="header-link">
                    {user.displayName}
                </p>
            </div>
            <div className="group">
                <p className="header-link" onClick={SignOutUser}>
                    Sign Out
                </p>
            </div>

    </div>

</div>
)
}