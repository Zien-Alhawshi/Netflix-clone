import "./Content.styles.scss"

export const Series = ({series})=>{
    const topics = Object.keys(series)
    const values = Object.values(series)

   
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
                            <img src={`/images/series/${ele.genre}/${ele.slug}/small.jpg`} alt="" className="card-img" />
                            <div className="card-meta">
                                <p className="subTitle">{ele.title}</p>
                                <p className="description">{ele.description}</p>
                            </div>
                    </div>
                    )
                    })
                }
            </div>
            <br />
          </>
          )
           })}
        </>
    )
}
