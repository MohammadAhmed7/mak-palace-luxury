import { createFileRoute } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { HOTEL_ADDRESS, HOTEL_NAME, HOTEL_PHONE, HOTEL_PHONE_RAW, whatsappUrl } from "@/lib/booking";
import hero1 from "@/assets/hero-1.jpg";

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.33 22a6.34 6.34 0 0 0 6.33-6.33V9.05a8.16 8.16 0 0 0 4.93 1.64V7.25a4.86 4.86 0 0 1-1-.56z" />
    </svg>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mak Palace Hotel, Sialkot" },
      {
        name: "description",
        content:
          "Reach Mak Palace Hotel in Sialkot, Pakistan by WhatsApp or phone. Address, location map and front desk hours.",
      },
      { property: "og:title", content: "Contact — Mak Palace Hotel" },
      {
        property: "og:description",
        content: "Find us in Sialkot, Pakistan. Front desk open around the clock.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Location"
        title="Find us in Sialkot"
        intro="The front desk is staffed around the clock. WhatsApp is the fastest way to reach us."
        image={hero1}
      />

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">Address</p>
            <h2 className="mt-4 text-4xl">Mak Palace Hotel</h2>
            <div className="gold-rule mt-5" />
            <div className="mt-8 space-y-6 text-sm text-muted-foreground">
              <p className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{HOTEL_ADDRESS}</span>
              </p>
              <a href={`tel:${HOTEL_PHONE_RAW}`} className="flex items-center gap-4 hover:text-gold">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                {HOTEL_PHONE}
              </a>
              <a
                href="mailto:stay@makpalacehotel.com"
                className="flex items-center gap-4 hover:text-gold"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                stay@makpalacehotel.com
              </a>
              <p className="flex items-center gap-4">
                <Clock className="h-4 w-4 shrink-0 text-gold" />
                Front desk open 24 hours
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 text-muted-foreground">
              <a
                href="https://www.instagram.com/makpalacehotel_786?igsi=bXhpZXBxb2YxanI2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-gold"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61589319233293"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors hover:text-gold"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@mak.hotel.and.res?_r=1&_t=ZS-99QiacFYgcC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="transition-colors hover:text-gold"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={whatsappUrl(`Hello ${HOTEL_NAME}, I have a question about my stay.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <MessageCircle className="h-4 w-4" />
                Message on WhatsApp
              </a>
              <a href={`tel:${HOTEL_PHONE_RAW}`} className="btn-outline-gold">
                Call the hotel
              </a>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="overflow-hidden border border-border shadow-soft">
              <iframe
                title="Mak Palace Hotel Location Map"
                src="https://maps.google.com/maps?q=Haji+Pura+Road,+Fatehgarh,+Sialkot,+Punjab,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "26rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[26rem] w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
