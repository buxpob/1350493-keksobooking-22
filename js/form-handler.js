import { showAlert } from './util.js'
import { showPopup } from './util.js'
import { createPopupsMap } from './create-popup.js'
import { addPopupsMap } from './map-connect.js'
import { getData } from './api.js'
import { sendData } from './api.js'


const adForm = document.querySelector('.ad-form');

export const getFormSubmit = () => {

  getData(createPopupsMap, showAlert);
  getData(addPopupsMap, showAlert);
}

export const sendFormSubmit = (success, err, el) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      new FormData(evt.target),
      () => {
        showPopup(success);
        adForm.reset();
      },
      () => showPopup(err, el),
    );
  });
};
