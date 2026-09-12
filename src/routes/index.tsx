import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useBooking } from "@/components/BookingProvider";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import imgDeluxeRoom from "@/assets/img-deluxe-room.jpg";
import imgTripleSuperior from "@/assets/img-triple-superior.png";
import imgLobby from "@/assets/img-lobby.jpg";
const imgBanquet = "/home-banquet.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mak Palace Hotel — Quiet Luxury in Sialkot" },
      {
        name: "description",
        content:
          "Mak Palace Hotel, Sialkot: calm rooms, an unhurried restaurant and a banquet hall built for gatherings. Reserve over WhatsApp.",
      },
      { property: "og:title", content: "Mak Palace Hotel — Quiet Luxury in Sialkot" },
      {
        property: "og:description",
        content: "Calm rooms, an unhurried restaurant and a banquet hall in Sialkot, Pakistan.",
      },
    ],
  }),
  component: Home,
});

const heroes = [hero1, hero2, hero3];

const rooms = [
  {
    name: "Deluxe Room",
    size: "32 sq m",
    bed: "One king bed",
    image: imgDeluxeRoom,
  },
  {
    name: "Triple Superior",
    size: "44 sq m",
    bed: "One king & one single bed",
    image: imgTripleSuperior,
  },
  {
    name: "Double Standard Room",
    size: "28 sq m",
    bed: "One double bed",
    image: hero3,
  },
];

const testimonials = [
  {
    quote:
      "The staff were cooperative throughout and made the stay comfortable. The room was very clean.",
    name: "Business traveller",
    stay: "Work trip, Deluxe Room",
  },
  {
    quote:
      "Staff were accommodating with our young children and arranged a mini fridge for them. The room and bathroom were clean and comfortable.",
    name: "Family stay",
    stay: "Family with children, Triple Superior",
  },
  {
    quote:
      "Excellent staff and excellent rooms — a great choice for a reasonable price.",
    name: "Solo traveller",
    stay: "Short stay, Sialkot",
  },
];

const faqs = [
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in is from 12:00 PM (last check-in 1:00 PM). Check-out is until 12:00 PM.",
  },
  {
    q: "Do you arrange airport transfer?",
    a: "Yes. Private transfer to and from Sialkot International Airport can be arranged with advance notice. Share your flight details when you send your booking request.",
  },
  {
    q: "Is WiFi available throughout the hotel?",
    a: "High-speed WiFi runs in every room, the restaurant and the banquet hall, and it is included with your stay.",
  },
  {
    q: "Is parking available on site?",
    a: "Secure on-site parking is available for guests and for event attendees, with attendant support during larger functions.",
  },
  {
    q: "How do I book the banquet hall?",
    a: "Send us the date, expected guest count and the kind of function you have in mind. We will hold the date provisionally while the details are settled.",
  },
];

