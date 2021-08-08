class Appbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="navbar-container">
            <div class="container">
                <div class="navbar">
                    <button aria-label="hamburger button" id="hamburgerButton" class="hamburger-container">
                        <span class="bi bi-list hamburger-icon"></span>
                    </button>
                    
                    <div class="brand center">
                        <a href="#/" class="text-decoration-none py-3">Kulineran</a>
                    </div>
                            
                    <ul class="nav-list" id="navigationDrawer">
                        <li class="x-button-pos">
                            <button aria-label="close button" class="back btn close-container" id="btnClose">
                                <i class="bi bi-x close-icon"></i>
                            </button>
                        </li>

                        <li class="menu-li">
                            <a href="#/" class="text-decoration-none center nav-menu">Home</a>
                        </li>

                        <li class="menu-li">
                            <a href="#/favorites" class="text-decoration-none center nav-menu">Favorites</a>
                        </li>

                        <li class="menu-li">
                            <a href="https://github.com/dewasemadi" target="_blank" rel="noopener" class="text-decoration-none center nav-menu">About Us</a>
                        </li>
                    </ul>
                    <btn-color-mode></btn-color-mode>
                </div>
            </div>
        </nav>
    `;
  }
}

customElements.define('app-bar', Appbar);
