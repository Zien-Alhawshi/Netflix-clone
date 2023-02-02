import { useState } from "react";
import "./Content.styles.scss"
export const FilmFeature = ({isOpen, toggle, ele})=>{
   
        console.log(ele)
return(
    <>
    {
        isOpen?
        <div  className="fims-feature-container">
        <div style={{
            // backgroundImage:`url("``/images/films/${ele.genre}/${ele.slug}/large.jpg``")`
        }} className="feature-whole" >

        </div>
        {/* <img src={`/images/films/${ele.genre}/${ele.slug}/large.jpg`} alt="" /> */}
        <div className="content">
           <p className="feature-title">{ele.title}</p>
           <p className="feature-text">Hii</p>
           <button  onClick={toggle}><img src="/images/icons/close.png" alt="Close" /></button>
           <div className="body-feature">{ele.description}</div>
        </div>
   </div>
   :null
    }
    </>
   
)


}



{/* <Feature src={`/images/${itemFeature.genre}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
<Content>
    <FeatureTitle>{itemFeature.title}</FeatureTitle>
    <FeatureText>{itemFeature.description}</FeatureText>
    <FeatureClose onClick={() => setShowFeature(false)}>
        <img src="/images/icons/close.png" alt="Close" />
    </FeatureClose>
    
    <Group margin="30px 0" flexDirection="row" alignItems="center">
        <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
        <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
        </FeatureText>
    </Group>
    
    {children}
</Content>
</Feature>
): null; */}





// FaqQuestion

// export const FaqQuestion =({isOpen, toggle, ele})=>{
//     return(
//         <div className="item-faq">
//                 <div onClick={toggle}  className="header-faq">{ele.header}
//                 {
//                     isOpen?(<img  src="../images/icons/close-slim.png" alt="Close" />):(<img  src="../images/icons/add.png" alt="Open" />)
//                 }
//                 </div>

//                 { isOpen?(<div className="body-faq">{ele.body}</div>):null }
                
//                 <br />
//             </div>
//     )
// }