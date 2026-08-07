import Image from "next/image";
import { FilmList } from "@/components/films/FilmList";
import { FilmViewer } from "@/components/films/FilmViewer";
import type { Film } from "@/types/film";

interface FilmScrollSectionProps {
  films: Film[];
  activeFilm: Film;
  onFilmSelect?: (film: Film) => void;
}

export function FilmScrollSection({
  films,
  activeFilm,
  onFilmSelect,
}: FilmScrollSectionProps) {
  return (
    <section
      id="films"
      className="relative min-h-screen bg-background"
      aria-label="Catálogo de films"
    >
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[minmax(280px,1fr)_2fr]">
        <aside className="flex flex-col justify-center border-b border-foreground/10 px-6 py-24 md:px-12 lg:border-b-0 lg:border-r lg:py-32">
          <p className="mb-8 font-mono text-xs tracking-[0.3em] text-foreground/40 uppercase">
            Films
          </p>
          <FilmList
            films={films}
            activeFilmId={activeFilm.id}
            variant="scroll"
            onFilmSelect={onFilmSelect}
          />
        </aside>

        <div className="relative min-h-[60vh] lg:min-h-screen">
          <Image
            src={activeFilm.backgroundImage}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="relative z-10 h-full min-h-[60vh] lg:min-h-screen">
            <FilmViewer film={activeFilm} variant="scroll" />
          </div>
        </div>
      </div>
    </section>
  );
}
