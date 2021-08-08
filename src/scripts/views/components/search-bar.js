class searchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="search-container my-5 mx-auto">
        <img src="/icons/search-icon.svg" alt = "search icon">
        <input placeholder="type something here..." id="searchElement" type="search">
    </div>`;
  }
}

customElements.define('search-bar', searchBar);
