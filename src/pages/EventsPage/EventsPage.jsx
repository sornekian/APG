import { Link } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./EventsPage.css";
import "../../components/EventCard/EventCard.css";


export default function EventPage({ events }) {

    return (
        <>
            <div>
                <h2>APG Events</h2>
                <div className="event-list">
                    {events.map((event, idx) => (
                        <Link to={`/events/${event.title}`} key={idx}>
                            <div>
                                <EventCard event={event} index={idx} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            : (
            <SignUpForm />
            )
        </>
    );
}