function Home() {
  const { openBooking } = useBooking();
  const [index, setIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroes.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        {heroes.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Mak Palace Hotel"
            width={1920}
            height={1080}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-28 pt-32 sm:px-6 sm:pb-32 sm:pt-36">
          <Reveal>
            <p className="eyebrow">Sialkot, Pakistan</p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] sm:mt-6 sm:text-6xl lg:text-7xl">
              A calm address, kept quietly.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
              Mak Palace Hotel is built around the hours you actually spend here&nbsp; late dinners,
              early departures, and the long stretch of sleep between them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5 sm:mt-10 sm:gap-4">
              <button className="btn-gold" onClick={() => openBooking()}>
                Reserve a room
              </button>
              <Link to="/rooms" className="btn-outline-gold">
                View rooms
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-28 right-6 hidden gap-2 md:flex">
          {heroes.map((src, i) => (
            <button
              key={src}
              aria-label={`Show image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-[2px] w-10 transition-colors ${i === index ? "bg-gold" : "bg-border"}`}
            />
          ))}
        </div>
      </section>

      {/* ROOMS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Rooms &amp; Suites</p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">Rooms that ask nothing of you</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-5">
            Three room types, all finished in deep tones with soft lighting and considered storage.
            Housekeeping twice daily, and no noise you did not choose.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, i) => (
            <Reveal key={room.name} tilt delay={i * 140}>
              <article className="group overflow-hidden border border-border bg-card shadow-soft">
                <div className="overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-60 sm:h-72 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl">{room.name}</h3>
                  <div className="gold-rule mt-3 sm:mt-4" />
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.16em] text-muted-foreground sm:mt-5 sm:gap-x-8">
                    <span>{room.size}</span>
                    <span>{room.bed}</span>
                  </div>
                  <Link to="/rooms" className="btn-outline-gold mt-6 w-full justify-center sm:mt-8 sm:w-auto">
                    Room details
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HIGHLIGHT */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:gap-14 sm:px-6 sm:py-24 lg:grid-cols-2 lg:py-28">
          <Reveal>
            <img
              src={imgLobby}
              alt="The grand lobby lounge at Mak Palace Hotel"
              loading="lazy"
              width={1600}
              height={1000}
              className="h-64 sm:h-80 md:h-[24rem] lg:h-[28rem] w-full object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={140}>
            <p className="eyebrow">The house</p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">Service you notice only in its absence</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:mt-6">
              We keep a small team and a long memory. Guests return for the same room, the same
              table by the window, the same cup of tea at six in the morning. Little of it is
              announced; all of it is deliberate.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-7 sm:mt-10 sm:gap-6 sm:pt-8">
              {[
                { value: "24/7", label: "Front desk" },
                { value: "300", label: "Banquet capacity" },
                { value: "3", label: "Room types" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl text-gold sm:text-3xl">{stat.value}</p>
                  <p className="mt-1.5 text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground sm:mt-2 sm:text-[0.65rem] sm:tracking-[0.18em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <Link to="/restaurant" className="btn-gold mt-8 sm:mt-10">
              Our restaurant
            </Link>
          </Reveal>
        </div>
      </section>

      {/* EVENTS BANNER */}
      <section className="relative overflow-hidden">
        <img
          src={imgBanquet}
          alt="Banquet hall set for an evening function"
          loading="lazy"
          width={1600}
          height={1000}
          className="h-[26rem] sm:h-[30rem] md:h-[34rem] w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <Reveal className="max-w-xl">
              <p className="eyebrow">Banquet &amp; Events</p>
              <h2 className="mt-3 text-3xl sm:mt-4 sm:text-4xl md:text-5xl">Evenings that hold three hundred</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-5">
                A single hall, high ceilings, one point of contact from the first call to the last
                guest leaving.
              </p>
              <Link to="/events" className="btn-gold mt-7 sm:mt-9">
                Plan your event
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <Reveal className="max-w-xl">
          <p className="eyebrow">In their words</p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">Guests, unprompted</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:mt-16 sm:gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 140}>
              <figure className="flex h-full flex-col border-l border-gold/40 pl-5 sm:pl-7">
                <blockquote className="font-serif text-lg leading-relaxed text-foreground sm:text-xl">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:mt-7">
                  <span className="text-gold">{t.name}</span>
                  <span className="mt-1 block">{t.stay}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:gap-14 sm:px-6 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
          <Reveal>
            <p className="eyebrow">Before you arrive</p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">Questions, answered plainly</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="border-t border-border">
              {faqs.map((faq, i) => (
                <div key={faq.q} className="border-b border-border">
                  <button
                    className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5 text-left sm:py-6"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="min-w-0 font-serif text-base sm:text-lg">{faq.q}</span>
                    {openFaq === i ? (
                      <Minus className="h-4 w-4 shrink-0 text-gold" />
                    ) : (
                      <Plus className="h-4 w-4 shrink-0 text-gold" />
                    )}
                  </button>
                  {openFaq === i && (
                    <p className="pb-6 pr-4 text-sm leading-relaxed text-muted-foreground sm:pb-7 sm:pr-8">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
