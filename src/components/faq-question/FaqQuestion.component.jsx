export const FaqQuestion =({isOpen, toggle, ele})=>{
    return(
        <div className="item-faq">
                <div onClick={toggle}  className="header-faq">{ele.header}
                {
                    isOpen?(<img  src="../images/icons/close-slim.png" alt="Close" />):(<img  src="../images/icons/add.png" alt="Open" />)
                }
                </div>

                { isOpen?(<div className="body-faq">{ele.body}</div>):null }
                
                <br />
            </div>
    )
}