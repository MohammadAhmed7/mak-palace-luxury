# Mak Palace Hotel Luxury

this is reference link (https://www.lasalaplazahotel.com/)

Build a complete multi-page luxury hotel website for "Mak Palace Hotel" in Sialkot, Pakistan, using React.

IMPORTANT: This is an original, independent hotel brand. Do not use any logo, address, phone number, or location copy from any other hotel or city — this is exclusively Mak Palace Hotel, Sialkot, Pakistan. No borrowed brand names or wordmarks.

THEME: Full dark theme throughout — deep charcoal/near-black backgrounds across all sections, not just the navigation bar. Build a cohesive, creative design system: one confident accent color (warm antique gold) used consistently for buttons, dividers, and highlights; consistent spacing, corner-radius, and shadow treatment across all cards and buttons; a clear, consistent typographic hierarchy across every page — elegant serif for headings, clean sans-serif for body text.

TONE AND BEHAVIOR:

- Quiet, editorial, restrained copywriting — confident and calm, not salesy

- Smooth scroll-triggered animations: sections and cards fade/slide/tilt into view on scroll, staggered slightly rather than appearing all at once

- A floating WhatsApp button fixed in the corner of the screen, visible on every page

- A sticky booking bar (Check-In, Check-Out, Guests, "Book Now" button) that stays visible while scrolling

- Editorial section breaks for Dining, Events, and Location — each its own visual moment with strong photography, not cramped text blocks

- Guest testimonials presented as elegant pull-quotes with guest name and stay type, not generic star-rating widgets

GLOBAL ELEMENTS (appear on every page):

- Navigation bar: hotel wordmark left, links center (Home, Rooms, Restaurant, Events, Blog, Contact), "Book Now" button right

- Sticky booking bar: Check-In date, Check-Out date, Guests selector, "Book Now" button

- Floating WhatsApp icon button, fixed position

- Footer: hotel name, contact icons, social icons, quick links

BOOKING LOGIC (important — no backend/database, WhatsApp only):

Every "Book Now" button and the full booking form should collect: Full Name, WhatsApp Phone Number, Email Address, Room Type, Number of Rooms, Number of Guests, Check-In Date, Check-Out Date. On submit, generate a pre-filled WhatsApp message summarizing these details and redirect the user directly to WhatsApp (using a placeholder phone number I will replace later — use +923000000000 as a placeholder). Do not connect any database or backend — this is a frontend-only site.

PAGES:

1. HOME

- Full-bleed hero with rotating photography, headline, short subheading, call-to-action button

- Sticky booking bar

- "Rooms & Suites" section: heading, subtitle, room cards with scroll-in tilt animation (photo, room name, size, bed configuration, no pricing)

- Two-column highlight section: photo + short editorial paragraph + stat highlights + button

- Full-width banquet/events banner with caption and call-to-action button

- Guest testimonials section

- FAQ accordion (5 questions: check-in/check-out times, airport transfer, WiFi, parking, banquet hall booking)

- Footer

2. ROOMS

- Page header

- Full room type listings ("Deluxe Room," "Deluxe Triple Room") with photo galleries, descriptions, amenity icons (AC, electric kettle, closet, WiFi, TV, housekeeping), no pricing

- Full booking form as described above

3. RESTAURANT

- Dining hall showcase with photos and descriptive copy about cuisine and breakfast

- Banquet/event hall section with photos and "Plan Your Event" button

4. BLOG

- Grid of article preview cards with scroll-in animation, placeholder content for now

5. CONTACT

- Placeholder address section, embedded map placeholder, WhatsApp and phone contact button, no separate form (booking form on Rooms page covers inquiries)

FUNCTIONALITY NOTES:

- No pricing displayed anywhere on the site

- Fully responsive for mobile and tablet

- Sticky booking bar collapses into a simplified expandable version on smaller screens

- Use placeholder images for now; I will replace them with real hotel photography afterward

Build this as a complete, connected multi-page site with a consistent dark design system applied throughout every page, not just the homepage.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ff1fe1a8-6fa2-40b6-ab2f-ba2273f18c4f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
