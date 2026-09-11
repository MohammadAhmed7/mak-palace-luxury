import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  AirVent,
  ArrowUpDown,
  Ban,
  Car,
  CoffeeIcon,
  DoorClosed,
  Luggage,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Tv,
  Wifi,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { BookingForm } from "@/components/BookingForm";
import imgDeluxeRoom from "@/assets/img-deluxe-room.jpg";
import imgDeluxeRoom2 from "@/assets/img-deluxe-room-2.jpg";
import imgTripleSuperior from "@/assets/img-triple-superior.png";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { ImageLightbox } from "@/components/ImageLightbox";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — Mak Palace Hotel, Sialkot" },
      {
        name: "description",
        content:
          "Three room types at Mak Palace Hotel, Sialkot — Deluxe Room, Triple Superior, and Double Standard Room. Air conditioning, WiFi, TV, kettle and daily housekeeping included.",
      },
      { property: "og:title", content: "Rooms & Suites — Mak Palace Hotel" },
      {
        property: "og:description",
        content: "Three considered room types in Sialkot, reserved directly over WhatsApp.",
      },
    ],
  }),
  component: RoomsPage,
});

const amenities = [
  { icon: AirVent, label: "Air conditioning" },
  { icon: CoffeeIcon, label: "Electric kettle" },
  { icon: DoorClosed, label: "Closet" },
  { icon: Wifi, label: "High-speed WiFi" },
  { icon: Tv, label: "Flat-screen TV" },
  { icon: Sparkles, label: "Daily housekeeping" },
  { icon: Luggage, label: "Luggage storage" },
  { icon: Car, label: "Taxi service" },
  { icon: ArrowUpDown, label: "Elevator" },
  { icon: ShieldCheck, label: "24-hour security" },
  { icon: PawPrint, label: "Pets allowed" },
  { icon: Ban, label: "Smoke-free property" },
];

const roomTypes = [
  {
    name: "Deluxe Room",
    size: "32 sq m",
    bed: "One king bed",
    occupancy: "Up to two guests",
    copy: "A room designed around rest. One broad king bed, blackout curtains, and a bathroom kept bright against the deep tones of the room. A proper desk for those who need to work, and enough quiet that you actually sleep.",
    gallery: [imgDeluxeRoom],
  },
  {
    name: "Triple Superior",
    size: "44 sq m",
    bed: "One king bed & one single bed",
    occupancy: "Up to three guests",
    copy: "Built for families and travelling colleagues. Features a king bed alongside a separate single bed with a full dark wood wardrobe, a dedicated seating area with armchairs and coffee table, and individual reading lights so everyone has their own space.",
    gallery: [imgTripleSuperior, imgDeluxeRoom2],
  },
  {
    name: "Double Standard Room",
    size: "28 sq m",
    bed: "One double bed",
    occupancy: "Up to two guests",
    copy: "A clean, essential room for short stays or working trips. Deep tones, blackout curtains and a desk that is actually usable, with high-speed WiFi and daily housekeeping.",
    gallery: [hero3, hero2],
  },
];

function RoomsPage() {
  const [viewer, setViewer] = useState<{ room: string; images: string[]; index: number } | null>(
    null,
  );

  return (
    <>
      <PageHeader
        eyebrow="Accommodation"
        title="Three rooms, finished the same way"
        intro="All room types share the same standard of quiet, linen and light. Choose by how many of you there are."
        image={imgDeluxeRoom}
      />

      <section className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:space-y-24 sm:px-6 sm:py-24 lg:space-y-28 lg:py-28">
        {roomTypes.map((room, index) => (
          <Reveal key={room.name} tilt>
            <article className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <button
                  type="button"
                  onClick={() => setViewer({ room: room.name, images: room.gallery, index: 0 })}
                  className="group block w-full cursor-zoom-in overflow-hidden border border-border/60 bg-card shadow-soft"
                  aria-label={`View ${room.name} photo full screen`}
                >
                  <img
                    src={room.gallery[0]}
                    alt={room.name}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-64 sm:h-80 md:h-[22rem] lg:h-[26rem] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </button>
                {room.gallery.length > 1 && (
                  <div className={`mt-3 sm:mt-4 grid gap-3 sm:gap-4 ${room.gallery.slice(1).length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
                    {room.gallery.slice(1).map((shot, shotIndex) => (
                      <button
                        key={shot}
                        type="button"
                        onClick={() =>
                          setViewer({ room: room.name, images: room.gallery, index: shotIndex + 1 })
                        }
                        className="group block w-full cursor-zoom-in overflow-hidden border border-border/60 bg-card"
                        aria-label={`View ${room.name} photo full screen`}
                      >
                        <img
                          src={shot}
                          alt={`${room.name} detail`}
                          loading="lazy"
                          width={1280}
                          height={960}
                          className="h-44 sm:h-56 md:h-64 lg:h-48 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-2 lg:pt-0">
                <p className="eyebrow">{room.occupancy}</p>
                <h2 className="mt-3 text-3xl sm:text-4xl">{room.name}</h2>
                <div className="gold-rule mt-4" />
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{room.copy}</p>
                <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  <span>{room.size}</span>
                  <span>{room.bed}</span>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3.5 border-t border-border pt-7 sm:grid-cols-3 sm:gap-4">
                  {amenities.map((amenity) => (
                    <div key={amenity.label} className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                      <amenity.icon className="h-4 w-4 shrink-0 text-gold" />
                      <span className="truncate text-xs text-muted-foreground">
                        {amenity.label}
                      </span>
                    </div>
                  ))}
                </div>
                <a href="#booking" className="btn-gold mt-8 sm:mt-10">
                  Request this room
                </a>
              </div>
            </article>
          </Reveal>
        ))}
        <ImageLightbox
          images={viewer?.images ?? []}
          index={viewer ? viewer.index : null}
          alt={viewer?.room ?? ""}
          onClose={() => setViewer(null)}
        />
      </section>

      <section id="booking" className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:gap-14 sm:px-6 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
          <Reveal>
            <p className="eyebrow">Reservations</p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">Request your stay</h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We take reservations by conversation. Fill this in and it arrives on our WhatsApp,
              written out in full — we reply with availability and confirm from there.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="border border-border bg-card p-6 shadow-soft sm:p-10">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
