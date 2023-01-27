

export const Jumbotron = ({item})=>{
    console.log(item)
    const {title, subTitle, image, alt} = item
    return(
    <section className="container">
    
    
    <div className="item">
        <div className="inner">
        <div className="pane">

<h1 className="title">{title}</h1>
<h2 className="subtitle">{subTitle}</h2>
<h1>Hello!</h1>
</div>
<div className="pane">
<img src={image} alt={alt} />
</div>
        </div>
   
    </div>
    
          
        </section>
    )
}