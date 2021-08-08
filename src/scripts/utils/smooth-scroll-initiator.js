/* eslint-disable prefer-destructuring */
const smoothScrollInitiator = {
  init({ anchorElement, target }) {
    this._anchorElement = anchorElement;
    this._target = target;

    anchorElement.forEach((item) => {
      item.addEventListener('click', (event) => {
        if (item.classList.contains('skip-link')) {
          item.blur();
        }
        this._smoothScroll(event);
      });
    });
  },

  _smoothScroll(event) {
    event.preventDefault();
    const offsetTop = document.querySelector(this._target).offsetTop;
    scroll({
      top: offsetTop - 100,
      behavior: 'smooth',
    });
  },
};

export default smoothScrollInitiator;
