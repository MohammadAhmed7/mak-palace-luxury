import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { useBooking } from "@/components/BookingProvider";
import { HOTEL_NAME, whatsappUrl } from "@/lib/booking";
import imgBanquet from "@/assets/img-banquet.png";
import imgRestaurant from "@/assets/img-restaurant.png";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Banquet Hall — Mak Palace Hotel, Sialkot" },
      {
        name: "description",
        content:
          "A banquet hall for up to three hundred guests at Mak Palace Hotel, Sialkot — weddings, corporate evenings and private dinners.",
      },
      { property: "og:title", content: "Events & Banquet Hall — Mak Palace Hotel" },
      {
        property: "og:description",
        content: "Weddings, corporate evenings and private dinners in Sialkot, coordinated end to end.",
      },
    ],
  }),
  component: EventsPage,
});

const formats = [
  {
    title: "Weddings",
    copy: "Mehndi, barat and valima handled as one conversation rather than three. Staging, lighting and catering coordinated in-house.",
  },
  {
    title: "Corporate evenings",
    copy: "Conferences, dealer meets and award nights, with projection, sound and a quiet room set aside for the people running it.",
  },
  {
    title: "Private dinners",
    copy: "A smaller partitioned setting for twenty to sixty, with a set menu agreed in advance and no service interruptions.",
  },
];

function EventsPage() {
  const { openBooking } = useBooking();

  return (
    <>
      <PageHeader
        eyebrow="Banquet & Events"
        title="One hall, held to one standard"
        intro="High ceilings, three hundred covers, and a single coordinator who stays with your event from the first call."
        image={imgBanquet}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {formats.map((format, i) => (
            <Reveal key={format.title} tilt delay={i * 130}>
              <article className="h-full border border-border bg-card p-6 sm:p-9 shadow-soft">
                <h2 className="text-xl sm:text-2xl">{format.title}</h2>
                <div className="gold-rule mt-3 sm:mt-4" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-5">{format.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid items-center gap-10 px-4 py-16 sm:gap-14 sm:px-6 sm:py-24 lg:max-w-7xl lg:grid-cols-2 lg:py-28">
          <Reveal>
            <img
              src={imgBanquet}
              alt="Banquet hall before an event"
              loading="lazy"
              width={1920}
              height={1080}
              className="h-64 sm:h-80 md:h-[24rem] lg:h-[28rem] w-full object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={140}>
            <p className="eyebrow">What is included</p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">Everything but the guest list</h2>
            <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3.5 border-t border-border pt-7 text-xs uppercase tracking-[0.16em] text-muted-foreground sm:mt-8 sm:grid-cols-2 sm:gap-y-4 sm:pt-8">
              {[
                "Up to 300 guests",
                "In-house catering",
                "Stage & lighting",
                "Sound system",
                "Attendant parking",
                "Guest room blocks",
                "Luggage storage",
                "Taxi service",
                "Elevator",
                "24-hour security",
                "Pets allowed",
                "Smoke-free property",
              ].map((item) => (
                <span key={item} className="block min-w-0 break-words leading-relaxed">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3.5 sm:mt-10 sm:gap-4">
              <button className="btn-gold" onClick={() => openBooking()}>
                Plan your event
              </button>
              <a
                href={whatsappUrl(`Hello ${HOTEL_NAME}, I would like to enquire about the banquet hall.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
              >
                Ask on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src={imgRestaurant}
          alt="Tables set before service"
          loading="lazy"
          width={1600}
          height={1000}
          className="h-[20rem] sm:h-[24rem] w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 text-center">
          <Reveal>
            <p className="mx-auto max-w-2xl font-serif text-xl leading-relaxed sm:text-2xl md:text-3xl">
              "The staff were accommodating and everything was clean and comfortable."
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-gold sm:mt-6">
              Family stay — Triple Superior
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
