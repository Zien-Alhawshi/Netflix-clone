
import "./Accordion.styles.scss"
import faqsData from "../../fixture/faqs.json"
export const Accordion = ()=>{
    console.log(faqsData)
    return(
<div className="container-faqs">
    <h1 className="title-faq">Frequently Asked Questions</h1>
        {faqsData.map(ele=>  {
          return(
            <div className="item-faq">
                <div className="header-faq">{ele.header}</div>
                <div className="body-faq">{ele.body}</div>
                <br />
        </div>
          )
})}

    </div>
    )
}