import React, {useState} from 'react';

import TLTimeline from '../timeline/components/TLTimeline';
import TLEvent from '../timeline/components/TLEvent';
import { TLChild, UndefinedTLChild} from '../timeline/types/types';
import { createEventMap, Eras, Event, EventsSource, fillEventMap } from './Types';
import { optionsType } from '../timeline/components/Options';

type TimelineProps = {
    options: optionsType;
    accordiansExpanded: boolean;
}

export default function Timeline(TimelineProps:TimelineProps){

    const [SarnaEvents] = useState<Map<Eras, Event[]>>( fillEventMap(EventsSource.Sarna))
    const [MWOEvents] = useState<Map<Eras, Event[]>>( fillEventMap(EventsSource.MWO))
    
    const epics: TLChild[] = [
        {type:"epic", title:"Preleague", startTime:1400, endTime:2004, lineStyle:{borderColor:'red', borderWidth:10}, layer: Eras.preStarLeague},
        {type:"epic", title:"Star League", startTime:2005, endTime:2780, lineStyle:{borderColor:'gold', borderWidth:10}, layer: Eras.starLeague},
        {type:"epic", title:"Succession Wars", startTime:2781, endTime:3049, lineStyle:{borderColor:'blue', borderWidth:10}, layer: Eras.successionWars},
        {type:"epic", title:"Clan Invasion", startTime:3050, endTime:3061, lineStyle:{borderColor:'red', borderWidth:10}, layer: Eras.clanInvasion},
        {type:"epic", title:"Civil War", startTime:3062, endTime:3067, lineStyle:{borderColor:'purple', borderWidth:10}, layer: Eras.civilWar},
        {type:"epic", title:"Jihad", startTime:3068, endTime:3080, lineStyle:{borderColor:'green', borderWidth:10}, layer: Eras.jihad},
        {type:"epic", title:"Dark Age", startTime:3081, endTime:4000, lineStyle:{borderColor:'brown', borderWidth:10}, layer: Eras.darkAge},
    ]

    return (
        <div>
            <TLTimeline

                lineStyle={{borderColor:'black', borderWidth:5}}
            
                startTime={100}
                endTime={5000}
            
                items= {TimelineProps.options.EventsToDisplay==="ALL" ?
                    SarnaEvents.get(Eras.preStarLeague)!.map(element => (
                    { type:"event", title:element.year+"", body:element.data, time:element.year } as TLChild
                    )).concat(
                        // [{type:"epic", title:"1940 to 1990", startTime:1940, endTime:1990, lineStyle:{borderColor:"blue"}} as TLChild]
                    epics
                    )
                :TimelineProps.options.EventsToDisplay==="MAJOR" ?
                MWOEvents.get(Eras.starLeague)!.map(element => (
                    { type:"event", title:element.year+"", body:element.data, time:element.year } as TLChild
                    )).concat(
                        [{type:"epic", title:"2100 to 2300", startTime:2100, endTime:2300, lineStyle:{borderColor:"blue"}, layer:"epicTest"} as TLChild]
                    // epics
                    )
                :[UndefinedTLChild]}
            />



                {/* <TLTimeline
                    title="Preleague"
                    startBody="1400"
                    endBody="2004"
                    lineStyle={{borderColor:'red', borderWidth:10}}
                    layer={Eras.preStarLeague}
                    >
                    
                    {TimelineProps.options.EventsToDisplay==="ALL" && SarnaEvents.get(Eras.preStarLeague)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data} expand={TimelineProps.accordiansExpanded}/>
                    ))}
                    {TimelineProps.options.EventsToDisplay==="MAJOR" && MWOEvents.get(Eras.preStarLeague)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data} expand={TimelineProps.accordiansExpanded}/>
                    ))}

                </TLTimeline>

                <TLTimeline
                    title="Star League"
                    startBody="2005"
                    endBody="2780"
                    lineStyle={{borderColor:"gold", borderWidth:10}}
                    layer={Eras.starLeague}
                    >
                
                    {TimelineProps.options.EventsToDisplay==="ALL" && SarnaEvents.get(Eras.starLeague)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data} expand={TimelineProps.accordiansExpanded}/>
                    ))}
                    {TimelineProps.options.EventsToDisplay==="MAJOR" && MWOEvents.get(Eras.starLeague)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data} expand={TimelineProps.accordiansExpanded}/>
                    ))}

                </TLTimeline>

                <TLTimeline
                    title="Succession Wars"
                    startBody="2781"
                    endBody="3049"
                    lineStyle={{borderColor:"blue", borderWidth:10}}
                    layer={Eras.successionWars}
                    >

                    {TimelineProps.options.EventsToDisplay==="ALL" && SarnaEvents.get(Eras.successionWars)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data} expand={TimelineProps.accordiansExpanded}/>
                    ))}
                    {TimelineProps.options.EventsToDisplay==="MAJOR" && MWOEvents.get(Eras.successionWars)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data} expand={TimelineProps.accordiansExpanded}/>
                    ))}

                </TLTimeline>
                
                <TLTimeline
                    title="Clan Invasion"
                    startBody="3050"
                    endBody="3061"
                    lineStyle={{borderColor:"red", borderWidth:10}}
                    layer={Eras.clanInvasion}
                    >

                    {TimelineProps.options.EventsToDisplay==="ALL" && SarnaEvents.get(Eras.clanInvasion)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data} expand={TimelineProps.accordiansExpanded}/>
                    ))}
                    {TimelineProps.options.EventsToDisplay==="MAJOR" && MWOEvents.get(Eras.clanInvasion)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data} expand={TimelineProps.accordiansExpanded}/>
                    ))}

                </TLTimeline>
                
                <TLTimeline
                    title="Civil War"
                    startBody="3062"
                    endBody="3067"
                    lineStyle={{borderColor:"purple", borderWidth:10}}
                    layer={Eras.civilWar}
                    >
                    
                    {TimelineProps.options.EventsToDisplay==="ALL" && SarnaEvents.get(Eras.civilWar)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data} expand={TimelineProps.accordiansExpanded}/>
                    ))}
                    {TimelineProps.options.EventsToDisplay==="MAJOR" && MWOEvents.get(Eras.civilWar)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data} expand={TimelineProps.accordiansExpanded}/>
                    ))}

                </TLTimeline>
                
                <TLTimeline
                    title="Jihad"
                    startBody="3068"
                    endBody="3080"
                    lineStyle={{borderColor:"green", borderWidth:10}}
                    layer={Eras.jihad}
                    >

                    {TimelineProps.options.EventsToDisplay==="ALL" && SarnaEvents.get(Eras.jihad)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data} expand={TimelineProps.accordiansExpanded}/>
                    ))}
                    {TimelineProps.options.EventsToDisplay==="MAJOR" && MWOEvents.get(Eras.jihad)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data} expand={TimelineProps.accordiansExpanded}/>
                    ))}

                </TLTimeline>
                
                <TLTimeline
                    title="Dark Age"
                    startBody="3081"
                    
                    lineStyle={{borderColor:"brown", borderWidth:10}}
                    layer={Eras.darkAge}
                    >

                    {TimelineProps.options.EventsToDisplay==="ALL" && SarnaEvents.get(Eras.darkAge)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data} expand={TimelineProps.accordiansExpanded}/>
                    ))}
                    {TimelineProps.options.EventsToDisplay==="MAJOR" && MWOEvents.get(Eras.darkAge)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data} expand={TimelineProps.accordiansExpanded}/>
                    ))}

                </TLTimeline> */}
                
{/* 
            </TLTimeline> */}
        </div>
    )
}