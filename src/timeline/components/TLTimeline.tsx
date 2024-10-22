import React,{PropsWithChildren} from 'react'
import LineTo from 'react-lineto'

import TLNode,{anchor} from './TLNode'




// a node to hold the line taught
export default function TLTimeline(TLTimelineProps:PropsWithChildren<{title:String}>){

    //set type to anchor for styling
    return (
    <>
    <TLNode 
        anchor={anchor.top}
        title={TLTimelineProps.title}
        />

        {TLTimelineProps.children}

    <TLNode 
        anchor={anchor.bottom}
        title='Line stop'
        />

    <LineTo from="top" to="bottom"/>


    </>

    )
}
