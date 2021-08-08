/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
// import FavoriteMovieIdb from '../../data/favoritemobie-idb';
// import { createMovieItemTemplate } from '../templates/templates-creator';
import FavoriteRestaurantIdb from '../../data/favoriteRestaurant-idb';
import cardRestaurantItem from '../templates/card-restaurants-overview';
import skipContent from '../templates/skip-to-content';

const Favorites = {
  async render() {
    return `
      <my-preloader></my-preloader>

      <div id="section-favorites-container">
        <empty-favorites id="empty-resto" class="d-none"></empty-favorites>
        <div class="container pb-3" id="favorite-content-restaurant">
          <p class="features-description my-2 mt-5" id="fav-tittle">Your favorites restaurant</p>
          <div id="favorites-restaurants" class="list mt-5"></div>
        </div>
      </div>
    `;
  },

  // load data from indexedDB
  async afterRender() {
    this._scrollTop();
    const emptyContainer = document.querySelector('#empty-resto');
    const restaurantsContainer = document.querySelector('#favorites-restaurants');
    const skipToContentContainer = document.querySelector('#skip-to-content');
    const favoritesContent = document.querySelector('#section-favorites-container');
    const favTittle = document.querySelector('#fav-tittle');
    skipToContentContainer.innerHTML = skipContent('#fav-tittle');

    try {
      const data = await FavoriteRestaurantIdb.getAllRestaurants();
      favoritesContent.style.display = 'none';

      if (data.length) {
        data.forEach((restaurant) => {
          restaurantsContainer.innerHTML += cardRestaurantItem(restaurant);
        });
      } else {
        favTittle.style.display = 'none';
        emptyContainer.classList.remove('d-none');
      }
      await this._deletePreloader();
      favoritesContent.style.display = 'block';
    } catch (error) {
      console.log(error);
    }
  },

  _scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },

  async _deletePreloader() {
    const preloaderContainer = document.querySelector('my-preloader');
    preloaderContainer.style.display = 'none';
  },
};

export default Favorites;
