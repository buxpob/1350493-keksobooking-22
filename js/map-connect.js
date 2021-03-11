/* global L */

import { addDesibledCondition } from './util.js'
import { removeDesibledCondition } from './util.js'

const adForm = document.querySelector('.ad-form');
const mapForm = document.querySelector('.map__filters');
const buttonReset = document.querySelector('.ad-form__reset');

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

let mainPinMarker;
const addMainPinMarker = function () {
  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  });

  mainPinMarker = L.marker(
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

  mainPinMarker.addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    const lat = evt.target.getLatLng().lat.toFixed(4);
    const lng = evt.target.getLatLng().lng.toFixed(4);
    mapCoordinates.value = `${lat}, ${lng}`;
  });
}

const resetForm = function () {
  buttonReset.onclick = function (evt) {
    evt.preventDefault();
    mainPinMarker.remove(map);
    adForm.reset();
    addMainPinMarker();
  };
}

export const addPopupsMap = function (el) {

  const listDescriptionObjects = document.querySelector('.map__canvas');
  const popups = listDescriptionObjects.querySelectorAll('.popup');

  el.forEach((item, index) => {
    const popup = popups[index];
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const marker = L.marker(
      {
        lat: item.location.lat,
        lng: item.location.lng,
      },
      {
        icon,
      },
    );
    marker
      .addTo(map)
      .bindPopup(popup)
  });
}

export const addMap = function () {
  mapConnect();
  addMainPinMarker();
  resetForm();
}
