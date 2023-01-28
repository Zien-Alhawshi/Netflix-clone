import "./OptForm.styles.scss"

export const OptForm = ()=>{
    return(
        <div className="container-form">
            <input type="text" className="email-address" placeholder="email address" />
            <button className="cta">Try it now
                <img src="../images/icons/chevron-right.png" alt="" />
            </button>
            <p className="form-text">Ready to watch? Enter your email to create or restart
                your membership.</p>
        </div>
    )
}