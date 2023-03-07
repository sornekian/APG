export default function EventCard({ event }) {
    return (
        <div className="event-card"
            style={{
                backgroundImage: `url(${event.posterPath})`,
                backgroundRepeat: 'no-repeat',
            }}>
            <p>{event.title}</p>
            <p>{event.eventDate}</p>
        </div>
    );
}