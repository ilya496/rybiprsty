import CountdownTimer from "./CountdownTimer";
import { LuMapPin } from "react-icons/lu";
import EventMap from "./EventMap";

export type ScheduleItem =
  | { time: string; name: string; type: "single" }
  | { startTime: string; endTime: string; name: string; type: "band" };

type EventProps = {
  title: string;
  date: Date;
  description: string;
  location: string;
  image: string;
  tickets?: string;
  schedule?: ScheduleItem[];
  mapPosition?: [number, number];
};

function Event({
  title,
  date,
  description,
  location,
  image,
  tickets,
  schedule,
  mapPosition,
}: EventProps) {
  const isPast = date.getTime() < new Date().getTime();

  return (
    <section className="event">
      <div className="event__content">
        <div className="event__info">
          <h2 className="event__title">{title}</h2>
          <p className="event__description">{description}</p>
          <p className="event__location">
            <LuMapPin />
            {location}
          </p>
          <CountdownTimer targetDate={date} />
          {isPast ? (
            <p className="event__date">Akce již proběhla</p>
          ) : tickets ? (
            <a
              href={tickets}
              target="_blank"
              rel="noopener noreferrer"
              className="event__tickets"
            >
              Kupte si lístky
            </a>
          ) : (
            <p className="event__date">
              Prodej vstupenek zatím nebyl spuštěn. Sledujte novinky na profilu{" "}
              <a
                href="http://instagram.com/socialarabska"
                target="_blank"
                rel="noopener noreferrer"
                className="event__link"
              >
                @socialarabska
              </a>
              .
            </p>
          )}
        </div>
        <img src={image} alt={title} className="event__img" />
      </div>

      {mapPosition && (
        <>
          <div className="event__separator"></div>
          <div className="event__wrapper">
            <EventMap position={mapPosition} label={location} />
            {schedule && (
              <div className="event__schedule">
                <h3 className="event__schedule-title">Program</h3>
                <ul className="event__schedule-list">
                  {schedule.map((item, index) => (
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
            )}
          </div>
        </>
      )}
    </section>
  );
}

export default Event;
