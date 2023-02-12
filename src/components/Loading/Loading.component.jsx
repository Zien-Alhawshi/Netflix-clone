import "./Loading.styles.scss"
export const Loading = ({src})=>{
    const src= `/images/users/${src}.png`
    return(
        <div className="spinner">
            <div className="lock"></div>
           <img src={src} alt="" className="picture" /> 
        </div>
    )
}