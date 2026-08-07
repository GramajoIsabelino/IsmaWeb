/** Rutas de assets locales bajo public/films/{id}/ */
export function filmAssetPath(filmId: string, filename: string) {
  return `/films/${filmId}/${filename}`;
}

export const FILM_ASSET_FILES = {
  background: "background.jpg",
  thumbnail: "thumbnail.jpg",
} as const;
