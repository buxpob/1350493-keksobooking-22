const typePlacement = document.querySelector('#type');
const pricePerNight = document.querySelector('#price');

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const MapPlaceToPrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

export const userInputForm = function () {
  typePlacement.onchange = function () {
    pricePerNight.placeholder = MapPlaceToPrice[typePlacement.value];
  }

  timeIn.onchange = function () {
    timeOut.value = timeIn.value;
  }

  timeOut.onchange = function () {
    timeIn.value = timeOut.value;
  }
}
