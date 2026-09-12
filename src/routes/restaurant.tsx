import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import imgRestaurantHall from "@/assets/img-restaurant-hall.jpg";
import imgRestaurantFood from "@/assets/img-restaurant-food.jpg";
import breakfast from "@/assets/breakfast.jpg";

export const Route = createFileRoute("/restaurant")({
  head: () => ({
    meta: [
      { title: "Restaurant — Mak Palace Hotel, Sialkot" },
      {
        name: "description",
        content:
          "The dining hall at Mak Palace Hotel, Sialkot: Pakistani and continental cooking, unhurried breakfast, and a hall for private dinners.",
      },
      { property: "og:title", content: "Restaurant — Mak Palace Hotel" },
      {
        property: "og:description",
        content: "Pakistani and continental cooking served in a quiet dining hall in Sialkot.",
      },
    ],
  }),
  component: RestaurantPage,
});

function RestaurantPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dining"
        title="A dining hall, not a buffet line"
        intro="Cooked to order where it matters, laid out simply where it does not."
        image={imgRestaurantHall}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src={imgRestaurantFood}
              alt="Freshly prepared Pakistani and continental dishes"
              loading="lazy"
              width={1600}
              height={1000}
              className="h-64 sm:h-80 md:h-[24rem] lg:h-[30rem] w-full object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={140}>
            <p className="eyebrow">The kitchen</p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">Pakistani plates, continental hours</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:mt-6">
              The menu is short on purpose. Karahi and slow-cooked handi from the regional side,
              grilled and continental plates for guests who have been travelling, and a vegetarian
              option that is cooked rather than assembled. Dinner service runs late for arrivals on
              evening flights.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Room service covers the same menu until midnight.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid items-center gap-10 px-4 py-16 sm:gap-14 sm:px-6 sm:py-24 lg:max-w-7xl lg:grid-cols-2 lg:py-28">
          <Reveal className="lg:order-2">
            <img
              src={breakfast}
              alt="Breakfast served in the morning light"
              loading="lazy"
              width={1280}
              height={960}
              className="h-64 sm:h-80 md:h-[24rem] lg:h-[30rem] w-full object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={140}>
            <p className="eyebrow">Breakfast</p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">From six, quietly</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:mt-6">
              Halwa puri and anda paratha alongside eggs done how you ask, fruit, and tea poured
              properly. Breakfast is served from 6:00 am so that early departures are not a
              negotiation, and it is included with every room.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-7 text-xs uppercase tracking-[0.16em] text-muted-foreground sm:mt-9 sm:gap-6 sm:pt-8">
              <span>Breakfast · 6:00 – 10:30</span>
              <span>Lunch · 12:30 – 16:00</span>
              <span>Dinner · 19:00 – 23:30</span>
              <span>Room service · until 00:00</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src="/restaurant-images/private-dining-kitchen.jpg"
          alt="Private dining setting"
          loading="lazy"
          width={1600}
          height={1000}
          className="h-[26rem] sm:h-[30rem] md:h-[32rem] w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/72" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <Reveal className="max-w-xl">
              <p className="eyebrow">Private dining</p>
              <h2 className="mt-3 text-3xl sm:mt-4 sm:text-4xl md:text-5xl">A table, set apart</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-5">
                A quieter corner of the kitchen for small groups — a set menu, cooked to order,
                served without the rest of the room watching.
              </p>
              <Link to="/contact" className="btn-gold mt-7 sm:mt-9">
                Reserve a table
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
