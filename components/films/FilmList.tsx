import type { Film } from "@/types/film";

interface FilmListProps {
  films: Film[];
  activeFilmId: string;
  variant?: "hero" | "scroll";
  onFilmSelect?: (film: Film) => void;
}

export function FilmList({
  films,
  activeFilmId,
  variant = "hero",
  onFilmSelect,
}: FilmListProps) {
  const isHero = variant === "hero";

  return (
    <ol
      className={
        isHero
          ? "flex flex-col gap-3 md:gap-4"
          : "flex flex-col gap-6 border-t border-foreground/10 pt-8"
      }
      aria-label="Lista de films"
    >
      {films.map((film, index) => {
        const isActive = film.id === activeFilmId;

        return (
          <li key={film.id}>
            <button
              type="button"
              className={`group w-full text-left transition-opacity ${
                isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => onFilmSelect?.(film)}
            >
              {isHero ? (
                index <= 4 ? (
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-foreground/50 tabular-nums">
                    
                  </span>
                  <span className="font-display text-lg tracking-wide text-foreground md:text-xl">
                    {film.title}
                  </span>
                </span>
              ) : null
              ) : (
                <span className="flex items-center gap-5">
                  <span className="font-mono text-xs text-foreground/40 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-base tracking-wide text-foreground md:text-lg">
                    {film.title}
                  </span>
                  <span className="font-mono text-xs text-foreground/40">
                    {film.year}
                  </span>
                </span>
              )}
            </button>
          </li>
        );
      })}
    </ol>
  );
}
