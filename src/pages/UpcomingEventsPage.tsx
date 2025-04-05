import { useState, useEffect } from "react";

const event = {
  title: "Arabsky patecek",
  date: new Date("2025-04-16T22:00:00"),
  description:
    "Zažijte nezapomenutelný rockový večer plný energie a skvělé hudby!",
  location: "Stanice 6, Praha",
  image: "/images/patecek-16-4-2025.jpg",
  tickets: "https://connect.boomevents.org/en/event/arabpatecek",
};

interface CountdownTimerProps {
  targetDate: Date;
}

function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="countdown-segment">
          <span className="countdown-value">{value}</span>
          <span className="countdown-label">{unit.slice(0, 1)}</span>
        </div>
      ))}
    </div>
  );
}

function UpcomingEventsPage() {
  return (
    <div className="container">
      <section className="section event">
        <div className="event__info">
          <h2 className="event__title">{event.title}</h2>
          <p className="event__description">{event.description}</p>
          <p className="event__location">📍 {event.location}</p>
          <CountdownTimer targetDate={event.date} />
          <a
            href={event.tickets}
            target="_blank"
            rel="noopener noreferrer"
            className="event__tickets"
          >
            Kupte si lístky
          </a>
        </div>
        <img src={event.image} alt={event.title} className="event__img" />
      </section>
    </div>
  );
}

export default UpcomingEventsPage;
