import filmsData from "@/content/films/films.json";
import type { Film } from "@/types/film";

export const films = filmsData as Film[];

export const defaultFilm = films[0];
