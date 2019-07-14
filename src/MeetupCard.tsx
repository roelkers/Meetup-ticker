import React from 'react'
import IMeetupCardProps from './interfaces/IMeetUpCardProps'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const MeetupCard = (props: IMeetupCardProps) => {
    const { venue, rsvp_id, group, guests, member, event } = props.meetup

    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
      setExpanded(!expanded);
    }

    return (
        <Card>
            <CardHeader avatar={
                <Avatar src={member.photo}>
                </Avatar>
            }
                title={member.member_name}
                subheader={new Date(event.time).toLocaleDateString("en-US")}
            />
            <CardContent>
                <Typography variant="h6" component="h2">
                    <Link href={event.event_url}>
                    {event.event_name}
                    </Link>
                </Typography>
                <Typography color="textSecondary">
                    {group.group_city},{group.group_country}
                </Typography>
                <Typography variant="body1" component="p">
                    {group.group_name}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
            </CardActions>
        </Card>
    )
}

export default MeetupCard