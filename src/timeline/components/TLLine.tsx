import React from 'react'
import LineTo from 'react-lineto'

import TLNode from './TLNode'
import ClassNameConstructor from '../helper/ClassNameConstructor';
import { anchor, LineProps } from '../types/types';


export default function TLLine(TLLineProps:{type:"epic"|"span"}&LineProps):JSX.Element[]{

    let createLine = ()=>{return (<LineTo 
        from={ClassNameConstructor(["Anchor",anchor.top,TLLineProps.layer??""])}
        to={ClassNameConstructor(["Anchor",anchor.bottom,TLLineProps.layer??""])}
        className={ClassNameConstructor(["TimeLineLine",TLLineProps.layer??""])}
        delay={2}
        borderColor={TLLineProps.lineStyle?.borderColor??'red'}
        borderStyle={TLLineProps.lineStyle?.borderStyle??'solid'}
        borderWidth={TLLineProps.lineStyle?.borderWidth??5}
        zIndex={-1}
    />) }

    return [
        TLNode({anchor:anchor.top, title: TLLineProps.title??"", body:TLLineProps.startTime+"", time: TLLineProps.startTime, layer:TLLineProps.layer??"2"}),
        TLNode({anchor:anchor.bottom, title:"", body: TLLineProps.endTime+"", time: TLLineProps.endTime, layer:TLLineProps.layer??"2"}),
        createLine()
    ]
}

