import React, { ChangeEvent, ChangeEventHandler, EventHandler } from "react";

export const enum EventsOptions {
    major = "MAJOR",
    all = "ALL"
}

export type optionsType = {
    EventsToDisplay: EventsOptions;

}

type OptionsProps = {
    setEventsToDisplay: ChangeEventHandler<HTMLInputElement>;//EventHandler<ChangeEvent<InputEvent>>;//(eventOption: EventsOptions) => void;
    toggleAccordians: React.MouseEventHandler<HTMLButtonElement>;
} & optionsType

export default function Options(optionsProps: OptionsProps){



    return (<>
    <>
        <><input type="radio" value={EventsOptions.major} checked={optionsProps.EventsToDisplay === EventsOptions.major} onChange={optionsProps.setEventsToDisplay}/>major events</><br/>
        <><input type="radio" value={EventsOptions.all} checked={optionsProps.EventsToDisplay === EventsOptions.all} onChange={optionsProps.setEventsToDisplay}/>all events</><br/>
    </>
    <button onClick={optionsProps.toggleAccordians}>Collapse/Expand all</button><br/>

    </>)
}