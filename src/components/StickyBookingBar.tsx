import { useEffect, useState } from "react";
import { CalendarDays, Check, ChevronUp, Users } from "lucide-react";
import { useBooking } from "./BookingProvider";
import { hasErrors, todayISO, validateBooking, type BookingErrors } from "@/lib/booking";

export function StickyBookingBar() {
  const { openBooking } = useBooking();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [travelingWithChildren, setTravelingWithChildren] = useState(false);
  const [children, setChildren] = useState("0");
  const [expanded, setExpanded] = useState(false);

  const [errors, setErrors] = useState<BookingErrors>({});
  const [attempted, setAttempted] = useState(false);
  const today = todayISO();

  const draft = { checkIn, checkOut, guests, travelingWithChildren, children };

  useEffect(() => {
    if (attempted) setErrors(validateBooking(draft));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkIn, checkOut, guests, travelingWithChildren, children, attempted]);

  const cls = (key: keyof BookingErrors) => (errors[key] ? "field field-invalid" : "field");

  const submit = () => {
    setAttempted(true);
    const next = validateBooking(draft);
    setErrors(next);
    if (hasErrors(next)) {
      setExpanded(true);
      return;
    }
    openBooking({
      checkIn,
      checkOut,
      guests,
      travelingWithChildren,
      children,
    });
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[96] border-t border-border/80 bg-background/95 backdrop-blur">
      {/* Desktop */}
      <div className="mx-auto hidden max-w-6xl flex-col gap-3 px-6 py-4 lg:flex">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <label className="flex shrink-0 cursor-pointer items-center gap-2.5">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={travelingWithChildren}
              onChange={(e) => {
                setTravelingWithChildren(e.target.checked);
                if (!e.target.checked) setChildren("0");
              }}
            />
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-input bg-background/70 text-foreground transition-colors peer-checked:border-gold peer-checked:bg-gold peer-checked:text-primary-foreground">
              {travelingWithChildren && <Check className="h-3 w-3" />}
            </span>
            <span className="whitespace-nowrap text-xs text-muted-foreground">
              Traveling with children?
            </span>
          </label>
          {hasErrors(errors) && (
            <p className="error-text mt-0 min-w-0">{Object.values(errors).join(" ")}</p>
          )}
        </div>
        <div className="flex items-end gap-4 lg:gap-6">
          <div className="min-w-0 flex-1">
            <label className="label-xs" htmlFor="bar-in">
              Check-in
            </label>
            <input
              id="bar-in"
              type="date"
              min={today}
              aria-invalid={!!errors.checkIn}
              className={cls("checkIn")}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="min-w-0 flex-1">
            <label className="label-xs" htmlFor="bar-out">
              Check-out
            </label>
            <input
              id="bar-out"
              type="date"
              min={checkIn || today}
              aria-invalid={!!errors.checkOut}
              className={cls("checkOut")}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <div className="w-32 shrink-0">
            <label className="label-xs" htmlFor="bar-guests">
              Guests
            </label>
            <select
              id="bar-guests"
              className="field"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              {["1", "2", "3", "4", "5", "6+"].map((n) => (
                <option key={n} value={n}>
                  {n} {n === "1" ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>
          {travelingWithChildren && (
            <div className="w-24 shrink-0">
              <label className="label-xs whitespace-nowrap" htmlFor="bar-children">
                Children
              </label>
              <input
                id="bar-children"
                type="number"
                min="0"
                max="6"
                aria-invalid={!!errors.children}
                className={cls("children")}
                value={children}
                onChange={(e) => setChildren(e.target.value)}
              />
            </div>
          )}
          <button className="btn-gold shrink-0 px-5 lg:px-8" onClick={submit}>
            Book Now
          </button>
        </div>
      </div>



      {/* Mobile / Tablet */}
      <div className="lg:hidden">
        {expanded && (
          <div className="grid gap-3 px-4 pt-4">
            <div>
              <label className="label-xs" htmlFor="m-in">
                Check-in
              </label>
              <input
                id="m-in"
                type="date"
                min={today}
                aria-invalid={!!errors.checkIn}
                className={cls("checkIn")}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
              {errors.checkIn && <span className="error-text">{errors.checkIn}</span>}
            </div>
            <div>
              <label className="label-xs" htmlFor="m-out">
                Check-out
              </label>
              <input
                id="m-out"
                type="date"
                min={checkIn || today}
                aria-invalid={!!errors.checkOut}
                className={cls("checkOut")}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
              {errors.checkOut && <span className="error-text">{errors.checkOut}</span>}
            </div>
            <div>
              <label className="label-xs" htmlFor="m-guests">
                Guests
              </label>
              <select
                id="m-guests"
                className="field"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                {["1", "2", "3", "4", "5", "6+"].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
              <label className="mt-3 flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={travelingWithChildren}
                  onChange={(e) => {
                    setTravelingWithChildren(e.target.checked);
                    if (!e.target.checked) setChildren("0");
                  }}
                />
                <span className="flex h-5 w-5 items-center justify-center rounded border border-input bg-background/70 text-foreground transition-colors peer-checked:border-gold peer-checked:bg-gold peer-checked:text-primary-foreground">
                  {travelingWithChildren && <Check className="h-3.5 w-3.5" />}
                </span>
                <span className="text-xs text-muted-foreground">Traveling with children?</span>
              </label>
              {travelingWithChildren && (
                <div className="mt-3">
                  <label className="label-xs" htmlFor="m-children">
                    Number of Children
                  </label>
                  <input
                    id="m-children"
                    type="number"
                    min="0"
                    max="6"
                    aria-invalid={!!errors.children}
                    className={cls("children")}
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                  />
                  {errors.children && <span className="error-text">{errors.children}</span>}
                </div>
              )}
            </div>
          </div>
        )}
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
          <button
            className="flex min-w-0 items-center gap-3 text-left"
            onClick={() => setExpanded((v) => !v)}
          >
            <CalendarDays className="h-4 w-4 shrink-0 text-gold" />
            <span className="truncate text-xs tracking-[0.12em] text-muted-foreground">
              {checkIn || "Check-in"} — {checkOut || "Check-out"}
            </span>
            <Users className="h-4 w-4 shrink-0 text-gold" />
            <span className="shrink-0 text-xs text-muted-foreground">{guests}</span>
            <ChevronUp
              className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
          <button className="btn-gold shrink-0 px-4 py-2" onClick={submit}>
            Book
          </button>
        </div>
      </div>
    </div>
  );
}
