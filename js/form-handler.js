/* global_:readonly */

import { showAlert, showPopup } from './util.js'
import { createPopupsMap } from './create-popup.js'
import { getData, sendData } from './api.js'
import { changeHousingType } from './map-connect.js'
import { resetForm } from './user-input-form.js'

const adForm = document.querySelector('.ad-form');
const RERENDER_DELAY = 500;


export const getFormSubmit = () => {
  getData((ads) => {
    createPopupsMap(ads);
    changeHousingType(_.throttle(
      () => createPopupsMap(ads),
      RERENDER_DELAY,
    ));
  }, showAlert);
}


export const sendFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      new FormData(evt.target),
      () => {
        showPopup('success');
        resetForm();
      },
      () => showPopup('error', 'error__button'),
    );
  });
};
