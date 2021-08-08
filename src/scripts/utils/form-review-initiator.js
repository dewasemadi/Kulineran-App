import restaurantsDBSource from '../data/restaurantDB-source';
import toastNotification from './toast-notification-initiator';

const formReviewInitiator = {
  init({ id, form, name, review, container, toastContainer }) {
    this._id = id;
    this._form = form;
    this._name = name;
    this._review = review;
    this._container = container;
    this._toastContainer = toastContainer;

    form.addEventListener('submit', (event) => {
      this._formHandler(event);
    });
  },

  async _formHandler(event) {
    event.preventDefault();

    const reviewData = {
      id: this._id,
      name: this._name.value,
      review: this._review.value,
    };

    if (this._name.value !== '' && this._review.value !== '') {
      restaurantsDBSource.addReview(reviewData);
      this._form.reset();

      toastNotification.init({
        container: this._toastContainer,
        message: 'Successfully add a review',
        state: 'success',
      });

      this._renderReview(reviewData.name, reviewData.review);
    } else {
      toastNotification.init({
        container: this._toastContainer,
        message: 'Please fill the field',
        state: 'warning',
      });
    }
  },

  _renderReview(name, review) {
    const date = new Date().toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const data = `
    <div class="border-review p-3">
        <p class="user-name">${name}</p>
        <div class="d-flex my-1">
            <i class="my-auto bi bi-calendar-check calendar-icon"></i>
            <p class="my-auto ms-2 time-review">${date}</p>
        </div>
        <p class="message mt-4">${review}</p>
    </div>`;

    this._container.innerHTML += data;
  },
};

export default formReviewInitiator;
