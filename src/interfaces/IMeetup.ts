export default interface IMeetup {
    venue: {
        venue_name: string,
        lon: number,
        lat: number
    }
    event: {
        event_id: string,
        event_name: string,
        event_url: string,
        time: number
    }
    member: {
        member_id: string,
        member_name: string,
        photo: string
    },
    guests: number,
    group: {
        group_city: string,
        group_country: string,
        group_id: string,
        group_name: string
    }
    rsvp_id: string
}