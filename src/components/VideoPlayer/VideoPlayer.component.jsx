import "./VideoPlayer.styles.scss"
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
                    <source src="/videos/bunny.mp4" type="video/mp4" />
                </video>
            </div>
        </div>:null
    }
    </>
            
   
        
    )
  
}