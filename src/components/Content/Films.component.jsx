import "./Content.styles.scss"
import { FilmFeature } from "./ContentFeature.component"
import { useState } from "react"
let elez= {}
export const Films = ({films})=>{
    const topics = Object.keys(films)
    const values = Object.values(films)   
    const [open, setOpen] = useState(null);
   
    const onClick = (ele,i) => {
        setOpen(open === i ? null : i);
        elez=ele

      };
    return(
        <>
        <br />

           {topics.map((ele,idx)=>{

          return  (
          <>  
            <h1 className="slide-title">{ele}</h1><br />

            <div className="card">

                {
                    values[idx].map(ele=>{

                    return(
                    <>
                        <div className="card-item">
                                <img onClick={()=>onClick(ele, idx)}  src={`/images/films/${ele.genre}/${ele.slug}/small.jpg`} alt="" className="card-img" />
                                <div className="card-meta">
                                    <p className="subTitle">{ele.title}</p>
                                    <p className="description">{ele.description}</p>
                                </div>
                        </div>
                    </>



                    
                    )
                    })
                }
                            <FilmFeature  key={idx} ele={elez} isOpen={open === idx} toggle={() => onClick(idx)} />

                <br />

            </div>

            <br />
          </>
          )
           })}

        </>
    )
}