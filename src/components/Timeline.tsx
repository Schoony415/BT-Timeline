import React from 'react';
import TLTimeline from '../timeline/components/TLTimeline';

type TimelineProps = {

}

export default function Timeline(TimelineProps:TimelineProps){

    return (
        <div>
            <TLTimeline
                title="start of time"
                >
<div>space</div>
<div>space</div>
<div>space</div>
<div>space</div>
<div>space</div>
                    </TLTimeline>
        </div>
    )
}