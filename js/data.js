import { getRandomInt, getRandomIntFloatPoint, getRandomElements, getShuffelElements } from './util.js'

const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const TIME_VALUES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]

const createAuthor = () => {
  let numberAvatar = getRandomInt(1, 8);
  if (numberAvatar < 10) {
    numberAvatar = 0 + numberAvatar;
  }
  return {
    avatar: 'img/avatars/user' + numberAvatar + '.png',
  }
};

const createLocation = () => {
  return {
    x: getRandomIntFloatPoint(35.65000, 35.70000),
    y: getRandomIntFloatPoint(139.70000, 139.80000),
  };
};

const getRandomElementsList = (elements) => {
  let elementsList = [];
  const randomLength = getRandomInt(1, elements.length);
  const shuffelElements = getShuffelElements(elements);
  for (let i = 1; i <= randomLength; i++) {
    elementsList.push(shuffelElements[i]);
  }
  return elementsList;
};

const createOffer = () => {
  return {
    title: 'Заголовок предложения',
    address: getRandomInt(1, 100) + ', ' + getRandomInt(1, 100),
    price: getRandomInt(1, 10),
    type: getRandomElements(TYPES),
    rooms: getRandomInt(1, 10),
    guests: getRandomInt(1, 10),
    checkin: getRandomElements(TIME_VALUES),
    checkout: getRandomElements(TIME_VALUES),
    features: getRandomElementsList(FEATURES),
    description: 'Описание помещения',
    photos: getRandomElementsList(PHOTOS),
    location: createLocation(),
  };
};

const createObject = () => {
  createLocation();
  getRandomElementsList(FEATURES);
  return {
    author: createAuthor(),
    offer: createOffer(),
  }
};

export const createArrow = (amount) => {
  const newArrow = [];
  for (let i = 1; i <= amount; i++) {
    newArrow.push(createObject());
  }
  return newArrow;
};
