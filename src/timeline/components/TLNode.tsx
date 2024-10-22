import React from 'react'
import '../styles/TLNode.css'


export const enum anchor {
    top='top',
    bottom='bottom',
}

// a node to hold the line taught
export default function TLNode(TLNodeProps:{anchor:anchor, title:String, layer:String}){

    //set type to anchor for styling
    return (
        <div className={"Anchor "+TLNodeProps.anchor+" "+TLNodeProps.layer}>
            {TLNodeProps.title}
        </div>
    )

}