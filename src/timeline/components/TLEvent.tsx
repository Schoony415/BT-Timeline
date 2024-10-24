import React, { useEffect, useState } from 'react'
import '../styles/TLEvent.css'


// a holder to style events from the line
export default function TLEvent(TLEventProps:{title:String, body:string, expand?:boolean}){
    const [showBody, setShowBody] = useState(TLEventProps.expand??false);

    const toggleShowBody = () => {setShowBody(!showBody)}

    useEffect(()=>{
        console.log("useEffect",TLEventProps.expand)
        setShowBody(TLEventProps.expand?true:false)
    },[TLEventProps.expand])

    return (
        <div className='TLEvent'>
            <div onClick={toggleShowBody} style={{cursor:"pointer"}}>{TLEventProps.title}</div>

            {showBody&&    
            <div dangerouslySetInnerHTML={{__html: TLEventProps.body}}></div>
            }
        </div>

    )

}