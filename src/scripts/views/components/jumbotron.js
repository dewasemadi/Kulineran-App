class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="jumbotron-inner">
          <p class="jumbotron_title">Good food are <span id="typewriter" class="type-writer-font"></span></p>
          <p class="jumbotron_tagline my-3">
              Find millions of restaurants serving <br> world class food only on Kulineran!
          </p>
          <div id="button-jumbotron"></div>
      </div>
    `;
  }
}

customElements.define('my-jumbotron', Jumbotron);
