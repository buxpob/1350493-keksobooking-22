const ADDRESS = 'https://22.javascript.pages.academy/keksobooking';

export const getData = (onSuccess, onFail) => {
  fetch(`${ADDRESS}/data`)
    .then((response) => response.json())
    .then((ads) => onSuccess(ads))
    .catch(() => {
      onFail('При загрузке данных с сервера произошла ошибка');
    })
}

export const sendData = (body, onSuccess, onFail) => {
  fetch(
    `${ADDRESS}`,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      (response.ok) ? onSuccess() : onFail();
    })
    .catch(() => {
      onFail();
    });
};

