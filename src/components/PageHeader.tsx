import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
};

export function PageHeader({ eyebrow, title, intro, image }: Props) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl">{title}</h1>
          {intro && <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">{intro}</p>}
          <div className="gold-rule mt-8" />
        </Reveal>
      </div>
    </section>
  );
}
