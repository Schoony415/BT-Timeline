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
                lineStyle={{borderColor:'black', borderWidth:5}}
            >
                <TLTimeline
                    title="Preleague"
                    startBody="1400"
                    endBody="3600"
                    lineStyle={{borderColor:'red', borderWidth:10}}
                    layer={Eras.preStarLeague}
                    >
                    
                    {Events.get(Eras.preStarLeague)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data}/>
                    ))}


                </TLTimeline>

                <TLTimeline
                    title="Star League"
                    startBody="2005"
                    endBody="2780"
                    lineStyle={{borderColor:"gold", borderWidth:10}}
                    layer={Eras.starLeague}
                    >

                
                    {Events.get(Eras.starLeague)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data}/>
                    ))}

                </TLTimeline>

                <TLTimeline
                    title="Succession Wars"
                    startBody="2781"
                    endBody="3049"
                    lineStyle={{borderColor:"blue", borderWidth:10}}
                    layer={Eras.successionWars}
                    >

                    {Events.get(Eras.successionWars)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data}/>
                    ))}

                </TLTimeline>
                
                <TLTimeline
                    title="Clan Invasion"
                    startBody="3050"
                    endBody="3061"
                    lineStyle={{borderColor:"red", borderWidth:10}}
                    layer={Eras.clanInvasion}
                    >

                    {Events.get(Eras.clanInvasion)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data}/>
                    ))}

                </TLTimeline>
                
                <TLTimeline
                    title="Civil War"
                    startBody="3062"
                    endBody="3067"
                    lineStyle={{borderColor:"purple", borderWidth:10}}
                    layer={Eras.civilWar}
                    >
                    
                    {Events.get(Eras.civilWar)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data}/>
                    ))}

                </TLTimeline>
                
                <TLTimeline
                    title="Jihad"
                    startBody="3068"
                    endBody="3080"
                    lineStyle={{borderColor:"green", borderWidth:10}}
                    layer={Eras.jihad}
                    >

                    {Events.get(Eras.jihad)!.map(element => (
                        <TLEvent  title={element.year+""} body={element.data}/>
                    ))}

                </TLTimeline>
                
                <TLTimeline
                    title="Dark Age"
                    startBody="3081"
                    
                    lineStyle={{borderColor:"brown", borderWidth:10}}
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