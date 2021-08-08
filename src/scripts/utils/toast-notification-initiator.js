/* eslint-disable operator-linebreak */
const toastNotificationInitiator = {
  init({ container, message, state }) {
    this._container = container;
    this._message = message;
    this._state = state;
    this._hideTimeOut = null;

    this._show(message, state);
  },

  _show(message, state) {
    clearTimeout(this._hideTimeOut);

    this._container.textContent = message;
    this._container.className =
      'toast toast--visible animate__animated animate__fadeInDown animate__faster';

    if (state) {
      this._container.classList.add(`toast--${state}`);
    }

    this._hideTimeOut = setTimeout(() => {
      this._container.classList.remove('toast--visible');
    }, 4000);
  },
};

export default toastNotificationInitiator;
