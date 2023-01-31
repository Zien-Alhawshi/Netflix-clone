import "./BrowserContainer.styles.scss"
import { Link } from "react-router-dom"
import { SearchBox } from "../SearchBox/SearchBox.component"
import { UserDropDown } from "../UserDropDown/UserDropDown.component"
export const BrowseTransferring = ({searchTerm,setSearchTerm, category, setCategory, user})=>{
    return(
        <div className="browse-header">
        <div className="browser-navbar-header">
            <Link to="/"><img className="logo" src="/images/misc/logo.svg"alt="Netflix"/> </Link>
            <p className={category === 'series' ? 'active' : ''}
                    onClick={() => setCategory('series')}>
                    Series
            </p>
            <p className={category === 'films' ? 'active' : ''}
                    onClick={() => setCategory('films')}>
                    Films
            </p>
            <SearchBox className="location" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <UserDropDown user={user} />
        </div>
        <div className="browse-feature">
            <h2 className="browse-feature-callout">Watch Joker Now</h2>
            <p className="browse-feature-text">
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
            futile attempt to feel like he's part of the world around him.
            </p>
            <button className="playBtn">
                Play
            </button>
        </div>
    </div>       
    )
}