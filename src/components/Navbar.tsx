import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useBooking } from "./BookingProvider";

const links = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/restaurant", label: "Restaurant" },
  { to: "/events", label: "Events" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { openBooking } = useBooking();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[95] transition-colors duration-500 ${
        scrolled ? "border-b border-border/70 bg-background/95 backdrop-blur" : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:grid-cols-[1fr_auto_1fr]">
        <Link to="/" className="flex items-center gap-2 xs:gap-2.5 sm:gap-3.5 min-w-0 group" onClick={() => setOpen(false)}>
          <div className="relative shrink-0">
            <img
              src="/logo-emblem.png"
              alt="Mak Palace Hotel Logo"
              className="h-8 xs:h-9 sm:h-10 md:h-12 w-auto max-w-[60px] xs:max-w-[75px] sm:max-w-[95px] md:max-w-[120px] object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)] transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <span className="block truncate font-display text-[0.72rem] xs:text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-[0.04em] sm:tracking-[0.06em] text-foreground transition-colors group-hover:text-gold">
              MAK PALACE HOTEL
            </span>
            <span className="block text-[0.48rem] xs:text-[0.52rem] sm:text-[0.58rem] tracking-[0.2em] xs:tracking-[0.26em] sm:tracking-[0.32em] text-gold uppercase">
              SIALKOT
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-gold" }}
              className="font-display text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3">
          <button className="btn-gold hidden lg:inline-flex" onClick={() => openBooking()}>
            Book Now
          </button>
          <button
            aria-label="Toggle menu"
            className="p-2 text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-3 lg:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-gold" }}
              className="border-b border-border/60 py-3 font-display text-xs uppercase tracking-[0.14em] text-muted-foreground"
            >
                {link.label}
              </Link>
            ))}
          </div>
          <button
            className="btn-gold mt-5 w-full"
            onClick={() => {
              setOpen(false);
              openBooking();
            }}
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}
