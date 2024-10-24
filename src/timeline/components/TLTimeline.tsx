import React,{useRef, PropsWithChildren, useState, useEffect} from 'react'
import CSS from 'csstype';
import useDirectionToScreen from '../hooks/useDirectionToScreen'
import LineTo from 'react-lineto'

import TLNode,{anchor} from './TLNode'
import ClassNameConstructor from '../helper/ClassNameConstructor';

import "../styles/TLTimeline.css"

// LineTo Reference
// https://github.com/kdeloach/react-lineto

type TLTimelinePropsType = {
    title?:string,
    startBody?:string,
    endBody?:string,
    layer?:string,
    lineStyle?:LineToStyleProps
}

export type LineToStyleProps ={
    
    borderColor?:string,
    borderStyle?:string,
    borderWidth?:number,
}

const stickyStyle: CSS.Properties = {
    "position": "sticky",
    "top": "0",
    "zIndex": "99",
    "backgroundColor":"white"
}

// a node to hold the line taught
export default function TLTimeline(TLTimelineProps:PropsWithChildren<TLTimelinePropsType>){

    const elementRef = useRef<HTMLDivElement>(null);
    const isOnScreen = useDirectionToScreen(elementRef);
    

    // console.log({isOnScreen});

    const TLLayer = TLTimelineProps.layer ?? "1"
    //set type to anchor for styling
    return (
    <>
    <TLNode 
        anchor={anchor.top}
        title={TLTimelineProps.title??""}
        layer={TLLayer}
        body={TLTimelineProps.startBody}
        style={isOnScreen!=="ABOVE"?stickyStyle:{}}
        />

        {TLTimelineProps.children}

        {/* Anchor AnchorHeader anchor.bottom TLLayer */}
    <TLNode 
        anchor={anchor.bottom}
        title={""}
        layer={TLLayer}
        body={TLTimelineProps.endBody}
        forwardRef={elementRef}
        />

    <LineTo 
        from={ClassNameConstructor(["Anchor",anchor.top,TLLayer])}
        to={ClassNameConstructor(["Anchor",anchor.bottom,TLLayer])}
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
