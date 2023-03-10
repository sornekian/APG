import { useParams } from "react-router-dom";
import './EventsDetailPage.css'

export default function EventDetailPage({ events }) {
    const { eventName } = useParams();
    const event = events.find((event) => event.title === eventName);

    return (
        <>
            <img src={event.posterPath} alt="" />
            <h2>{event.title}</h2>
            <div className="event-details">
                <p>Location - {event.eventLocation}</p>
                <p>Date - {new Date(event.eventDate).toLocaleDateString()}</p>
                <p>Time - {event.eventTime}</p>
            </div>
        </>
    );
}