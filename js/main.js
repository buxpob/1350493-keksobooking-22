//Module2

function getRandomInt(min, max) {
  if (min < 0) {
    alert('Диапазон может быть только положительный, включая ноль!');
  }
  if (min >= max) {
    alert('Минимальные значение должно быть меньше максимального!');
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomIntFloatPoint(min, max, floatPoint = 2) {
  if (min < 0) {
    alert('Диапазон может быть только положительный, включая ноль!');
  }
  if (min >= max) {
    alert('Минимальные значение должно быть меньше максимального!');
  }

  return +(Math.random() * (max - min) + min).toFixed(floatPoint);
}

// Module3

const TYPE = ['palace', 'flat', 'house', 'bungalow'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomNumberFloatPoint(min, max, floatPoint = 5) {
  return +(Math.random() * (max - min) + min).toFixed(floatPoint);
}

const getRandomElements = (elements) => {
  return elements[Math.floor(Math.random() * elements.length)];
};

const getShuffelElements = (elements) => {
  return elements.sort(() => Math.random() - 0.5);
};

const getRandomElementsList = (elements) => {
  let elementsList = [];
  const randomLength = getRandomNumber(1, elements.length);
  const shuffelElements = getShuffelElements(elements);
  for (let i = 1; i <= randomLength; i++) {
    elementsList.push(shuffelElements[i]);
  };
  return elementsList;
};

const createAuthor = () => {
  let numberAvatar = getRandomNumber(1, 8);
  if (numberAvatar < 10) {
    numberAvatar = "0" + numberAvatar;
  };
  return {
    avatar: 'img/avatars/user' + numberAvatar + '.png'
  };
};

const createLocation = () => {
  return {
    x: getRandomNumberFloatPoint(35.65000, 35.70000),
    y: getRandomNumberFloatPoint(139.70000, 139.80000)
  };
};

const createOffer = () => {
  return {
    title: 'Заголовок предложения',
    address: getRandomNumber(1, 100) + ', ' + getRandomNumber(1, 100),
    price: getRandomNumber(1, 10),
    type: getRandomElements(TYPE),
    rooms: getRandomNumber(1, 10),
    guests: getRandomNumber(1, 10),
    checkin: getRandomElements(CHECKIN),
    checkout: getRandomElements(CHECKOUT),
    features: getRandomElementsList(FEATURES),
    description: 'Описание помещения',
    photos: getRandomElementsList(PHOTOS),
    location: createLocation()
  };
};

const createObject = () => {
  createLocation();
  getRandomElementsList(FEATURES);
  return {
    author: createAuthor(),
    offer: createOffer()
  }
};

const createArrow = (amount) => {
  const newArrow = [];
  for (let i = 1; i <= amount; i++) {
    newArrow.push(createObject());
  };
  return newArrow;
};

const finiteArrow = createArrow(10);
