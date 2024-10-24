import React, {RefObject} from 'react'
import CSS from 'csstype';
import '../styles/TLNode.css'


export const enum anchor {
    top='top',
    bottom='bottom',
}

type TLNodePropsType = {
    forwardRef?:RefObject<HTMLDivElement>,
    style?: CSS.Properties,

    anchor:anchor,
    title:String,
    layer:String,
    body?:String,

}

// a node to hold the line taught
export default function TLNode(TLNodeProps:TLNodePropsType){

    //set type to anchor for styling
    return (<>
        <div className={"Anchor "+TLNodeProps.anchor+" "+TLNodeProps.layer}/>
        <div
            className={"Anchor AnchorHeader "}
            style={TLNodeProps.style}
            >
            {TLNodeProps.title}
        </div>
        {TLNodeProps.body&&
        <div className="Anchor AnchorBody">
            {TLNodeProps.body}
        </div>
        }
        {TLNodeProps.forwardRef&&<div className="refDiv" ref={TLNodeProps.forwardRef}/>}
    </>)

}
