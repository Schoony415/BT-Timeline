import CSS from 'csstype';

export type TLChild = {
    type:"epic"|"span",
    startTime:number, 
    endTime:number, 
    title:string
} | {
    type: "event",
    time:number,
    title?: string,
    body: string,
}

export type LineToStyleProps ={
    
    borderColor?:string,
    borderStyle?:string,
    borderWidth?:number,
}

export type TLChildDiv = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    time:number;
}

export const stickyStyle: CSS.Properties = {
    "position": "sticky",
    "top": "0",
    "zIndex": "99",
    "backgroundColor":"white"
}

export const enum anchor {
    top='top',
    bottom='bottom',
}

