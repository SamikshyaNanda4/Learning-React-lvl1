import {createPortal} from "react-dom"

const Popup = ({copied}) => {

    
    return createPortal(
    
        <section>

           {
               copied && (
                   <div style={{
                    position: 'absolute',
                    bottom:"3rem",
                    backgroundColor:"red",
                    color:"white",
                    width:"140px"
            
                }}>Copied to ClipBoard</div>
               )
           }
        </section>
        ,document.querySelector("#pop-up")
    )

 

//   return (
    // <>
    //      <section>

    //         {
    //             copied && (
    //                 <div style={style}>Copied to ClipBoard</div>
    //             )
    //         }
    //      </section>
    // </>
     
    
//   )

    }

export default Popup
