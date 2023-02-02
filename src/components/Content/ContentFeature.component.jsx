import { useState } from "react";
import "./Content.styles.scss"
export const FilmFeature = ({isOpen, toggle, ele})=>{
   
return(
    <>
    {
        isOpen?
        <div  className="fims-feature-container">
            <div  className="feature-whole" >
                    <div className="content">
                        <button className="feature-close"  onClick={toggle}><img src="/images/icons/close.png" alt="Close" /></button>
                        <p className="feature-title">{ele.title}</p>
                        <p className="feature-text">{ele.description}</p>
                        <div className="feature-group">
                            <p className="feature-text">Genre: {ele.genre.charAt(0).toUpperCase() + ele.genre.slice(1)}</p>
                            {/* <Player /> */}
                        </div>
                </div>
                <img src={`/images/films/${ele.genre}/${ele.slug}/large.jpg`} alt="" />


            </div>
       
        </div>
   :null
    }
    </>
   
)


}



