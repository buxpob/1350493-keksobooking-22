const templateSuccessPopup = document.querySelector('#success').content.querySelector('.success');
const templateErrorPopup = document.querySelector('#error').content.querySelector('.error');
const main = document.querySelector('main');

export const getRandomInt = (min, max) => {
  if (min < 0) {
    alert('Диапазон может быть только положительный, включая ноль!');
  }
  if (min >= max) {
    alert('Минимальные значение должно быть меньше максимального!');
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getRandomIntFloatPoint = (min, max, floatPoint = 2) => {
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

const closePopup = (evt, el) => {
  evt.preventDefault();
  el.style.display = 'none';
  document.onkeydown = null;
  window.onclick = null;
}

const showPopup = (template) => {
  template.style.zIndex = 999;
  main.append(template);
  template.style.display = 'block';

  document.onkeydown = (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      closePopup(evt, template);
    }
  }

  window.onclick = (evt) => {
    if (evt.target === template) {
      closePopup(evt, template);
    }
  }
}

export const showSuccessPopup = () => {
  const popupTemplate = templateSuccessPopup.cloneNode(true);
  showPopup(popupTemplate);
}

export const showErrorPopup = () => {
  const popupTemplate = templateErrorPopup.cloneNode(true);
  const buttonClose = popupTemplate.querySelector('.error__button');

  showPopup(popupTemplate);

  buttonClose.onclick = (evt) => {
    closePopup(evt, popupTemplate);
    buttonClose.onclick = null;
  }
}


export const renderPhoto = (inputFile, outputPreview, type) => {
  inputFile.onchange = () => {
    const file = inputFile.files[0];
    const fileName = file.name.toLowerCase();

    const matches = type.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      const reader = new FileReader();

      reader.onload = () => {
        outputPreview.src = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }
};

