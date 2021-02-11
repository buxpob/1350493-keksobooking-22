export { getRandomInt };
export { getRandomIntFloatPoint };
export { getRandomElements };
export { getShuffelElements };

const getRandomInt = function (min, max) {
  if (min < 0) {
    alert('Диапазон может быть только положительный, включая ноль!');
  }
  if (min >= max) {
    alert('Минимальные значение должно быть меньше максимального!');
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomIntFloatPoint = function (min, max, floatPoint = 2) {
  if (min < 0) {
    alert('Диапазон может быть только положительный, включая ноль!');
  }
  if (min >= max) {
    alert('Минимальные значение должно быть меньше максимального!');
  }

  return +(Math.random() * (max - min) + min).toFixed(floatPoint);
}

const getRandomElements = (elements) => {
  return elements[Math.floor(Math.random() * elements.length)];
}

const getShuffelElements = (elements) => {
  return elements.sort(() => Math.random() - 0.5);
}
