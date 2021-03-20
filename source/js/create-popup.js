const AMOUNT_ADS = 10;
const Price = {
  LOW: 10000,
  HIGH: 50000,
}

import { addAdsPinMarker } from './map-connect.js'

const setTextContent = function (el, field, value, unit = '') {
  el.querySelector(`.popup__${field}`).textContent = `${value} ${unit}`;
  if (value === undefined || value.length === 0) {
    el.querySelector(`.popup__${field}`).remove();
  }
}

const getType = function (type) {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
  }
}

const listDescriptionObjects = document.querySelector('.map__canvas');
const descriptionObjectTemplate = document.querySelector('#card').content.querySelector('.popup');
const descriptionObjectFragment = document.createDocumentFragment();

const housingType = document.querySelector('#housing-type');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingPrice = document.querySelector('#housing-price');
const housingFeatures = document.querySelector('#filter-wifi');
const housingDishwasher = document.querySelector('#filter-dishwasher');
const housingParking = document.querySelector('#filter-parking');
const housingWasher = document.querySelector('#filter-washer');
const housingElevator = document.querySelector('#filter-elevator');
const housingConditioner = document.querySelector('#filter-conditioner');

const filterFeatures = (item, el) => {
  if (item.checked === false || (item.checked && el.offer.features.includes(item.value))) {
    return true;
  }
}

const filterAmount = (el, field, test) => {
  if (el.offer[`${test}`] === field.value
    || el.offer[`${test}`] === Number(field.value)
    || field.value === 'any') {
    return true;
  }
}

const filterPrice = (el) => {
  if ((el.offer.price < Price.LOW && housingPrice.value === 'low')
    || (el.offer.price > Price.LOW && el.offer.price < Price.HIGH && housingPrice.value === 'middle')
    || (el.offer.price > Price.HIGH && housingPrice.value === 'high')
    || (housingPrice.value === 'any')) {
    return true;
  }
}

const filterAds = (el) => {
  if ((filterAmount(el, housingType, 'type'))
    && (filterAmount(el, housingRooms, 'rooms'))
    && (filterAmount(el, housingGuests, 'guests'))
    && (filterPrice(el))
    && (filterFeatures(housingFeatures, el))
    && (filterFeatures(housingDishwasher, el))
    && (filterFeatures(housingParking, el))
    && (filterFeatures(housingWasher, el))
    && (filterFeatures(housingElevator, el))
    && (filterFeatures(housingConditioner, el))) {
    return true;
  }
}

let adList = [];
const clipAdList = (list) => {
  adList = [];
  for (let i = 0; i < list.length; i++) {
    if (filterAds(list[i])) {
      adList.push(list[i]);
    }
    if (adList.length >= AMOUNT_ADS) {
      break;
    }
  }
}

export const createPopupsMap = function (arr) {

  clipAdList(arr);

  adList.forEach((item) => {
    const el = descriptionObjectTemplate.cloneNode(true);

    setTextContent(el, 'title', item.offer.title);
    setTextContent(el, 'text--address', item.offer.address);
    setTextContent(el, 'text--price', item.offer.price, '₽/ночь');
    setTextContent(el, 'type', getType(item.offer.type));
    setTextContent(el, 'text--capacity', `${item.offer.rooms} комнаты для ${item.offer.guests} гостей`);
    setTextContent(el, 'text--time', `Заезд после ${item.offer.checkin}, выезд до ${item.offer.checkout}`);
    setTextContent(el, 'features', item.offer.features.join(', '));
    setTextContent(el, 'description', item.offer.description);
    setTextContent(el, 'photos', item.offer.photos.join(', '));
    setTextContent(el, 'avatar', item.author.avatar);

    descriptionObjectFragment.appendChild(el);
  });

  listDescriptionObjects.querySelectorAll('.popup').forEach((el) => {
    el.remove();
  });

  listDescriptionObjects.appendChild(descriptionObjectFragment);

  addAdsPinMarker(adList, listDescriptionObjects.querySelectorAll('.popup'));
}
