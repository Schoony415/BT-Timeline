import React, {useState} from 'react';
import TLTimeline from '../timeline/components/TLTimeline';
import TLEvent from '../timeline/components/TLEvent';
import { createEventMap, Eras, Event, fillEventMap } from './Types';

type TimelineProps = {

}


export default function Timeline(TimelineProps:TimelineProps){

    const [Events] = useState<Map<Eras, Event[]>>( fillEventMap())
    // Eras.forEach((era)=>{Events.set(era,[])})
    

    return (
        <div>
            <TLTimeline
                title="1400"
                endTitle="3600"
                lineStyle={{borderColor:'black'}}
                >
                
                {Events.get(Eras.preStarLeague)!.map(element => (
                    <TLEvent  title={element.year+""} body={element.data}/>
                ))}

                <TLTimeline
                    title="Star League \ 2005"
                    endTitle="2780"
                    lineStyle={{borderColor:"blue", borderWidth:10}}
                    layer={Eras.starLeague}
                    >

                
                    {Events.get(Eras.starLeague)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data}/>
                    ))}

                </TLTimeline>

                <TLTimeline
                    title="Succession Wars \ 2781"
                    endTitle="3049"
                    lineStyle={{borderColor:"blue", borderWidth:10}}
                    layer={Eras.successionWars}
                    >

                    {Events.get(Eras.successionWars)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data}/>
                    ))}

                </TLTimeline>
                
                <TLTimeline
                    title="Clan Invasion \ 3050"
                    endTitle="3061"
                    lineStyle={{borderColor:"blue", borderWidth:10}}
                    layer={Eras.clanInvasion}
                    >

                    {Events.get(Eras.clanInvasion)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data}/>
                    ))}

                </TLTimeline>
                
                <TLTimeline
                    title="Civil War \ 3062"
                    endTitle="3067"
                    lineStyle={{borderColor:"blue", borderWidth:10}}
                    layer={Eras.civilWar}
                    >
                    
                    {Events.get(Eras.civilWar)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data}/>
                    ))}

                </TLTimeline>
                
                <TLTimeline
                    title="Jihad \ 3068"
                    endTitle="3080"
                    lineStyle={{borderColor:"blue", borderWidth:10}}
                    layer={Eras.jihad}
                    >

                    {Events.get(Eras.jihad)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data}/>
                    ))}

                </TLTimeline>
                
                <TLTimeline
                    title="Dark Age \ 3081"
                    
                    lineStyle={{borderColor:"blue", borderWidth:10}}
                    layer={Eras.darkAge}
                    >

                    {Events.get(Eras.darkAge)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data}/>
                    ))}

                </TLTimeline>
                

            </TLTimeline>
        </div>
    )
}