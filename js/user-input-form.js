const typePlacement = document.querySelector('#type');
const pricePerNight = document.querySelector('#price');

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const changePrice = function () {
  let price;
  switch (typePlacement.value) {
    case 'bungalow':
      price = '0';
      break;
    case 'flat':
      price = '1000';
      break;
    case 'house':
      price = '5000';
      break;
    case 'palace':
      price = '10000';
      break;
  }
  return price;
}

export const userInputForm = function () {
  typePlacement.onchange = function () {
    pricePerNight.placeholder = changePrice();
  }

  timeIn.onchange = function () {
    timeOut.value = timeIn.value;
  }

  timeOut.onchange = function () {
    timeIn.value = timeOut.value;
  }
}
