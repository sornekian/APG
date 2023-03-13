import { Link } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";
import "./EventsPage.css";
import "../../components/EventCard/EventCard.css";


export default function EventPage({ events }) {
    const showEvents = events.length > 0;

    return (
        <>
            <h2 className="event-title">APG Events</h2>
            {showEvents && (
                <div className="event-list">
                    {events.map((event, idx) => (
                        <Link to={`/events/${event.title}`} key={idx}>
                            <div className="event-card-wrapper">
                                <EventCard event={event} index={idx} />
                            </div>
                        </Link>
                    ))}
                </div>
            )}
            {!showEvents && <p>No events found.</p>}
        </>
    );
}
