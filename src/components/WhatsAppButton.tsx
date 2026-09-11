import { MessageCircle } from "lucide-react";
import { HOTEL_NAME, whatsappUrl } from "@/lib/booking";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl(`Hello ${HOTEL_NAME}, I would like to ask about a stay.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-4 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-surface/90 text-gold shadow-gold backdrop-blur transition-transform hover:scale-105 sm:bottom-24 sm:right-6 sm:h-14 sm:w-14"
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
  );
}
