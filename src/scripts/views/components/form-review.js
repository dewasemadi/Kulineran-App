class formReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="bg-menu mt-2">
        <div class="form-container container">
            <form id="form" method="post" class="my-auto">
                <p class="menu-resto-tittle mb-4">Leave a review</p>
                <label for="name" style="color: var(--text-detail-color); font-weight: 500;">Name</label>
                <input type="text" id="name" placeholder="Your name..." class="mb-3 name-text">

                <label for="review" style="color: var(--text-detail-color); font-weight: 500;">Review</label>
                <textarea type="text" class="mb-3 review-text" id="review" placeholder="Type your review here..."></textarea>
                <input type="submit" value="Submit" class="btn-submit">
            </form>
            <div class="p-5 my-auto review-illustration">
                <review-illustration></review-illustration>
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define('my-review', formReview);
