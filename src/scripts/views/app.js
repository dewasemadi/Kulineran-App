/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-underscore-dangle */
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
import ActiveMenu from '../utils/active-menu-initiator';
import smoothScroll from '../utils/smooth-scroll-initiator';

class App {
  constructor({
    button, drawer, content, closeButton, navMenu,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._closeButton = closeButton;
    this._navMenu = navMenu;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      closeButton: this._closeButton,
      navMenu: this._navMenu,
    });
    // kita bisa inisialisasi komponen lain
  }

  async renderPage() {
    // get url location and active bg menu
    ActiveMenu.init(document.querySelectorAll('a'));

    // if routes not available, direct to 404 not found page
    let url = UrlParser.parseActiveUrlWithCombiner();
    if (!(url in routes)) {
      window.location.hash = '#/404';
      url = UrlParser.parseActiveUrlWithCombiner();
    }

    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    if (window.location.hash !== '#/404') {
      smoothScroll.init({
        anchorElement: document.querySelectorAll('.smooth'),
        target: document.querySelector('.smooth').getAttribute('href'),
      });
    }
  }
}

export default App;
