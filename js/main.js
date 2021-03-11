import { userInputForm } from './user-input-form.js'
import { addMap } from './map-connect.js'
import { getFormSubmit } from './form-handler.js'
import { sendFormSubmit } from './form-handler.js'

userInputForm();

addMap();

getFormSubmit();

sendFormSubmit('success', 'error', 'error__button');
