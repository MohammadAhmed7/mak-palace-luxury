import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { HOTEL_ADDRESS, HOTEL_PHONE, HOTEL_PHONE_RAW } from "@/lib/booking";

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

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface pb-32 pt-20 md:pb-40">
      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-12 px-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <div className="flex items-center gap-3.5">
            <div className="relative shrink-0">
              <img
                src="/logo.png"
                alt="Mak Palace Hotel Logo"
                className="h-12 sm:h-14 w-auto max-w-[120px] object-contain filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"
              />
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl tracking-[0.12em] text-foreground">MAK PALACE HOTEL</p>
              <p className="text-[0.6rem] tracking-[0.3em] text-gold uppercase">SIALKOT</p>
            </div>
          </div>
          <div className="gold-rule mt-4" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A quiet address in Sialkot, built around long evenings, considered service and rooms
            that ask nothing of you.
          </p>
        </div>

        <div>
          <p className="eyebrow">Quick links</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground">
            <Link to="/rooms" className="transition-colors hover:text-gold">
              Rooms &amp; Suites
            </Link>
            <Link to="/restaurant" className="transition-colors hover:text-gold">
              Restaurant
            </Link>
            <Link to="/events" className="transition-colors hover:text-gold">
              Events
            </Link>
            <Link to="/blog" className="transition-colors hover:text-gold">
              Journal
            </Link>
            <Link to="/contact" className="transition-colors hover:text-gold">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground">
            <span className="flex items-start gap-3 min-w-0">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span className="min-w-0">{HOTEL_ADDRESS}</span>
            </span>
            <a href={`tel:${HOTEL_PHONE_RAW}`} className="flex items-center gap-3 hover:text-gold min-w-0">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <span>{HOTEL_PHONE}</span>
            </a>
            <a
              href="mailto:stay@makpalacehotel.com"
              className="flex items-center gap-3 hover:text-gold min-w-0"
            >
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <span className="truncate text-xs sm:text-sm">stay@makpalacehotel.com</span>
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-muted-foreground">
            <a
              href="https://www.instagram.com/makpalacehotel_786?igsi=bXhpZXBxb2YxanI2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61589319233293"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-colors hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@mak.hotel.and.res?_r=1&_t=ZS-99QiacFYgcC"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="transition-colors hover:text-gold"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-border/70 px-6 pt-6">
        <p className="text-xs tracking-[0.12em] text-muted-foreground">
          © {new Date().getFullYear()} Mak Palace Hotel, Sialkot. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
