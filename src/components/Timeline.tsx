import React from 'react';
import TLTimeline from '../timeline/components/TLTimeline';
import TLEvent from '../timeline/components/TLEvent';

type TimelineProps = {

}

export default function Timeline(TimelineProps:TimelineProps){

    return (
        <div>
            <TLTimeline
                title="1400"
                endTitle="3600"
                lineStyle={{borderColor:'black'}}
                >
                <TLEvent
                    title='1426'
                    body='Sir Ewen Cameron is born.'
                    />

                <TLEvent
                    title='1505'
                    body='Ewen Cameron of Lochiel becomes a knight.'
                    />
                
                <TLEvent
                    title='1511'
                    body='Ewen Cameron died.'
                    />

                <TLTimeline
                    title="Star League \ 2005"
                    endTitle="2780"
                    lineStyle={{borderColor:"blue", borderWidth:3}}
                    >

<TLEvent
                    title='2118'
                    body="Torrent Heavy Bomber's Jump Infantry carrying variant enters service."
                    />

                    </TLTimeline>



            </TLTimeline>
        </div>
    )
}