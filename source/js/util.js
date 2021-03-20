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


export const showPopup = function (className, classButton = null) {
  const popupTemplateInfo = document.querySelector(`#${className}`).content.querySelector(`.${className}`);
  const popupTemplate = popupTemplateInfo.cloneNode(true);
  const main = document.querySelector('main');
  popupTemplate.style.zIndex = 999;
  main.append(popupTemplate);
  popupTemplate.style.display = 'block';


  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      popupTemplate.style.display = 'none';
    }
  })

  window.onclick = function (evt) {
    if (evt.target === popupTemplate) {
      popupTemplate.style.display = 'none';
    }
  }

  if (classButton !== null) {
    const buttonClose = popupTemplate.querySelector(`.${classButton}`);
    buttonClose.onclick = function () {
      popupTemplate.style.display = 'none';
    }
  }
}

export const renderPhoto = (inputFile, outputPreview, type) => {
  inputFile.addEventListener('change', () => {
    const file = inputFile.files[0];
    const fileName = file.name.toLowerCase();

    const matches = type.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        outputPreview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  })
};

