function getRandomInt(min, max) {
  if (min >= 0 && max > 0 && min < max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  } if (min >= max) {
    alert('Минимальные значение должно быть меньше максимального!');
  } else {
    alert('Диапазон может быть только положительный, включая ноль!');
  }
}

getRandomInt(1, 3);

function getRandomIntFloatPoint(min, max, floatPoint) {
  if (min >= 0 && max > 0 && min < max) {
    return +(Math.random() * (max - min) + min).toFixed(floatPoint);
  } if (min >= max) {
    alert('Минимальные значение должно быть меньше максимального!');
  } else {
    alert('Диапазон может быть только положительный, включая ноль!');
  }
}

getRandomIntFloatPoint(1, 3, 5);
