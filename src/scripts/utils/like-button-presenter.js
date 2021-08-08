import {
  likeButtonTemplate,
  likedButtonTemplate,
} from '../views/templates/detail/favorite-restaurant-button';
import FavoriteRestaurantIdb from '../data/favoriteRestaurant-idb';
import toastNotification from './toast-notification-initiator';

const likeButtonInitiator = {
  async init({ likeBtnContainer, toastContainer, restaurant }) {
    this._likeBtnContainer = likeBtnContainer;
    this._toastContainer = toastContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeBtnContainer.innerHTML = likeButtonTemplate();

    const likeBtn = document.querySelector('#likeBtn');
    likeBtn.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();

      this._renderToastAdd();
    });
  },

  _renderLiked() {
    this._likeBtnContainer.innerHTML = likedButtonTemplate();

    const likedBtn = document.querySelector('#likedBtn');
    likedBtn.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();

      this._renderToastRemoved();
    });
  },

  _renderToastAdd() {
    toastNotification.init({
      container: this._toastContainer,
      message: 'Successfully add to favorites',
      state: 'success',
    });
  },

  _renderToastRemoved() {
    toastNotification.init({
      container: this._toastContainer,
      message: 'Successfully removed from favorites',
      state: 'success',
    });
  },
};

export default likeButtonInitiator;
