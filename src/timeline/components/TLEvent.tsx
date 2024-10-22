import React from 'react'


// a holder to style events from the line
export default function TLEvent(TLEventProps:{title:String, body:string}){

    return (
        <div>
            {TLEventProps.title}
            <p>{TLEventProps.body}</p>
        </div>
    )

}