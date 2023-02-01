import "./Content.styles.scss"

export const Series = ({series})=>{
    const topics = Object.keys(series)
    console.log(topics)
    const values = Object.values(series)
    // console.log(values)

    //    console.log(Object.values(series))
   
    return(
        <>
        <br />
           {topics.map((ele,idx)=>{
            // console.log(values)
          return  (
          <>  
                          <h1 className="slide-title">{ele}</h1><br />
              {/* <h1 className="slide-title">{ele}</h1><br /> */}

            <div className="card">
                {
                    values[idx].map(ele=>{
                        console.log(`/images/${series}/${ele.genre}/${ele.slug}/small.jpg`)
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

// <Card.Group>
// {slideRows.map((slideItem) => (
//     <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
//         <Card.Title>{slideItem.title}</Card.Title>
//         <Card.Entities>
//             {slideItem.data.map((item) => (
//                 <Card.Item key={item.docId} item={item}>
//                     <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
//                     <Card.Meta>
//                         <Card.SubTitle>{item.title}</Card.SubTitle>
//                         <Card.Text>{item.description}</Card.Text>
//                     </Card.Meta>
//                 </Card.Item>
//             ))}
//         </Card.Entities>
//         <Card.Feature category={category}>
//             <p>I am the feature!</p>
//         </Card.Feature>
//     </Card>
// ))}
// </Card.Group>