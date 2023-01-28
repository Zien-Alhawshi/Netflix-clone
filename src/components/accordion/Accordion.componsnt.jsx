
import "./Accordion.styles.scss"
import faqsData from "../../fixture/faqs.json"
import { useState } from "react";
import { FaqQuestion } from "../faq-question/FaqQuestion.component";
export const Accordion = ()=>{
    const [open, setOpen] = useState(null);
    /*
        Note: it could be done other way by making open as an array and we flip each one on specific as mentioned here:
        https://stackoverflow.com/questions/68585682/why-all-accordion-toggle-together-in-reactjs
        now when the faq's question is open the other is closed!
    */
    const onClick = (i) => {
        setOpen(open === i ? null : i);
      };
      
    return(
<div className="container-faqs">
    <h1 className="title-faq">Frequently Asked Questions</h1>
        {faqsData.map((ele, idx)=>  {
          return(
            <FaqQuestion key={idx} ele={ele} isOpen={open === idx} toggle={() => onClick(idx)} />
          )
})}

    </div>
    )
}