import { useEffect, useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import {
  ROOM_TYPES,
  hasErrors,
  sendBookingToWhatsApp,
  todayISO,
  validateBooking,
  type BookingDetails,
  type BookingErrors,
} from "@/lib/booking";

type Props = {
  initial?: Partial<BookingDetails>;
  onSubmitted?: () => void;
};

export function BookingForm({ initial, onSubmitted }: Props) {
  const [form, setForm] = useState<BookingDetails>({
    fullName: "",
    phone: "",
    email: "",
    roomType: initial?.roomType ?? ROOM_TYPES[0],
    rooms: initial?.rooms ?? "1",
    guests: initial?.guests ?? "2",
    travelingWithChildren: initial?.travelingWithChildren ?? false,
    children: initial?.children ?? "0",
    checkIn: initial?.checkIn ?? "",
    checkOut: initial?.checkOut ?? "",
  });

  const [errors, setErrors] = useState<BookingErrors>({});
  const [attempted, setAttempted] = useState(false);
  const today = todayISO();

  useEffect(() => {
    if (attempted) setErrors(validateBooking(form));
  }, [form, attempted]);

  const set = (key: keyof BookingDetails) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const err = (key: keyof BookingDetails) => (errors[key] ? "field field-invalid" : "field");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setAttempted(true);
    const next = validateBooking(form);
    setErrors(next);
    if (hasErrors(next)) return;
    sendBookingToWhatsApp(form);
    onSubmitted?.();
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className="label-xs" htmlFor="fullName">
          Full name
        </label>
        <input
          id="fullName"
          required
          className="field"
          placeholder="Your name"
          value={form.fullName}
          onChange={(e) => set("fullName")(e.target.value)}
        />
      </div>
      <div>
        <label className="label-xs" htmlFor="phone">
          WhatsApp number
        </label>
        <input
          id="phone"
          required
          type="tel"
          className="field"
          placeholder="+92 300 0000000"
          value={form.phone}
          onChange={(e) => set("phone")(e.target.value)}
        />
      </div>
      <div className="sm:col-span-2">
        <label className="label-xs" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          required
          type="email"
          className="field"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => set("email")(e.target.value)}
        />
      </div>
      <div>
        <label className="label-xs" htmlFor="roomType">
          Room type
        </label>
        <select
          id="roomType"
          className="field"
          value={form.roomType}
          onChange={(e) => set("roomType")(e.target.value)}
        >
          {ROOM_TYPES.map((room) => (
            <option key={room} value={room}>
              {room}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="label-xs" htmlFor="rooms">
            Rooms
          </label>
          <input
            id="rooms"
            type="number"
            min="1"
            max="10"
            aria-invalid={!!errors.rooms}
            className={err("rooms")}
            value={form.rooms}
            onChange={(e) => set("rooms")(e.target.value)}
          />
          {errors.rooms && <span className="error-text">{errors.rooms}</span>}
        </div>
        <div>
          <label className="label-xs" htmlFor="guests">
            Guests
          </label>
          <input
            id="guests"
            type="number"
            min="1"
            max="20"
            aria-invalid={!!errors.guests}
            className={err("guests")}
            value={form.guests}
            onChange={(e) => set("guests")(e.target.value)}
          />
          {errors.guests && <span className="error-text">{errors.guests}</span>}
        </div>
      </div>
      <div className="sm:col-span-2">
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={form.travelingWithChildren}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                travelingWithChildren: e.target.checked,
                children: e.target.checked ? prev.children : "0",
              }))
            }
          />
          <span className="flex h-5 w-5 items-center justify-center rounded border border-input bg-background/70 text-foreground transition-colors peer-checked:border-gold peer-checked:bg-gold peer-checked:text-primary-foreground">
            {form.travelingWithChildren && <Check className="h-3.5 w-3.5" />}
          </span>
          <span className="text-sm text-muted-foreground">Traveling with children?</span>
        </label>
        {form.travelingWithChildren && (
          <div className="mt-4 max-w-xs">
            <label className="label-xs" htmlFor="children">
              Number of Children
            </label>
            <input
              id="children"
              type="number"
              min="0"
              max="6"
              aria-invalid={!!errors.children}
              className={err("children")}
              value={form.children}
              onChange={(e) => set("children")(e.target.value)}
            />
            {errors.children && <span className="error-text">{errors.children}</span>}
          </div>
        )}
      </div>
      <div>
        <label className="label-xs" htmlFor="checkIn">
          Check-in
        </label>
        <input
          id="checkIn"
          required
          type="date"
          min={today}
          aria-invalid={!!errors.checkIn}
          className={err("checkIn")}
          value={form.checkIn}
          onChange={(e) => set("checkIn")(e.target.value)}
        />
        {errors.checkIn && <span className="error-text">{errors.checkIn}</span>}
      </div>
      <div>
        <label className="label-xs" htmlFor="checkOut">
          Check-out
        </label>
        <input
          id="checkOut"
          required
          type="date"
          min={form.checkIn || today}
          aria-invalid={!!errors.checkOut}
          className={err("checkOut")}
          value={form.checkOut}
          onChange={(e) => set("checkOut")(e.target.value)}
        />
        {errors.checkOut && <span className="error-text">{errors.checkOut}</span>}
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-gold w-full sm:w-auto">
          Send on WhatsApp
        </button>
        <p className="mt-3 text-xs text-muted-foreground">
          Submitting opens WhatsApp with your details written out. No payment is taken here.
        </p>
      </div>
    </form>
  );
}
