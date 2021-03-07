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

export const addDesibledCondition = (el, attributeName) => {
  el.classList.add('ad-form--disabled');
  const itemList = el.querySelectorAll(`${attributeName}`);
  itemList.forEach((item) => {
    item.setAttribute('disabled', 'disabled');
  })
}

export const removeDesibledCondition = (el, attributeName) => {
  el.classList.remove('ad-form--disabled');
  const itemList = el.querySelectorAll(`${attributeName}`);
  itemList.forEach((item) => {
    item.removeAttribute('disabled', 'disabled');
  })
}

export const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '999';
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '28px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
}


export const showPopup = function (el) {
  const popupTemplateInfo = document.querySelector(`#${el}`).content.querySelector(`.${el}`);
  const popupTemplate = popupTemplateInfo.cloneNode(true);
  popupTemplate.style.zIndex = 999;
  document.body.append(popupTemplate);
  popupTemplate.style.display = 'none';
  popupTemplate.style.display = 'block';


  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      popupTemplate.style.display = 'none';
    }
  })

  window.onclick = function (evt) {
    if (evt.target == popupTemplate) {
      popupTemplate.style.display = 'none';
    }
  }
}
