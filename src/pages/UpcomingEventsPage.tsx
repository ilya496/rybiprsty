import CountdownTimer from "../components/CountdownTimer";
import { LuMapPin } from "react-icons/lu";
import EventMap from "../components/EventMap";

const event = {
  title: "Arabský páteček",
  date: new Date("2025-04-16T19:00:00"),
  description:
    "Zažijte nezapomenutelný rockový večer plný energie a skvělé hudby! Přijďte si poslechnout kapely Dewastix, Cido a Rybí Prsty. Těšíme se na vás!",
  location:
    "Stanice 6 (Bývalá železniční stanice Praha - Bubeneč), Goetheho, Prague 6-Bubeneč",
  image: "/images/patecek-16-4-2025.jpg",
  tickets: "https://connect.boomevents.org/en/event/arabpatecek",
};

function UpcomingEventsPage() {
  const scheduleItems = [
    { time: "19:00", name: "Open door", type: "single" },
    { startTime: "19:00", endTime: "20:30", name: "Dewastix", type: "band" },
    { startTime: "20:50", endTime: "21:50", name: "Cido", type: "band" },
    { time: "21:50", name: "Pingpongový turnaj", type: "single" },
    { startTime: "22:10", endTime: "23:00", name: "Rybí Prsty", type: "band" },
    { time: "01:00", name: "Konec akce", type: "single" },
  ];

  return (
    <div className="container">
      <section className="section event">
        <div className="event__content">
          <div className="event__info">
            <h2 className="event__title">{event.title}</h2>
            <p className="event__description">{event.description}</p>
            <p className="event__location">
              <LuMapPin />
              {event.location}
            </p>
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
        </div>
        <div className="event__separator"></div>
        <div className="event__wrapper">
          <EventMap position={[50.1073, 14.4045]} label={event.location} />
          <div className="event__schedule">
            <h3 className="event__schedule-title">Program</h3>
            <ul className="event__schedule-list">
              {scheduleItems.map((item, index) => (
                <li key={index} className="event__schedule-item">
                  <span className="event__schedule-time">
                    {item.type === "band"
                      ? `${item.startTime} - ${item.endTime}`
                      : item.time}
                  </span>
                  <span className="event__schedule-name">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UpcomingEventsPage;
