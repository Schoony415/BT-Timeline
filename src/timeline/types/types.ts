import CSS from 'csstype';

export type TLChild = {
    type:"epic"|"span"
} & LineProps | {
    type: "event",
    time:number,
    title?: string,
    body: string,
}

export type LineProps = {
    title?:string,
    startTime:number,
    endTime:number,
    lineStyle?:LineToStyleProps,
    layer?: string,
}

export type LineToStyleProps = {
    borderColor?:string,
    borderStyle?:string,
    borderWidth?:number,
}

export const UndefinedTLChild: TLChild = {
    type:"event",
    time:0,
    title:"UNDEFINED",
    body:"undefined",
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

