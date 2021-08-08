const activeMenuInitiator = {
  init(menuItem) {
    this._menuItem = menuItem;
    this._activeMenu();
  },

  _activeMenu() {
    this._menuItem.forEach((item) => {
      if (item.href === location.href && item.classList.contains('nav-menu')) {
        item.classList.add('nav-menu-active');
      } else {
        item.classList.remove('nav-menu-active');
      }
    });
  },
};

export default activeMenuInitiator;
