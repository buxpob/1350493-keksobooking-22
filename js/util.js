export const getRandomInt = function (min, max) {
  if (min < 0) {
    alert('Диапазон может быть только положительный, включая ноль!');
  }
  if (min >= max) {
    alert('Минимальные значение должно быть меньше максимального!');
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getRandomIntFloatPoint = function (min, max, floatPoint = 2) {
  if (min < 0) {
    alert('Диапазон может быть только положительный, включая ноль!');
  }
  if (min >= max) {
    alert('Минимальные значение должно быть меньше максимального!');
  }

  return +(Math.random() * (max - min) + min).toFixed(floatPoint);
}

export const getRandomElements = (elements) => {
  return elements[Math.floor(Math.random() * elements.length)];
}

export const getShuffelElements = (elements) => {
  return elements.sort(() => Math.random() - 0.5);
}
