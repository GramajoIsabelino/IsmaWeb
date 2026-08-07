# Films — contenido local

Los datos del sitio viven en el repo, sin base de datos.

## Estructura

```
content/films/
  films.json          ← textos (título, año, descripción, sinopsis)

public/films/
  nueva-york/
    background.jpg    ← imagen fullscreen del hero / scroll
    thumbnail.jpg     ← miniatura para listas (opcional por ahora)
  horizonte-rojo/
    background.jpg
    thumbnail.jpg
  ...
```

## Editar un film

1. Abrí `content/films/films.json` y modificá el objeto del film.
2. El campo `id` debe coincidir con el nombre de la carpeta en `public/films/`.
   - Usá minúsculas y guiones: `nueva-york`, no `Nueva York`.
3. Copiá tus imágenes en `public/films/{id}/`:
   - `background.jpg` — recomendado 1920×1080 o más, horizontal.
   - `thumbnail.jpg` — recomendado 800×600 o similar.

También podés usar `.webp` si preferís; en ese caso actualizá la ruta en `films.json`
(por ejemplo `/films/nueva-york/background.webp`).

## Agregar un film nuevo

1. Agregá una entrada nueva en `films.json`.
2. Creá la carpeta `public/films/{id}/` con sus imágenes.
3. Guardá — Next.js recarga solo en desarrollo.

## Placeholder

Si aún no tenés la imagen, podés copiar temporalmente:

```
public/films/_placeholder/background.svg
```

a `public/films/{id}/background.jpg` (o renombrá a `.svg` y actualizá la ruta en JSON).
