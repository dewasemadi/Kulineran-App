class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer class="mt-5">
            <div class="brand-description-container">
                <div class="container pt-2">
                    <p class="footer-brand align-center py-3">Kulineran</p>
                    <p class="align-center footer-description my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse maiores rem aliquam quos numquam maxime, consectetur pariatur accusantium, eveniet illum eius explicabo exercitationem</p>
                    <p class="align-center pt-2 footer-contact-us">Contact us: <a href="mailto: ask@kulineran.com" class="text-decoration-none kulineran-email py-3">ask@kulineran.com</a></p>

                    <div class="align-center py-4 footer-icons">
                        <a href="#/" class="text-decoration-none foot-box" aria-label="facebook"><i class="bi bi-facebook foot-icon" style="font-size: 1.3rem; color: var(--text-card-description)"></i></a>
                        <a href="#/" class="text-decoration-none foot-box" aria-label="twitter"><i class="bi bi-twitter foot-icon" style="font-size: 1.3rem; color: var(--text-card-description)"></i></a>
                        <a href="#/" class="text-decoration-none foot-box" aria-label="youtube"> <i class="bi bi-youtube foot-icon" style="font-size: 1.3rem; color: var(--text-card-description)"></i></a>
                        <a href="#/" class="text-decoration-none foot-box" aria-label="telegram"><i class="bi bi-telegram foot-icon" style="font-size: 1.3rem; color: var(--text-card-description)"></i></a>
                    </div>
                </div>
            </div>

            <div class="copyright-container py-2">
                <div class="container">
                    <div class="d-flex space-between copyright-area">
                        <p class="copy-text my-2">Copyright &copy 2021 - kulineran.com</p>
                       
                        <ul class="d-flex footer-detail-area">
                            <li class="list-style-none footer-menu my-2">
                                <a href="https://github.com/dewasemadi" target="_blank" rel="noopener" class="text-decoration-none text-dark mx-2 py-3">About us</a>
                            </li> 
                            <li class="list-style-none footer-menu my-2">
                                <a href="#" class="text-decoration-none text-dark mx-2 py-3">Our team</a>
                            </li> 
                            <li class="list-style-none footer-menu my-2">
                                <a href="#" class="text-decoration-none text-dark mx-2 py-3">Term of service</a>
                            </li> 
                            <li class="list-style-none footer-menu my-2">
                                <a href="#" class="text-decoration-none text-dark mx-2 py-3">Privacy policy</a>
                            </li> 
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    `;
  }
}

customElements.define('my-footer', Footer);
