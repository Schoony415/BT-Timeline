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
                    title='1999'
                    body='kljafkl;sdfjals;fdj'
                    />

                <TLEvent
                    title='2000'
                    body='kljafkl;sdfjals;fdj'
                    />
                
                <TLEvent
                    title='2100'
                    body='kljafkl;sdfjals;fdj'
                    />



            </TLTimeline>
        </div>
    )
}