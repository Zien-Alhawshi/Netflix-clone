import "./VideoPlayer.styles.scss"
import bunnyVideo from "../../../videos/bunny.mp4"; // Import your video file

export const VideoPlayer = ({showPlayer, setShowPlayer})=>{

    return(
      <>
      {showPlayer===true?
        <div className={`overlay`} onClick={() =>{
            setShowPlayer(false)

        }  
        } >
            <div className="inner-vid">
                <button className="feature-close" ><img src="/images/icons/close.png" alt="Close" /></button>

                <video muted  id="netflix-player" controls >
                    <source src={bunnyVideo} type="video/mp4" />
                </video>
            </div>
        </div>:null
    }
    </>
            
   
        
    )
  
}