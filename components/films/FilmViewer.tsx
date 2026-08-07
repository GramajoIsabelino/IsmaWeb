import type { Film } from "@/types/film";

interface FilmViewerProps {
  film: Film;
  variant?: "hero" | "scroll";
}

export function FilmViewer({ film, variant = "hero" }: FilmViewerProps) {
  if (variant === "scroll") {
    return (
      <div className="flex h-full flex-col justify-end px-6 pb-16 md:px-12 md:pb-24">
        <p className="mb-4 font-mono text-xs tracking-[0.3em] text-foreground/50 uppercase">
          {film.year}
        </p>
        <h2 className="font-display text-4xl leading-none tracking-tight text-foreground md:text-6xl lg:text-7xl">
          {film.title}
        </h2>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-foreground/70 md:text-base">
          {film.synopsis}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl">
      <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
        {film.title}
      </h1>
      <p className="mt-6 text-sm leading-relaxed text-foreground/75 md:text-base md:leading-7">
        {film.description}
      </p>
    </div>
  );
}
