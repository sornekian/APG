import { Link } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";
import "./EventsPage.css";
import "../../components/EventCard/EventCard.css";

export default function EventPage({ events }) {
    return (
        <>
            <h2>APG Events</h2>
            <div className="event-list">
                {events.map((event, idx) => (
                    <Link to={`/events/${event.title}`}>
                        <div>
                            <EventCard event={event} key={idx} index={idx} />
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}