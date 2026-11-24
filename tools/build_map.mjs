// Рисует карту мира с точками городов одной SVG-картинкой (без внешних сервисов).
import fs from 'fs';
import { geoNaturalEarth1, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
const topo = JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-110m.json'));
let countries = feature(topo, topo.objects.countries);
countries.features = countries.features.filter(f => f.properties.name !== 'Antarctica');
const W = 1000, H = 500;
// Обрезаем мир по городам: от Калининграда до Владивостока, юг - Египет, с полями
const box = { type: 'Feature', geometry: { type: 'MultiPoint', coordinates: [[14, 70], [140, 70], [14, 24], [140, 24]] } };
const proj = geoNaturalEarth1().fitSize([W, H], box);
const path = geoPath(proj).digits(0);
const src = fs.readFileSync(process.argv[2] || 'locs.txt', 'utf8');
const locs = [...src.matchAll(/name: "([^"]+)", coords: \[([-\d.]+), ([-\d.]+)\]/g)].map(m => ({ name: m[1], lat: +m[2], lon: +m[3] }));
const land = countries.features.map(f => path(f)).filter(Boolean).join('');
const dots = locs.map(l => { const [x, y] = proj([l.lon, l.lat]); const base = l.name === 'Москва' || l.name === 'Санкт-Петербург';
  return `<g class="geo-city${base ? ' geo-base' : ''}" data-name="${l.name}" transform="translate(${x.toFixed(1)} ${y.toFixed(1)})"><circle class="geo-halo" r="${base ? 11 : 8}"/><circle class="geo-dot" r="${base ? 4.5 : 3.5}"/><title>${l.name}</title></g>`; }).join('');
const svg = `<svg id="geo-map" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Карта городов съёмок"><path class="geo-land" d="${land}"/>${dots}</svg>`;
fs.writeFileSync('map.svg', svg);
console.log(locs.length, 'городов,', (svg.length / 1024).toFixed(0), 'КБ');
