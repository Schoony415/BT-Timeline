import React, {useState} from 'react';

import TLTimeline from '../timeline/components/TLTimeline';
import TLEvent from '../timeline/components/TLEvent';
import { TLChild } from '../timeline/types/types';
import { createEventMap, Eras, Event, EventsSource, fillEventMap } from './Types';
import { optionsType } from '../timeline/components/Options';

type TimelineProps = {
    options: optionsType;
    accordiansExpanded: boolean;
}

export default function Timeline(TimelineProps:TimelineProps){

    const [SarnaEvents] = useState<Map<Eras, Event[]>>( fillEventMap(EventsSource.Sarna))
    const [MWOEvents] = useState<Map<Eras, Event[]>>( fillEventMap(EventsSource.MWO))
    

    return (
        <div>
            <TLTimeline

                lineStyle={{borderColor:'black', borderWidth:5}}
            
                startTime={100}
                endTime={5000}
            
                items= {TimelineProps.options.EventsToDisplay==="ALL" ?
                    SarnaEvents.get(Eras.preStarLeague)!.map(element => (
                    { type:"event", title:element.year+"", body:element.data, time:element.year } as TLChild
                    )).concat([{type:"epic", title:"testepic", time:1940, timeEnd:1990} as TLChild])
                :undefined}
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