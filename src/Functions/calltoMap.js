import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
export default function calltoMap() {
  // var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
  // var MapboxWorker = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker.js");

  mapboxgl.accessToken = process.env.REACT_APP_MAPBOXGL_WICON_MAP_TOKEN;

  // mapboxgl.workerClass = MapboxWorker;
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/bav-spex/ckxlc42gr07mw14od1jxoqzcf",
    scrollZoom: true,
    center: [72.8664256, 21.0815253],
    zoom: 12,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  // locations.forEach((loc) => {
  // Create marker
  const el = document.createElement("div");
  el.className = "marker";

  // Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: "bottom",
  })
    .setLngLat([72.8664256, 21.0815253])
    .addTo(map);

  // Add Popup
  new mapboxgl.Popup({
    offset: 25,
  })
    .setHTML(`<p>Wicon Electronics</p>`)
    .setLngLat([72.8664256, 21.0815253])
    .addTo(map);

  // Extends map bounds to include current location
  bounds.extend([72.8664256, 21.0815253]);
  // });
  map.fitBounds(bounds, {
    padding: {
      top: 220,
      bottom: 220,
      // left: 250,
      // right: 250,
    },
  });
}
