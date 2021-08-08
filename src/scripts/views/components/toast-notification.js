class toastNotification extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container">
            <div id="toast-container"></div>
        </div>
    `;
  }
}

customElements.define('toast-notification', toastNotification);
