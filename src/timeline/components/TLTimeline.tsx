import React,{PropsWithChildren} from 'react'
import LineTo from 'react-lineto'

import TLNode,{anchor} from './TLNode'

import "../styles/TLTimeline.css"

export type LineToStyleProps ={
    
    borderColor?:string,
    borderStyle?:string,
    borderWidth?:number,
}


// a node to hold the line taught
export default function TLTimeline(TLTimelineProps:PropsWithChildren<{title:String, endTitle?:String, layer?:string, lineStyle?:LineToStyleProps}>){

    const TLLayer = TLTimelineProps.layer ?? "1"
    //set type to anchor for styling
    return (
    <>
    <TLNode 
        anchor={anchor.top}
        title={TLTimelineProps.title}
        layer={TLLayer}
        />

        {TLTimelineProps.children}

    <TLNode 
        anchor={anchor.bottom}
        title={TLTimelineProps.endTitle??""}
        layer={TLLayer}

        />

    <LineTo from={"Anchor top "+TLLayer} to={"Anchor bottom "+TLLayer}
        className={'TimeLineLine '+TLLayer}
        delay={1}
        borderColor={TLTimelineProps.lineStyle?.borderColor??'red'}
        borderStyle={TLTimelineProps.lineStyle?.borderStyle??'solid'}
        borderWidth={TLTimelineProps.lineStyle?.borderWidth??5}
        zIndex={-1}
        />


    </>

    )
}
