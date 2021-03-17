const AMOUNT_ADS = 10;

export const getData = (onSuccess, onFail) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((ads) => ads.slice(0, AMOUNT_ADS))
    .then((ads) => onSuccess(ads))
    .catch(() => {
      onFail('При загрузке данных с сервера произошла ошибка');
    })
}

export const sendData = (body, onSuccess, onFail) => {
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

