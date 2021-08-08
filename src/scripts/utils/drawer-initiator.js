import colorMode from './color-mode-initiator';

const DrawerInitiator = {
  init({ button, drawer, content, closeButton, navMenu }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    closeButton.addEventListener('click', (event) => {
      this._closeButton(event, drawer);
    });

    navMenu.forEach((item) => {
      item.addEventListener('click', (event) => {
        this._navMenu(event, drawer);
      });
    });

    colorMode.init({
      toggleSwitch: document.querySelector('.theme-switch input[type="checkbox"]'),
      currentTheme: localStorage.getItem('theme'),
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _closeButton(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _navMenu(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
