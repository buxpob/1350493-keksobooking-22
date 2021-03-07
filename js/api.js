import { addPopups } from './map-connect.js'
import { createPopup } from './create-popup.js'
import { showAlert, showPopup } from './util.js'

const adForm = document.querySelector('.ad-form');


fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((ads) => {
    createPopup(ads)
    addPopups(ads)
  })
  .catch(() => {
    showAlert('При загрузке данных с сервера произошла ошибка');
  })

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        adForm.reset();
        showPopup('success');
      } else {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
});
