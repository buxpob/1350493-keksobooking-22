/* global L */
import { addDesibledCondition, removeDesibledCondition } from './util.js'
import { resetFormClickButton } from './user-input-form.js'

const adForm = document.querySelector('.ad-form');
const mapForm = document.querySelector('.map__filters');

addDesibledCondition(adForm, 'fieldset');
addDesibledCondition(mapForm, ['fieldset', 'select']);

const map = L.map('map-canvas');
const mapConnect = function () {
  map.on('load', () => {
    removeDesibledCondition(adForm, 'fieldset');
    removeDesibledCondition(mapForm, ['fieldset', 'select']);
  })
    .setView({
      lat: 35.67500,
      lng: 139.75000,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
}


const mainPinMarkerLayer = L.layerGroup();
export const addMainPinMarker = function () {

  mainPinMarkerLayer.clearLayers();

  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  });

  const mainPinMarker = L.marker(
    {
      lat: 35.67500,
      lng: 139.75000,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  )

  let mapCoordinates = document.querySelector('#address');
  const mapCoordinatesStart = `${mainPinMarker._latlng.lat}, ${mainPinMarker._latlng.lng}`;
  mapCoordinates.value = mapCoordinatesStart;

  mainPinMarkerLayer.addLayer(mainPinMarker);
  mainPinMarkerLayer.addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    const lat = evt.target.getLatLng().lat.toFixed(5);
    const lng = evt.target.getLatLng().lng.toFixed(5);
    mapCoordinates.value = `${lat}, ${lng}`;
  });
}

const listMarkers = L.layerGroup();
export const addAdsPinMarker = function (arr, listPopups) {

  listMarkers.clearLayers();

  arr
    .forEach((item, index) => {
      const popup = listPopups[index];
      const icon = L.icon({
        iconUrl: 'img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });
      const adPinMarker = L.marker(
        {
          lat: item.location.lat,
          lng: item.location.lng,
        },
        {
          icon,
        },
      );
      adPinMarker.bindPopup(popup)
      listMarkers.addLayer(adPinMarker);
    });

  listMarkers.addTo(map);
}

const type = document.querySelector('.map__filters-container');
export const changeHousingType = (cb) => {
  type.addEventListener('change', () => {
    cb();
  })
}

export const addMap = function () {
  mapConnect();
  addMainPinMarker();
  resetFormClickButton();
}
