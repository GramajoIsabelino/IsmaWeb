"use client";

import { HeroFilmSelector } from "@/components/home/HeroFilmSelector";
import { FilmScrollSection } from "@/components/home/FilmScrollSection";
import { defaultFilm, films } from "@/data/films";
import { useState } from "react";
import { ContactSection } from '@/components/home/ContactSection'

export default function Home() {

  const [activeFilmHome, setActiveFilmHome] = useState(defaultFilm);
  const [activeFilmScroll, setActiveFilmScroll] = useState(defaultFilm);

  return (
    <main>
      <HeroFilmSelector
        films={films}
        activeFilm={activeFilmHome}
        onFilmSelect={setActiveFilmHome}
      />

      <FilmScrollSection
        films={films}
        activeFilm={activeFilmScroll}
        onFilmSelect={setActiveFilmScroll}
      />

      <ContactSection/>
    </main>
  );
}
