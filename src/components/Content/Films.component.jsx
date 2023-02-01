import "./Content.styles.scss"
export const Films = ({films})=>{
    const topics = Object.keys(films)
    const values = Object.values(films)   
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
                            <img src={`/images/films/${ele.genre}/${ele.slug}/small.jpg`} alt="" className="card-img" />
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