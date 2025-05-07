import Accordion from "../components/Accordion";
import AccordionItem from "../components/AccordionItem";
import Event, { ScheduleItem } from "../components/Event";

const events = [
  {
    title: "Arabský páteček 6.6.2025",
    date: new Date("2025-06-06T19:00:00"),
    description: `Přijďte na večer plný živé hudby, radosti a skvělé atmosféry! Čeká vás pořádná dávka rocku a energie, kterou jen tak nezapomenete. Na pódiu se během večera vystřídá hned deset kapel, každá s vlastním stylem a nasazením:
                JUXTAPOSITION -
                GAMETA -
                THE CREEKS -
                SYNCOPATION -
                DEWASTIX -
                OBRBEN -
                PRAGOHOLIK -
                RYBÍ PRSTY -
                CIDO -
                POED. 
                Každá z těchto kapel vám nabídne něco jiného – od krásné melodie až po pořádnou nálož punkové energie. Pokud máte rádi živou hudbu, tanec a chcete si užít večer s přáteli, tohle je přesně pro vás.
                Těšíme se na vás.`,
    location: "Praha 1, Nové Město, Národní 116/20 - Rock Café",
    image: "/images/patecek-6-6-2025.jpg",
    tickets:
      "https://goout.net/cs/arabsky-patecek-juxtaposition%2Bdalsi/szfxttx/?fbclid=PAZXh0bgNhZW0CMTEAAac4Yg1V1EnDHmrFkIexkOP-qLNf1QeA3dLsJ9SfBslMxlE5m4NJlc0Qw4L5vA_aem_2JpIA8t23L02DRxy51RJ2g",
    mapPosition: [50.0819615, 14.4182511] as [number, number],
  },
  {
    title: "Arabský páteček 16.4.2025",
    date: new Date("2025-04-16T19:00:00"),
    description:
      "Zažijte nezapomenutelný rockový večer plný energie a skvělé hudby! Přijďte si poslechnout kapely Dewastix, Cido a Rybí Prsty. Těšíme se na vás!",
    location:
      "Stanice 6 (Bývalá železniční stanice Praha - Bubeneč), Goetheho, Prague 6-Bubeneč",
    image: "/images/patecek-16-4-2025.jpg",
    tickets: "https://connect.boomevents.org/en/event/arabpatecek",
    mapPosition: [50.1073, 14.4045] as [number, number],
    schedule: [
      { time: "19:00", name: "Open door", type: "single" },
      { startTime: "19:00", endTime: "20:30", name: "Dewastix", type: "band" },
      { startTime: "20:50", endTime: "21:50", name: "Cido", type: "band" },
      { time: "21:50", name: "Pingpongový turnaj", type: "single" },
      {
        startTime: "22:10",
        endTime: "23:00",
        name: "Rybí Prsty",
        type: "band",
      },
      { time: "01:00", name: "Konec akce", type: "single" },
    ] as ScheduleItem[],
  },
];

function UpcomingEventsPage() {
  const now = new Date();
  const isUpcoming = (date: Date) => date.getTime() > now.getTime();

  return (
    <div className="container events__container">
      <Accordion>
        {events.length ? (
          events.map((event, index) => (
            <AccordionItem
              key={index}
              title={event.title}
              open={isUpcoming(event.date)}
            >
              <Event {...event} />
            </AccordionItem>
          ))
        ) : (
          <p>Žádné akce</p>
        )}
      </Accordion>
    </div>
  );
}

export default UpcomingEventsPage;
