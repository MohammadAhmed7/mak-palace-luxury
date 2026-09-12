import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import breakfast from "@/assets/breakfast.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Mak Palace Hotel, Sialkot" },
      {
        name: "description",
        content:
          "Notes from Mak Palace Hotel, Sialkot: the city, the kitchen, and what we have learned about hosting well.",
      },
      { property: "og:title", content: "Journal — Mak Palace Hotel" },
      {
        property: "og:description",
        content: "Notes on the city, the kitchen and the craft of hosting in Sialkot.",
      },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    title: "A short guide to Sialkot for the first visit",
    category: "The city",
    date: "Placeholder date",
    excerpt:
      "Where to walk in the early evening, what to bring home, and which streets are worth the detour.",
    image: hero1,
  },
  {
    title: "Notes from the kitchen: cooking a handi slowly",
    category: "Kitchen",
    date: "Placeholder date",
    excerpt: "Our head chef on heat, patience, and why the last twenty minutes decide the dish.",
    image: "/blog-kitchen.jpg",
  },
  {
    title: "How we set a hall for three hundred",
    category: "Events",
    date: "Placeholder date",
    excerpt: "The order of operations behind a banquet, from floor plan to the final light check.",
    image: "/blog-event.jpg",
  },
  {
    title: "The case for a properly early breakfast",
    category: "Dining",
    date: "Placeholder date",
    excerpt: "Why the kitchen opens at six, and what that changes for guests catching first flights.",
    image: breakfast,
  },
  {
    title: "Designing a room you can actually sleep in",
    category: "The house",
    date: "Placeholder date",
    excerpt: "Blackout curtains, warm light, and the small decisions that add up to a quiet night.",
    image: hero3,
  },
  {
    title: "What our returning guests keep asking for",
    category: "Service",
    date: "Placeholder date",
    excerpt: "The same table, the same room, tea at six. A short study in remembering people.",
    image: hero2,
  },
];

function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Notes from the house"
        intro="Occasional writing on the city, the kitchen and the craft of hosting. Placeholder entries for now."
        image={hero2}
      />

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} tilt delay={(i % 3) * 130}>
              <article className="group flex h-full flex-col overflow-hidden border border-border bg-card shadow-soft">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-56 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex flex-wrap gap-x-4 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                    <span className="text-gold">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="mt-4 text-xl leading-snug">{post.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 text-[0.65rem] uppercase tracking-[0.2em] text-gold">
                    Coming soon
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
