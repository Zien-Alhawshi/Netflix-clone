import "./Loading.styles.scss"
export const Loading = ({src})=>{
    return(
        <div className="spinner">
            <div className="lock"></div>
           <img src={`/images/users/${src}.png`} alt="" className="picture" /> 
        </div>
    )
}