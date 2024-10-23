import React from 'react';
import TLTimeline from '../timeline/components/TLTimeline';
import TLEvent from '../timeline/components/TLEvent';

type TimelineProps = {

}

type Event = {year:Number, data:string}
// type Eras = ["preStarLeague","starLeague","successionWars","clanInvasion","civilWar","jihad","darkAge"]
// const erasStrings = ["preStarLeague","starLeague","successionWars","clanInvasion","civilWar","jihad","darkAge"]
// todo use enum?
enum Eras {preStarLeague,starLeague,successionWars,clanInvasion,civilWar,jihad,darkAge}


export default function Timeline(TimelineProps:TimelineProps){

    const Events: Map<Eras, Event[]> = new Map<Eras, Event[]>([
        [Eras.preStarLeague, [] as Event[]],
        [Eras.starLeague, [] as Event[]],
        [Eras.successionWars, [] as Event[]],
        [Eras.clanInvasion, [] as Event[]],
        [Eras.civilWar, [] as Event[]],
        [Eras.jihad, [] as Event[]],
        [Eras.darkAge, [] as Event[]],
    ])
    // Eras.forEach((era)=>{Events.set(era,[])})
    
    Events.get(Eras.preStarLeague)!.push({year:1426,data:"Sir Ewen Cameron is born."})
    Events.get(Eras.preStarLeague)!.push({year:1505,data:"Ewen Cameron of Lochiel becomes a knight."})
    Events.get(Eras.preStarLeague)!.push({year:1511,data:"Ewen Cameron died."})


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
                    layer="StarLeague"
                    >

                    <TLEvent
                        title='2118'
                        body="Torrent Heavy Bomber's Jump Infantry carrying variant enters service."
                        />

                </TLTimeline>

                <TLTimeline
                    title="Succession Wars \ 2781"
                    endTitle="3049"
                    lineStyle={{borderColor:"blue", borderWidth:10}}
                    layer="Succession"
                    >

                    <TLEvent
                        title='2801'
                        body="Ilsa Liao named Chancellor, Reformation ends, Sandol Quinn resigns, Exodus Civil War begins, Aleksandr Kerensky dies, Second Exodus led by Nicholas Kerensky"
                        />

                </TLTimeline>
                
                <TLTimeline
                    title="Clan Invasion \ 3050"
                    endTitle="3061"
                    lineStyle={{borderColor:"blue", borderWidth:10}}
                    layer="Clan"
                    >

                    <TLEvent
                        title='3052'
                        body="Battle of Luthien, Battle of Tukayyid, Wolf Khan Garth Radick killed on Tukayyid, Natasha Kerensky elected Khan of Clan Wolf, Phelan Ward elected saKhan of Clan Wolf, both Clan Ghost Bear Khans killed on Tukayyid, Clan Smoke Jaguar Khan Lincoln Osis believed killed on Tukayyid but is later rescued, Demona Aziz rebels and forms the Word of Blake. New service contracts signed with each House but Marik, Free Worlds League signs HPG service contract with Word of Blake, Hanse Davion dies, Myndo Waterly assassinated, Operation SCORPION takes place, Romano Liao assassinated, Sharilar Mori named Primus of ComStar, Sun-Tzu Liao betrothed to Isis Marik, Sun-Tzu Liao named Chancellor, Thomas Marik named Primus-in-Exile of Word of Blake, Word of Blake signs contract with House Marik"
                        />

                </TLTimeline>
                
                <TLTimeline
                    title="Civil War \ 3062"
                    endTitle="3067"
                    lineStyle={{borderColor:"blue", borderWidth:10}}
                    layer="CivilWar"
                    >

                    <TLEvent
                        title='3062'
                        body=" Trinity Alliance formed. Riots on Solaris VII, First Babylon Diet, Ghost Bear/Combine War begins, Arthur Steiner-Davion killed, Victor calls for war to depose his sister, FedCom Civil War begins, Draconis March forces invades Combine"
                        />

                </TLTimeline>
                
                <TLTimeline
                    title="Jihad \ 3068"
                    endTitle="3080"
                    lineStyle={{borderColor:"blue", borderWidth:10}}
                    layer="StarLeague"
                    >

                    <TLEvent
                        title='3071'
                        body="Devlin Stone and David Lear escape Word of Blake reeducation camp RBMU 105 on Kittery and organize anti-Blake resistance cell, Archon Peter Steiner-Davion abdicates in favor of General Adam Steiner due to Blakist occupation of Tharkad, Clan Nova Cat joins Stone's Allied forces, Richard Steiner kills Jeremy Brett, WoB attacks Marian Hegemony"
                        />

                </TLTimeline>
                
                <TLTimeline
                    title="Dark Age \ 3081"
                    
                    lineStyle={{borderColor:"blue", borderWidth:10}}
                    layer="DarkAge"
                    >

                    <TLEvent
                        title='3142'
                        body="Wolf Empire formed, Clans Jade Falcon and Hell's Horses also invade Lyran Commonwealth, Draconis Combine government defeats Nova Cat rebels"
                        />

                </TLTimeline>
                

            </TLTimeline>
        </div>
    )
}