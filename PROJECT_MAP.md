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
| Презентация для клиники (Давид) | `clinic/index.html` -> https://ronnimaks.github.io/film_studio/clinic/ ; примеры `clinic/primer1.mp4`, `primer2.mp4` |
| Список городов карты | `tools/locs.txt` (Россия, Крым, Турция, Египет с 24.11) |
| Раздел «Сайт под ключ» (страница-презентация, на утверждении) | `website/index.html` -> https://ronnimaks.github.io/film_studio/website/ |
