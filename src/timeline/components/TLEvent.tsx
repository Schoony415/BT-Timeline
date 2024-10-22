import React from 'react'
import '../styles/TLEvent.css'


// a holder to style events from the line
export default function TLEvent(TLEventProps:{title:String, body:string}){

    return (
        <div className='TLEvent'>
            {TLEventProps.title}
            <p>{TLEventProps.body}</p>
        </div>
    )

}