class Features extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="features-container my-5">
            <div class="feature-box">
                <i class="bi bi-heart feature-icon"></i>
                <p class="mt-2 feature-icon-desc">Save the favorite restaurant and you can see it anytime</p>
            </div>
            <div class="feature-box">
                <i class="bi bi-star feature-icon"></i>
                <p class="mt-2 feature-icon-desc">Get popular restaurant recommendations</p>
            </div>
            <div class="feature-box">
                <i class="bi bi-search feature-icon"></i>
                <p class="mt-2 feature-icon-desc">Search for a restaurant and find your restaurant</p>
            </div>
            <div class="feature-box">
                <i class="bi bi-egg-fried feature-icon"></i>
                <p class="mt-2 feature-icon-desc">Choose a restaurant with your menu taste</p>
            </div>
        </div>
    `;
  }
}

customElements.define('kulineran-features', Features);
