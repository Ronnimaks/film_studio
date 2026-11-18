# Карта проекта: сайт RONNIE FILM STUDIO

Сайт: https://ronnimaks.github.io/film_studio/ (GitHub Pages, ветка main)

| Что | Где |
|---|---|
| Вся страница (текст, стили, скрипты) | `index.html` |
| Главное видео сверху | `index.html`, блок `<section>` сразу после шапки, файл `video/web/hero.mp4` |
| Портфолио (4 ролика) | `index.html`, `#portfolio`; ролики грузятся при прокрутке (скрипт «ВИДЕО ПОРТФОЛИО» внизу) |
| Исходные ролики (тяжёлые, на сайте не используются) | `video/*.mp4` |
| Лёгкие ролики и заставки для сайта | `video/web/*.mp4`, `video/web/*.jpg` |
| Пережатие роликов в облаке | `.github/workflows/encode-video.yml` - запуск `gh workflow run encode-video.yml` |
| Карта городов | `index.html`, `#geography` - готовая SVG-картинка; города в массиве `locations` больше не используются |
| Перерисовать карту | `tools/build_map.mjs` (нужны d3-geo, topojson-client, world-atlas в отдельной папке): `node build_map.mjs locs.txt` -> `map.svg`, вставить вместо `<svg id="geo-map">` |
| Фото «обо мне» | `me.jpeg` |
