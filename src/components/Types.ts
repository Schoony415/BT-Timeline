import SarnaEventList from  "../data/SarnaReference.json" ;
import MWOEventList from  "../data/MWOReference.json" ;


export type Event = {year:Number, data:string}
// type Eras = ["preStarLeague","starLeague","successionWars","clanInvasion","civilWar","jihad","darkAge"]
// const erasStrings = ["preStarLeague","starLeague","successionWars","clanInvasion","civilWar","jihad","darkAge"]
// todo use enum?
enum Eras {
    preStarLeague = "preStarLeague",
    starLeague = "starLeague",
    successionWars = "successionWars",
    clanInvasion = "clanInvasion",
    civilWar = "civilWar",
    jihad = "jihad",
    darkAge = "darkAge",
}

const erasDates: {key:Eras, range:number[]}[] = [
    {key: Eras.preStarLeague, range: [0,2004]},
    {key: Eras.starLeague, range: [2005,2780]},
    {key: Eras.successionWars, range: [2781,3049]},
    {key: Eras.clanInvasion, range: [3050,3061]},
    {key: Eras.civilWar, range: [3062,3067]},
    {key: Eras.jihad, range: [3068,3080]},
    {key: Eras.darkAge, range: [3081,5000]},
]



function createEventMap():Map<Eras, Event[]>{
    return new Map<Eras, Event[]>([
        [Eras.preStarLeague, [] as Event[]],
        [Eras.starLeague, [] as Event[]],
        [Eras.successionWars, [] as Event[]],
        [Eras.clanInvasion, [] as Event[]],
        [Eras.civilWar, [] as Event[]],
        [Eras.jihad, [] as Event[]],
        [Eras.darkAge, [] as Event[]],
    ])
}


const fixHREFtoSarna = (text:string) => {
    return text.replaceAll("href=\"", "href=\"https://www.sarna.net")
}

export const enum EventsSource {Sarna, MWO}

function fillEventMap(source:EventsSource|null):Map<Eras, Event[]>{
    const Events = createEventMap();

    switch(source){
        case EventsSource.Sarna: {
            // it seems the import auto-parses
            // const unsortedEvents = JSON.parse(eventList);
            SarnaEventList.events.forEach(e => {
                var era = erasDates.filter(er=>{
                    return (e.year >= er.range[0] && e.year <= er.range[1])
                })[0].key
        
                Events.get(era)!.push({year:e.year, data: fixHREFtoSarna(e.data)})
            })
            break;
        }
        case EventsSource.MWO: {
            MWOEventList.events.forEach(e => {
                var era = erasDates.filter(er=>{
                    return (e.year >= er.range[0] && e.year <= er.range[1])
                })[0].key
        
                Events.get(era)!.push({year:e.year, data: e.data})
            })
            break;
        }
        default: {
            Events.get(Eras.preStarLeague)!.push({year:1426,data:"Sir Ewen Cameron is born."})
            Events.get(Eras.preStarLeague)!.push({year:1505,data:"Ewen Cameron of Lochiel becomes a knight."})
            Events.get(Eras.preStarLeague)!.push({year:1511,data:"Ewen Cameron died."})
            Events.get(Eras.starLeague)!.push({year:2118,data:"Torrent Heavy Bomber's Jump Infantry carrying variant enters service."})
            Events.get(Eras.successionWars)!.push({year:2801,data:"Ilsa Liao named Chancellor, Reformation ends, Sandol Quinn resigns, Exodus Civil War begins, Aleksandr Kerensky dies, Second Exodus led by Nicholas Kerensky"})
            Events.get(Eras.clanInvasion)!.push({year:3052,data:"Battle of Luthien, Battle of Tukayyid, Wolf Khan Garth Radick killed on Tukayyid, Natasha Kerensky elected Khan of Clan Wolf, Phelan Ward elected saKhan of Clan Wolf, both Clan Ghost Bear Khans killed on Tukayyid, Clan Smoke Jaguar Khan Lincoln Osis believed killed on Tukayyid but is later rescued, Demona Aziz rebels and forms the Word of Blake. New service contracts signed with each House but Marik, Free Worlds League signs HPG service contract with Word of Blake, Hanse Davion dies, Myndo Waterly assassinated, Operation SCORPION takes place, Romano Liao assassinated, Sharilar Mori named Primus of ComStar, Sun-Tzu Liao betrothed to Isis Marik, Sun-Tzu Liao named Chancellor, Thomas Marik named Primus-in-Exile of Word of Blake, Word of Blake signs contract with House Marik"})
            Events.get(Eras.civilWar)!.push({year:3062,data:"Trinity Alliance formed. Riots on Solaris VII, First Babylon Diet, Ghost Bear/Combine War begins, Arthur Steiner-Davion killed, Victor calls for war to depose his sister, FedCom Civil War begins, Draconis March forces invades Combine"})
            Events.get(Eras.jihad)!.push({year:3071,data:"Devlin Stone and David Lear escape Word of Blake reeducation camp RBMU 105 on Kittery and organize anti-Blake resistance cell, Archon Peter Steiner-Davion abdicates in favor of General Adam Steiner due to Blakist occupation of Tharkad, Clan Nova Cat joins Stone's Allied forces, Richard Steiner kills Jeremy Brett, WoB attacks Marian Hegemony"})
            Events.get(Eras.darkAge)!.push({year:3142,data:"Wolf Empire formed, Clans Jade Falcon and Hell's Horses also invade Lyran Commonwealth, Draconis Combine government defeats Nova Cat rebels"})
        }
    }



    return Events;
}

export {createEventMap, fillEventMap, Eras}
