import React, {RefObject} from 'react'
import CSS from 'csstype';

import ClassNameConstructor from '../helper/ClassNameConstructor';

import '../styles/TLNode.css'


export const enum anchor {
    top='top',
    bottom='bottom',
}

type TLNodePropsType = {
    forwardRef?:RefObject<HTMLDivElement>,
    style?: CSS.Properties,

    anchor:anchor,
    title:string,
    layer:string,
    body?:string,

}

// a node to hold the line taught
export default function TLNode(TLNodeProps:TLNodePropsType){

    //set type to anchor for styling
    return (<>
        <div className={ClassNameConstructor(["Anchor",TLNodeProps.anchor,TLNodeProps.layer])} ></div>
        {TLNodeProps.title.length>0&&
        <h3
            className={ClassNameConstructor(["Anchor","AnchorHeader"])}
            style={{margin:0, ...TLNodeProps.style}}
            >
            {TLNodeProps.title}
        </h3>
        }
        {TLNodeProps.body&&
        <h4 className={ClassNameConstructor(["Anchor","AnchorBody"])} style={{margin:0}}>
            {TLNodeProps.body}
        </h4>
        }
        {TLNodeProps.forwardRef&&<div className="refDiv" ref={TLNodeProps.forwardRef}/>}
    </>)

}
