import "./Content.styles.scss"
import { SeriesFeature } from "./SeriesFeatur.component"
let elez= {}
import { useState } from "react"
export const Series = ({series})=>{
    const topics = Object.keys(series)
    const values = Object.values(series)
    const [opened, setOpened] = useState(null);
   
    const onClick = (ele,i) => {
        setOpened(opened === i ? null : i);
        // setOpened(true)
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
                    <div className="card-item">
                            <img onClick={()=>onClick(ele, idx)} src={`/images/series/${ele.genre}/${ele.slug}/small.jpg`} alt="" className="card-img" />
                            <div className="card-meta">
                                <p className="subTitle">{ele.title}</p>
                                <p className="description">{ele.description}</p>
                            </div>
                    </div>
                    )
                    })
                }
            <SeriesFeature  key={idx} ele={elez} isOpen={opened === idx} toggle={() => onClick(idx)} />

            </div>
            <br />
          </>
          )
           })}
        </>
    )
}
