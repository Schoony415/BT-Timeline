import React from 'react'
import LineTo from 'react-lineto'

import TLNode from './TLNode'
import ClassNameConstructor from '../helper/ClassNameConstructor';
import { anchor } from '../types/types';


export default function TLLine(TLLineProps:{title:string, time:number, timeEnd:number}):JSX.Element[]{

    let createLine = ()=>{return (<LineTo 
        from={ClassNameConstructor(["Anchor",anchor.top,"1"])}
        to={ClassNameConstructor(["Anchor",anchor.bottom,"1"])}
        className={'TimeLineLine '}
        delay={1}
        borderColor={'red'}
        borderStyle={'solid'}
        borderWidth={5}
        zIndex={-1}
    />) }

    return [
        TLNode({anchor:anchor.top, title: TLLineProps.title, layer:"1"}),
        TLNode({anchor:anchor.bottom, title: TLLineProps.title, layer:"1"}),
        createLine()
    ]
}

