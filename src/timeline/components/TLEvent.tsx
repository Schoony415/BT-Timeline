import React, { useState } from 'react'
import '../styles/TLEvent.css'


// a holder to style events from the line
export default function TLEvent(TLEventProps:{title:String, body:string}){
    const [showBody, setShowBody] = useState(false);

    const toggleShowBody = () => {setShowBody(!showBody)}

    return (
        <div className='TLEvent'>
            <div onClick={toggleShowBody} style={{cursor:"pointer"}}>{TLEventProps.title}</div>

            {showBody&&    
            <div dangerouslySetInnerHTML={{__html: TLEventProps.body}}></div>
            }
        </div>

    )

}