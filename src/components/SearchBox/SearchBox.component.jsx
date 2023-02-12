
import "./SearchBox.styles.scss"
import { useState } from "react"
export const SearchBox = ({searchTerm,setSearchTerm })=>{
    const [searchActive, setSearchActive] = useState(false);
    console.log(searchTerm)
    const src = "/images/icons/search.png"
    return(
        <div className="searchBox">
            <button  className="searchIcon" onClick={() => setSearchActive(!searchActive)}>
                <img src={src} alt="Search"  />
            </button>
            <input 
             value={searchTerm}
             onChange={({ target }) => setSearchTerm(target.value)}
             placeholder="Search files and series"
             active={searchActive}
             className={searchActive? "searchInput-active": "searchInput"}
             
              />
        </div>
    )
}