/* eslint-disable import/no-unresolved */
import 'regenerator-runtime';
import App from './views/app';
import '../styles/style.css';
import swRegister from './utils/sw-register';

// components
import './views/components/footer';
import './views/components/app-bar';
import './views/components/features';
import './views/components/preloader';
import './views/components/jumbotron';
import './views/components/search-bar';
import './views/components/form-review';
import './views/components/empty-favorites';
import './views/components/toast-notification';
import './views/components/color-mode-switcher';
import './views/components/review-illustration';
import './views/components/404-not-found-illustration';

// lazy loading image
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// objek app
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
  closeButton: document.querySelector('#btnClose'),
  navMenu: document.querySelectorAll('.nav-menu'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();

  // websocket
  // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
