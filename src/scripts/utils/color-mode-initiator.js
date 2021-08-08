const ColorModeInitiator = {
  init({ toggleSwitch, currentTheme }) {
    this._toggleSwitch = toggleSwitch;
    this._currentTheme = currentTheme;
    this._colorMode();
  },

  _colorMode() {
    if (this._currentTheme) {
      document.documentElement.setAttribute('data-color-mode', this._currentTheme);

      if (this._currentTheme === 'dark') {
        this._toggleSwitch.checked = true;
      }
    }

    const switchTheme = (event) => {
      if (event.target.checked) {
        document.documentElement.setAttribute('data-color-mode', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-color-mode', 'light');
        localStorage.setItem('theme', 'light');
      }
    };
    this._toggleSwitch.addEventListener('change', switchTheme, false);
  },
};

export default ColorModeInitiator;
