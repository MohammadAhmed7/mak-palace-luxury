import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { BookingForm } from "./BookingForm";

type Prefill = {
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  roomType?: string;
  travelingWithChildren?: boolean;
  children?: string;
};

type BookingContextValue = {
  openBooking: (prefill?: Prefill) => void;
};

const BookingContext = createContext<BookingContextValue>({ openBooking: () => {} });

export const useBooking = () => useContext(BookingContext);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState<Prefill>({});

  const value = useMemo<BookingContextValue>(
    () => ({
      openBooking: (p) => {
        setPrefill(p ?? {});
        setOpen(true);
      },
    }),
    [],
  );

  return (
    <BookingContext.Provider value={value}>
      {children}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 p-4 py-10 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl border border-border bg-surface p-6 shadow-soft sm:p-10">
            <button
              aria-label="Close booking form"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>
            <p className="eyebrow">Reservations</p>
            <h2 className="mt-3 text-3xl">Request your stay</h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Share your details and we will continue the conversation on WhatsApp.
            </p>
            <div className="mt-8">
              <BookingForm initial={prefill} onSubmitted={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}
