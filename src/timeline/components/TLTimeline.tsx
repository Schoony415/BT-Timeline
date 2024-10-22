import React,{PropsWithChildren} from 'react'
import LineTo from 'react-lineto'

import TLNode,{anchor} from './TLNode'

export type LineToStyleProps ={
    
    borderColor?:string,
    borderStyle?:string,
    borderWidth?:number,
}


// a node to hold the line taught
export default function TLTimeline(TLTimelineProps:PropsWithChildren<{title:String, endTitle?:String, lineStyle?:LineToStyleProps}>){

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
        title={TLTimelineProps.endTitle??""}
        />

    <LineTo from="Anchor top" to="Anchor bottom"
        delay={1}
        borderColor={TLTimelineProps.lineStyle?.borderColor??'red'}
        borderStyle={TLTimelineProps.lineStyle?.borderStyle??'solid'}
        borderWidth={TLTimelineProps.lineStyle?.borderWidth??5}
        />


    </>

    )
}
