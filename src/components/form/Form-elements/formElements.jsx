import "./formElements.styles.scss"
import { Link } from "react-router-dom"

export const FormTitle = ({title})=>{
    return(
        <h1 className="form-title">{title}</h1>
    )
}
export const SubmitBtn = ({validValue, type, content})=>{
    return(
        <button  disabled={validValue} className="btn-submit" type={type}>{content}</button>
    )
}
export const InputEle = ({placeholder,type, value, change})=>{
    return(
        <input
                     placeholder={placeholder}
                      type={type}
                       className="form-input"
                       value={value}
                       onChange = {change}
                       />

    )
}
export const ErrorEle = ({errorItem})=>{
    return(
        <div className="form-error">{errorItem}</div>
    )
}
export const FormText = ({content, linkContent,to })=>{
    return(
        <h1 className="form-textz"> {content} <Link className="form-link" to={to}>{linkContent}</Link> </h1>

    )
}
export const SmallFormText = ({content})=>{
    return(
        <h2 className="form-textSmall">{content}</h2>

    )
}