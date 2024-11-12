import React from 'react'
import LineTo from 'react-lineto'

import TLNode from './TLNode'
import ClassNameConstructor from '../helper/ClassNameConstructor';
import { anchor } from '../types/types';


export default function TLLine(TLLineProps:{title:string, startTime:number, endTime:number }):JSX.Element[]{

    let createLine = ()=>{return (<LineTo 
        from={ClassNameConstructor(["Anchor",anchor.top,TLLineProps.title])}
        to={ClassNameConstructor(["Anchor",anchor.bottom,TLLineProps.title])}
        className={'TimeLineLine '}
        delay={1}
        borderColor={'red'}
        borderStyle={'solid'}
        borderWidth={5}
        zIndex={-1}
    />) }

    return [
        TLNode({anchor:anchor.top, title: TLLineProps.title, time: TLLineProps.startTime, layer:TLLineProps.title}),
        TLNode({anchor:anchor.bottom, title: TLLineProps.title, time: TLLineProps.endTime, layer:TLLineProps.title}),
        createLine()
    ]
}

