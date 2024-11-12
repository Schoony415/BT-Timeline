import React,{useRef, PropsWithChildren, useState, useEffect} from 'react'
import useDirectionToScreen from '../hooks/useDirectionToScreen'
import LineTo from 'react-lineto'

import TLNode from './TLNode';
import TLLine from './TLLine';
import TLEvent from './TLEvent';
import ClassNameConstructor from '../helper/ClassNameConstructor';
import { TLChild, LineToStyleProps, stickyStyle, anchor, LineProps} from '../types/types';

import "../styles/TLTimeline.css"

// LineTo Reference
// https://github.com/kdeloach/react-lineto

type TLTimelinePropsType = {
    startBody?:string,
    endBody?:string,

    items:  TLChild[]  ,
} & LineProps

// a node to hold the line taught
export default function TLTimeline(TLTimelineProps:TLTimelinePropsType){

    const elementRef = useRef<HTMLDivElement>(null);
    const isOnScreen = useDirectionToScreen(elementRef);
    

    // console.log({isOnScreen});

    const TLLayer = TLTimelineProps.layer ?? "1"
    //set type to anchor for styling
    return (
    <>
    {/* todo [] make the line nodes seperate from headers completely */}
    {/* todo [/] make "epics" that are mini timelines that will have stick properties to thier headers */}
    {/* todo [] allow epics to overlap */}
    {/* todo [] create "spans" that are smaller than epics, dont let them be sticky */}
    {/* todo [x] impliment sorting of children */}

    <TLNode 
        anchor={anchor.top}
        title={TLTimelineProps.title??""}
        layer={TLLayer}
        body={TLTimelineProps.startBody}
        style={isOnScreen!=="ABOVE"?stickyStyle:{}}
        time={TLTimelineProps.startTime}
        />

        {TLTimelineProps.items.map(item=>(
                (item.type==="event")
                ?( <TLEvent title={item.title??""} body={item.body} time={item.time}/>)
                :(item.type==="epic")
                ?(TLLine(item))
                :(item.type==="span")
                ?( <div>NOTIMPLIMENTEDYET</div>)
                :( <div>NOTIMPLIMENTEDYET</div>)
            ))
            .flat(1)
            .sort((a,b)=>(+a.props.time - +b.props.time))
            
        }

        {/* Anchor AnchorHeader anchor.bottom TLLayer */}
    <TLNode 
        anchor={anchor.bottom}
        title={""}
        layer={TLLayer}
        body={TLTimelineProps.endBody}
        forwardRef={elementRef}
        time={TLTimelineProps.endTime}

        />

    <LineTo 
        from={ClassNameConstructor(["Anchor",anchor.top,TLLayer])}
        to={ClassNameConstructor(["Anchor",anchor.bottom,TLLayer])}
        className={'TimeLineLine '+TLLayer}
        delay={1}
        borderColor={TLTimelineProps.lineStyle?.borderColor??'red'}
        borderStyle={TLTimelineProps.lineStyle?.borderStyle??'solid'}
        borderWidth={TLTimelineProps.lineStyle?.borderWidth??5}
        zIndex={-99}
        />


    </>

    )
}
