import React from 'react';
import { useState, useEffect } from 'react'
import { fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'
import  IMeetup  from './interfaces/IMeetup'
import MeetupCard from './MeetupCard'
//import { scan } from 'rxjs/operators'

const Ticker : React.FC = () => {

    const initialMeetups: IMeetup[] = [{
        venue: {
            venue_name: '',
            lon: 0,
            lat: 0
        },
        event: {
            event_id: '',
            event_name: '',
            event_url: '',
            time: 0
        },
        member: {
            member_id: '',
            member_name: '',
            photo: ''
        },
        guests: 0,
        group: {
            group_city: '',
            group_country: '',
            group_id: '',
            group_name: ''
        },
        rsvp_id: ''
    }]

    const [meetups, setMeetups] = useState(initialMeetups)

    const webSocket = new WebSocket('ws://stream.meetup.com/2/rsvps')

    useEffect(() => {
        const subscription = fromEvent(webSocket,'message')
        .pipe(
            map(message => JSON.parse((message as any).data))
        )
        .subscribe((data) => {
            setMeetups(meetups => [data, ...meetups].slice(0,19))
            console.log(data)
        })

        return (() => subscription.unsubscribe())
    })

    return (
        <div>
            { meetups.map((meetup : IMeetup) => <MeetupCard meetup={meetup} /> )}
        </div>
        )
}

export default Ticker