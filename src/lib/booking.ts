export const WHATSAPP_NUMBER = "923208400089";
export const HOTEL_PHONE = "+92 320 8400089";
export const HOTEL_PHONE_RAW = "+923208400089";
export const HOTEL_ADDRESS = "Haji Pura Road, Fatehgarh, Sialkot, Punjab, Pakistan";
export const HOTEL_NAME = "Mak Palace Hotel";
export const HOTEL_CITY = "Sialkot, Pakistan";

export const ROOM_TYPES = ["Deluxe Room", "Triple Superior", "Double Standard Room"] as const;

export type BookingDetails = {
  fullName: string;
  phone: string;
  email: string;
  roomType: string;
  rooms: string;
  guests: string;
  travelingWithChildren: boolean;
  children: string;
  checkIn: string;
  checkOut: string;
};

export function buildBookingMessage(d: BookingDetails) {
  const childCount = Number(d.children) || 0;
  const guestsLine =
    d.travelingWithChildren && childCount > 0
      ? `Guests: ${d.guests} Adults, ${childCount} Children`
      : `Guests: ${d.guests} Adults`;

  return [
    `Booking request — ${HOTEL_NAME}, ${HOTEL_CITY}`,
    "",
    `Full name: ${d.fullName}`,
    `WhatsApp: ${d.phone}`,
    `Email: ${d.email}`,
    `Room type: ${d.roomType}`,
    `Number of rooms: ${d.rooms}`,
    guestsLine,
    `Check-in: ${d.checkIn}`,
    `Check-out: ${d.checkOut}`,
  ].join("\n");
}

export function whatsappUrl(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function sendBookingToWhatsApp(d: BookingDetails) {
  window.open(whatsappUrl(buildBookingMessage(d)), "_blank", "noopener,noreferrer");
}

export type BookingErrors = Partial<Record<keyof BookingDetails, string>>;

export const MAX_CHILDREN = 6;
export const MAX_GUESTS = 20;

export function todayISO() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function toCount(value: string | undefined) {
  const digits = (value ?? "").match(/\d+/);
  return digits ? Number(digits[0]) : NaN;
}

/** Validates only the fields present on the given object. */
export function validateBooking(d: Partial<BookingDetails>): BookingErrors {
  const errors: BookingErrors = {};
  const today = todayISO();

  if (d.checkIn !== undefined) {
    if (!d.checkIn) errors.checkIn = "Select a check-in date.";
    else if (d.checkIn < today) errors.checkIn = "Check-in cannot be in the past.";
  }

  if (d.checkOut !== undefined) {
    if (!d.checkOut) errors.checkOut = "Select a check-out date.";
    else if (d.checkIn && d.checkOut <= d.checkIn)
      errors.checkOut = "Check-out must be after check-in.";
  }

  if (d.rooms !== undefined) {
    const rooms = toCount(d.rooms);
    if (!Number.isFinite(rooms) || rooms < 1) errors.rooms = "Enter at least 1 room.";
    else if (rooms > 10) errors.rooms = "For more than 10 rooms, message us directly.";
  }

  if (d.guests !== undefined) {
    const guests = toCount(d.guests);
    if (!Number.isFinite(guests) || guests < 1) errors.guests = "Enter at least 1 guest.";
    else if (guests > MAX_GUESTS) errors.guests = `Maximum ${MAX_GUESTS} guests.`;
  }

  if (d.travelingWithChildren) {
    const children = toCount(d.children);
    if (!Number.isFinite(children) || children < 0)
      errors.children = "Enter a number of children.";
    else if (children < 1) errors.children = "Add at least 1 child, or uncheck the box.";
    else if (children > MAX_CHILDREN) errors.children = `Maximum ${MAX_CHILDREN} children.`;
  }

  return errors;
}

export function hasErrors(errors: BookingErrors) {
  return Object.keys(errors).length > 0;
}
