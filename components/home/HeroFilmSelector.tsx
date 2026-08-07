import Image from "next/image";
import { FilmList } from "@/components/films/FilmList";
import { FilmViewer } from "@/components/films/FilmViewer";
import type { Film } from "@/types/film";
import { defaultFilm } from "@/data/films";

interface HeroFilmSelectorProps {
  films: Film[];
  activeFilm: Film;
  onFilmSelect: (film: Film) => void;
}

export function HeroFilmSelector({ 
  films, 
  activeFilm, 
  onFilmSelect, }: HeroFilmSelectorProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={activeFilm.backgroundImage}
          alt=""  
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 pt-32 md:px-12 md:pb-24 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div className="mb-12 lg:mb-0 lg:shrink-0">
          <FilmList
            films={films}
            activeFilmId={activeFilm.id}
            variant="hero"
            onFilmSelect={onFilmSelect}
          />
        </div>

        <div className="lg:flex-1 lg:text-right">
          <FilmViewer film={activeFilm} variant="hero" />
        </div>
      </div>
    </section>
  );
}




